(function(){

    'use strict';

    angular.module('ngForte.PitchClass',[])
        .factory('PitchClass', function(PitchClassCollectionFormats){

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
                return new PitchClass(anInt, PitchClassCollectionFormats.numeric);
            };

            PitchClass.prototype.transpose = function(transposition) {
                this._.intValue = normalize(this._.intValue + transposition);
                return this;
            };

            PitchClass.prototype.invert = function() {
                this._.intValue = invert(this._.intValue);
                return this;
            };

            /**
             * Normalize a set (AKA modulo 12)
             * @param anInt
             * @returns {number}
             */
            function normalize(anInt) {
                return ((anInt % 12) + 12) % 12;
            }

            /**
             * Set inversion
             * @param int
             * @returns {number}
             */
            function invert(int) {
                return normalize(12 - normalize(int));
            }

            return PitchClass;

        });

}());
