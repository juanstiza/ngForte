(function(){

    'use strict';

    angular.module('ngForte.PitchClassSet',[])
        .factory('PitchClassSet',
        ['PitchClass',
            'PitchClassCollectionFormats',
            'PitchClassCollectionTypes',
            'PitchClassCollection',
            'PitchClassSetData',
            '$filter',
            function(PitchClass,
                     PitchClassCollectionFormats,
                     PitchClassCollectionTypes,
                     PitchClassCollection,
                     PitchClassSetData,
                     $filter){

            function PitchClassSet(anArray, isSet) {
                this._ = {
                    theSet : [],
                    PitchClassCollectionFormat: PitchClassCollectionFormats.numeric,
                    PitchClassCollectionType: PitchClassCollectionTypes.primeForm
                };
                if (isSet) {
                    this._.theSet = anArray;
                } else {
                    angular.forEach(anArray, function(value, index){
                        this.push(PitchClass.withInt(parseInt(value)));
                    }, this._.theSet);
                }
            }

            PitchClassSet.prototype = {
                get arrayValue() {
                    var theResult = [];
                    angular.forEach(this._.theSet, function(value, index) {
                        this.push(value.intValue);
                    }, theResult);
                    return theResult;
                },
                get normalForm() {
                    return PitchClassCollection.withArrayTypeAndFormat(this.arrayValue,
                        this._.PitchClassCollectionType,
                        this._.PitchClassCollectionFormat);
                },
                get primeForm() {
                    return getPrimeForm(this).primeForm;
                },
                get primeInversion() {
                    return getPrimeForm(this).primeInversion;
                },
                get cardinal() {
                    return this._.theSet.length;
                },
                get forteCode() {
                    return getPrimeForm(this).forteCode;
                },
                get hash() {
                    return {
                        value: hashValue(this.arrayValue),
                        map: hashMap(this.arrayValue)
                    };
                },
                get iv() {
                    return getIv(this._.theSet);
                }
            };

            function getSmallest(aPitchClassSet) {
                var multi = [];
                angular.forEach(aPitchClassSet._.theSet, function(aPitchClass, index) {
                    this.push({
                        sd:aPitchClassSet.copy().transpose(aPitchClass.intValue).normalize().sd(),
                        string:aPitchClassSet.copy().transpose(aPitchClass.intValue).normalize().normalForm.toString(),
                        value:aPitchClassSet.copy().transpose(aPitchClass.intValue).normalize()
                    });
                }, multi);
                var filter = $filter('orderBy', true);
                var ordered = filter(multi, 'sd');
                return ordered[0].value.arrayValue;
            }

            //TODO: find also inverted form, if it exists (should be either original or inverted).
            function getPrimeForm(aPitchClassSet) {
                var originalHash = getSmallest(aPitchClassSet.copy());
                var invertedHash = getSmallest(aPitchClassSet.copy().invert());
                var setData = PitchClassSetData[aPitchClassSet.arrayValue.length];
                var result = {
                    forteCode: "",
                    primeForm: {},
                    primeInversion: {},
                };
                angular.forEach(setData, function(value, index){
                    if (angular.toJson(value) === angular.toJson(originalHash)) {
                        result.primeForm = PitchClassCollection.withArrayTypeAndFormat(value, PitchClassCollectionTypes.primeForm, PitchClassCollectionFormats.numeric);
                        result.forteCode = index;
                        result.primeInversion = PitchClassCollection.withArrayTypeAndFormat(invertedHash, PitchClassCollectionTypes.primeInversion, PitchClassCollectionFormats.numeric);
                    }
                    if (angular.toJson(value) === angular.toJson(invertedHash)) {
                        result.primeForm = PitchClassCollection.withArrayTypeAndFormat(value, PitchClassCollectionTypes.primeForm, PitchClassCollectionFormats.numeric);
                        result.forteCode = index;
                        result.primeInversion = PitchClassCollection.withArrayTypeAndFormat(originalHash, PitchClassCollectionTypes.primeInversion, PitchClassCollectionFormats.numeric);
                    }
                });
                return result;
            }

            PitchClassSet.prototype.transpose = function(transposition) {
                angular.forEach(this._.theSet, function(aPitchClass, index){
                  aPitchClass.transpose(transposition);
                });
                return this;
            };

            PitchClassSet.prototype.normalize = function() {
                var filter = $filter('orderBy');
                var newSet = filter(this._.theSet, 'intValue');
                var index = newSet[0].intValue;
                this._.theSet = newSet;
                this.transpose(-index);
                return this;
            };

            PitchClassSet.prototype.invert = function() {
                angular.forEach(this._.theSet, function(aPitchClass){
                    aPitchClass.invert();
                });
                return this;
            };

            PitchClassSet.prototype.sd = function() {
                var mean = this.mean();
                var sd = 0;
                var sum = 0;
                angular.forEach(this.arrayValue, function(value){
                    sum = (mean - value) + sum;
                });
                return Math.sqrt(mean / this.arrayValue.length);
            };

            /**
             * Get the mean out of an array.
             * @param anArray
             */
            PitchClassSet.prototype.mean = function() {
                var mean = 0;
                angular.forEach(this.arrayValue, function(value){
                    mean += value;
                }, mean);
                return mean/this.arrayValue.length;
            };

            PitchClassSet.prototype.copy = function() {
                return PitchClassSet.withSet(this._.theSet);
            };

            function hashValue(anArray) {
                var value = hashMap(anArray);
                return parseInt(value.join(''), 2);
            }

            function hashMap(anArray) {
                var value = [];
                for (var i = 0; i < 12; i++) {
                    if (anArray.indexOf(i) != -1) {
                        value[i] = 1;
                    } else value[i] = 0;
                }
                return value;
            }

            /**
             * Interval Vector
             * @returns {*}
             */
            function getIv(aSet) {
                var setHashMap = {};
                angular.forEach(aSet, function(a) {
                    angular.forEach(aSet, function(b){
                        if (a.intValue != b.intValue) {
                            var hash = ((a.intValue + b.intValue + 1) / ((a.intValue * b.intValue) + 1)).toString();
                            setHashMap[hash] = [a.intValue, b.intValue];
                        }
                    });
                });
                var diffSet = [];
                angular.forEach(setHashMap, function(value){
                    diffSet.push(Math.abs(value[0] - value[1]));
                });
                var countSet = {};
                for (var i = 1; i < 7; i++) {
                    countSet[i] = 0;
                }
                angular.forEach(diffSet, function(value){
                    countSet[value%6] += 1;
                });
                var intervalVector = [];
                angular.forEach(countSet, function(value) {
                    this.push(value);
                }, intervalVector);
                return PitchClassCollection.withArrayTypeAndFormat(intervalVector,
                    PitchClassCollectionTypes.intervalVector,
                    PitchClassCollectionFormats.numeric);
            }

            PitchClassSet.withArray = function(anArray) {
                return new PitchClassSet(anArray);
            };

            PitchClassSet.withSet = function(aSet) {
                return new PitchClassSet(aSet, true);
            };

            PitchClassSet.withMap = function(aMap) {
                var set = [];
                angular.forEach(aMap, function(value, index){
                    if (value == 1) set.push(index);
                });
                return new PitchClassSet(set);
            };

            return PitchClassSet;

        }]);

}());
