(function(){

    'use strict';

    angular.module('ngForte.pitchClassSet',[])
        .factory('pitchClassSet', ['pitchClass', function(pitchClass){

            function PitchClassSet(anArray) {
                this._ = {
                    theSet : []
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
                }
            };

            PitchClassSet.withArray = function(anArray) {
                return new PitchClassSet(anArray);
            };

            return PitchClassSet;

        }]);

}());