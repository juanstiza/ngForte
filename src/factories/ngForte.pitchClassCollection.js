(function(){

    'use strict';

    angular.module('ngForte.pitchClassCollection',[])
        .factory('pitchClassCollection', function(
            pitchClassCollectionFormats,
            pitchClassCollectionTypes){

            /**
             * Construct
             * @param anArray
             * @param PitchClassCollectionType
             * @param pitchFormat
             * @constructor
             */
            function PitchClassCollection(anArray, PitchClassCollectionType, pitchFormat) {
                var _pitchFormat;
                if (angular.isDefined(pitchFormat)) {
                    _pitchFormat = pitchFormat;
                } else _pitchFormat = pitchClassCollectionFormats.numeric;
                this._ = {
                    arrayValue: anArray,
                    collectionType: PitchClassCollectionType,
                    pitchFormat: _pitchFormat
                };
            }

            PitchClassCollection.prototype = {
                toString: function() {
                    return composeStringValue(this._.pitchFormat, this._.collectionType, this._.arrayValue);
                }
            };

            /**
             * Compose the string value according to the pitch format and set format.
             * @param aFormat
             * @param theCollectionFormat
             * @param myArray
             * @returns {string}
             */
            function composeStringValue(aFormat, theCollectionFormat, myArray) {
                var theFormat = aFormat;
                if (myArray.length > theCollectionFormat.max) throw 'myArray.length must be lower than '+theCollectionFormat.max;
                if (myArray.length < theCollectionFormat.min) throw 'myArray.length must be higher than '+theCollectionFormat.min;
                var theArray = [];
                angular.forEach(myArray,function(element, index){
                    this.push(theFormat[element]);
                },theArray);
                var theString = theArray.join(theCollectionFormat.separator);
                return theCollectionFormat.open+theString+theCollectionFormat.close;
            }

            /**
             * Instance methods
             * @param anArray
             * @param PitchClassCollectionType
             * @returns {PitchClassCollection}
             */
            PitchClassCollection.withArrayAndType = function(anArray, PitchClassCollectionType) {
                return new PitchClassCollection(anArray, PitchClassCollectionType);
            };

            return PitchClassCollection;

        });

}());