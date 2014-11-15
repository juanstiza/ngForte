(function(){

    'use strict';

    angular.module('ngForte.pitchClass',[])
        .factory('pitchClass', function(pitchClassCollectionFormats){

            function PitchClass(anInt, pitchFormat) {
                this._ = {
                    intValue: anInt,
                    pitchFormat: pitchFormat
                };
            }

            PitchClass.prototype = {
                get intValue() {
                    return this._.intValue;
                }
            };

            PitchClass.prototype.toString = function() {
                return composeStringValue(this._.intValue, this._.pitchFormat);
            };

            function composeStringValue(value, format) {
                return format[value];
            }

            PitchClass.withInt = function(anInt) {
                return new PitchClass(anInt, pitchClassCollectionFormats.numeric);
            };

            PitchClass.withIntAndFormat = function(anInt, aFormat) {
                return new PitchClass(anInt, aFormat);
            };

            return PitchClass;

        });

}());