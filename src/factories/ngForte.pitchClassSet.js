(function(){

    'use strict';

    angular.module('ngForte.pitchClassSet',[])
        .factory('pitchClassSet',
        ['pitchClass',
            'pitchClassCollectionFormats',
            'pitchClassCollectionTypes',
            'pitchClassCollection',
            function(pitchClass,
                     pitchClassCollectionFormats,
                     pitchClassCollectionTypes,
                     pitchClassCollection){

            function PitchClassSet(anArray) {
                this._ = {
                    theSet : [],
                    pitchClassCollectionFormat: pitchClassCollectionFormats.numeric,
                    pitchClassCollectionType: pitchClassCollectionTypes.primeForm
                };
                angular.forEach(anArray, function(value, index){
                    this.push(pitchClass.withInt(parseInt(value)));
                }, this._.theSet);
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
                }
            };

            PitchClassSet.withArray = function(anArray) {
                return new PitchClassSet(anArray);
            };

            return PitchClassSet;

        }]);

}());