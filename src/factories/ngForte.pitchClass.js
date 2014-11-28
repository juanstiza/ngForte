(function(){

    'use strict';

    angular.module('ngForte.pitchClass',[])
        .factory('pitchClass', function(pitchClassCollectionFormats){

            function PitchClass(anInt) {
                this._ = {
                    intValue: anInt
                };
            }

            PitchClass.prototype = {
                get intValue() {
                    return this._.intValue;
                }
            };

            PitchClass.prototype.stringValue = function(aFormat) {
                return composeStringValue(this._.intValue, aFormat);
            };

            /**
             * Build a string from the pitch class int value.
             * @param value
             * @param format
             * @returns {*}
             */
            function composeStringValue(value, format) {
                return format[value];
            }

            PitchClass.withInt = function(anInt) {
                return new PitchClass(anInt, pitchClassCollectionFormats.numeric);
            };

            return PitchClass;

        });

}());