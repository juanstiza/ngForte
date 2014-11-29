(function(){

    'use strict';

    angular.module('ngForte.pitchClassSet',[])
        .factory('pitchClassSet',
        ['pitchClass',
            'pitchClassCollectionFormats',
            'pitchClassCollectionTypes',
            'pitchClassCollection',
            'pitchClassSetData',
            '$filter',
            function(pitchClass,
                     pitchClassCollectionFormats,
                     pitchClassCollectionTypes,
                     pitchClassCollection,
                     pitchClassSetData,
                     $filter){

            function PitchClassSet(anArray, isSet) {
                this._ = {
                    theSet : [],
                    pitchClassCollectionFormat: pitchClassCollectionFormats.numeric,
                    pitchClassCollectionType: pitchClassCollectionTypes.primeForm
                };
                if (isSet) {
                    this._.theSet = anArray;
                } else {
                    angular.forEach(anArray, function(value, index){
                        this.push(pitchClass.withInt(parseInt(value)));
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
                    return pitchClassCollection.withArrayTypeAndFormat(this.arrayValue,
                        this._.pitchClassCollectionType,
                        this._.pitchClassCollectionFormat);
                },
                get primeForm() {
                    return getPrimeForm(this).primeForm;
                },
                get inversedForm() {
                    return getPrimeForm(this).inversedForm;
                },
                get cardinal() {
                    return this._.theSet.length;
                }
            };

            function getSmallest(aPitchClassSet) {
                var multi = [];
                angular.forEach(aPitchClassSet.arrayValue, function(value, index) {
                    multi.push({
                        sd:aPitchClassSet.transpose(value).normalize().sd(),
                        string:aPitchClassSet.transpose(value).normalize().normalForm.toString(),
                        value:aPitchClassSet.transpose(value).normalize()
                    });
                }, multi);
                var filter = $filter('orderBy');
                var ordered = filter(multi, 'sd');
                return ordered[0].value.arrayValue;
            }

            //TODO: find also inverted form, if it exists (should be either original or inverted).
            function getPrimeForm(aPitchClassSet) {
                var originalHash = getSmallest(aPitchClassSet);
                var invertedHash = getSmallest(aPitchClassSet.invert());
                var setData = pitchClassSetData[aPitchClassSet.arrayValue.length];
                var result = {
                    forteCode: "",
                    primeForm: {},
                    inversedForm: {},
                };
                var forteCode = "";
                var primeForm = [];
                angular.forEach(setData, function(value, index){
                    if (angular.toJson(value) === angular.toJson(originalHash)) {
                        result.primeForm = pitchClassCollection.withArrayTypeAndFormat(value, pitchClassCollectionTypes.primeForm, pitchClassCollectionFormats.numeric);
                        result.forteCode = index;
                        result.inversedForm = pitchClassCollection.withArrayTypeAndFormat(invertedHash, pitchClassCollectionTypes.inversedForm, pitchClassCollectionFormats.numeric);;
                    }
                    if (angular.toJson(value) === angular.toJson(invertedHash)) {
                        result.primeForm = pitchClassCollection.withArrayTypeAndFormat(value, pitchClassCollectionTypes.primeForm, pitchClassCollectionFormats.numeric);
                        result.forteCode = index;
                        result.inversedForm = pitchClassCollection.withArrayTypeAndFormat(originalHash, pitchClassCollectionTypes.inversedForm, pitchClassCollectionFormats.numeric);;
                    }
                });
                return result;
            }

            PitchClassSet.prototype.transpose = function(transposition) {
                var newSet = [];
                angular.forEach(this._.theSet, function(value, index){
                    this.push(value.transpose(transposition));
                }, newSet);
                return PitchClassSet.withSet(newSet);
            };

            PitchClassSet.prototype.normalize = function() {
                var filter = $filter('orderBy');
                var newSet = filter(this._.theSet, 'intValue');
                var index = newSet[0].intValue;
                return PitchClassSet.withSet(newSet).transpose(-index);
            };

            PitchClassSet.prototype.invert = function() {
                var newSet = [];
                angular.forEach(this._.theSet, function(value){
                    this.push(value.invert());
                }, newSet);
                return PitchClassSet.withSet(newSet);
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

            PitchClassSet.withArray = function(anArray) {
                return new PitchClassSet(anArray);
            };

            PitchClassSet.withSet = function(aSet) {
                return new PitchClassSet(aSet, true);
            };

            return PitchClassSet;

        }]);

}());