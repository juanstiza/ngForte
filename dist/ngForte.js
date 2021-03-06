(function(){
    'use strict';

    angular.module('ngForte.constants',[]).
        constant('PitchClassCollectionFormats',{
            numeric: {
                0:'0',
                1:'1',
                2:'2',
                3:'3',
                4:'4',
                5:'5',
                6:'6',
                7:'7',
                8:'8',
                9:'9',
                10:'10',
                11:'11'
            },
            alphanumeric: {
                0:'0',
                1:'1',
                2:'2',
                3:'3',
                4:'4',
                5:'5',
                6:'6',
                7:'7',
                8:'8',
                9:'9',
                10:'a',
                11:'b'
            },
            latin: {
                0:'do',
                1:['do#','reb'],
                2:'re',
                3:['re#','mib'],
                4:'mi',
                5:'fa',
                6:['fa#','solb'],
                7:'sol',
                8:['sol#','lab'],
                9:'la',
                10:['la#','sib'],
                11:'si'
            },
            american: {
                0:'c',
                1:['c#','db'],
                2:'d',
                3:['d#','eb'],
                4:'e',
                5:'f',
                6:['f#','gb'],
                7:'g',
                8:['g#','ab'],
                9:'a',
                10:['a#','bb'],
                11:'b'
            }
        }).
        constant('PitchClassCollectionTypes',{
            primeForm: {
                open: '(',
                close: ')',
                separator: ',',
                max: 12,
                min: 3
            },
            intervalVector: {
                open: '<',
                close: '>',
                separator: '',
                max: 6,
                min: 6
            },
            primeInversion: {
                open: '[',
                close: ']',
                separator: ',',
                max: 12,
                min: 3
            },
            normalForm: {
                open: '',
                close: '',
                separator: ',',
                max: 12,
                min: 3
            }
        }).
        constant('PitchClassSetData', {
            "3": {
                "3-1": [0, 1, 2],
                "3-2": [0, 1, 3],
                "3-3": [0, 1, 4],
                "3-4": [0, 1, 5],
                "3-5": [0, 1, 6],
                "3-6": [0, 2, 4],
                "3-7": [0, 2, 5],
                "3-8": [0, 2, 6],
                "3-9": [0, 2, 7],
                "3-10": [0, 3, 6],
                "3-11": [0, 3, 7],
                "3-12": [0, 4, 8]
            },
            "4": {
                "4-1": [0, 1, 2, 3],
                "4-2": [0, 1, 2, 4],
                "4-3": [0, 1, 3, 4],
                "4-4": [0, 1, 2, 5],
                "4-5": [0, 1, 2, 6],
                "4-6": [0, 1, 2, 7],
                "4-7": [0, 1, 4, 5],
                "4-8": [0, 1, 5, 6],
                "4-9": [0, 1, 6, 7],
                "4-10": [0, 2, 3, 5],
                "4-11": [0, 1, 3, 5],
                "4-12": [0, 2, 3, 6],
                "4-13": [0, 1, 3, 6],
                "4-14": [0, 2, 3, 7],
                "4-z15": [0, 1, 4, 6],
                "4-16": [0, 1, 5, 7],
                "4-17": [0, 3, 4, 7],
                "4-18": [0, 1, 4, 7],
                "4-19": [0, 1, 4, 8],
                "4-20": [0, 1, 5, 8],
                "4-21": [0, 2, 4, 6],
                "4-22": [0, 2, 4, 7],
                "4-23": [0, 2, 5, 7],
                "4-24": [0, 2, 4, 8],
                "4-25": [0, 2, 6, 8],
                "4-26": [0, 3, 5, 8],
                "4-27": [0, 2, 5, 8],
                "4-28": [0, 3, 6, 9],
                "4-z29": [0, 1, 3, 7]
            },
            "5": {
                "5-1": [0, 1, 2, 3, 4],
                "5-2": [0, 1, 2, 3, 5],
                "5-3": [0, 1, 2, 4, 5],
                "5-4": [0, 1, 2, 3, 6],
                "5-5": [0, 1, 2, 3, 7],
                "5-6": [0, 1, 2, 5, 6],
                "5-7": [0, 1, 2, 6, 7],
                "5-8": [0, 2, 3, 4, 6],
                "5-9": [0, 1, 2, 4, 6],
                "5-10": [0, 1, 3, 4, 6],
                "5-11": [0, 2, 3, 4, 7],
                "5-z12": [0, 1, 3, 5, 6],
                "5-13": [0, 1, 2, 4, 8],
                "5-14": [0, 1, 2, 5, 7],
                "5-15": [0, 1, 2, 6, 8],
                "5-16": [0, 1, 3, 4, 7],
                "5-z17": [0, 1, 3, 4, 8],
                "5-z18": [0, 1, 4, 5, 7],
                "5-19": [0, 1, 3, 6, 7],
                "5-20": [0, 1, 5, 6, 8],
                "5-21": [0, 1, 4, 5, 8],
                "5-22": [0, 1, 4, 7, 8],
                "5-23": [0, 2, 3, 5, 7],
                "5-24": [0, 1, 3, 5, 7],
                "5-25": [0, 2, 3, 5, 8],
                "5-26": [0, 2, 4, 5, 8],
                "5-27": [0, 1, 3, 5, 8],
                "5-28": [0, 2, 3, 6, 8],
                "5-29": [0, 1, 3, 6, 8],
                "5-30": [0, 1, 4, 6, 8],
                "5-31": [0, 1, 3, 6, 9],
                "5-32": [0, 1, 4, 6, 9],
                "5-33": [0, 2, 4, 6, 8],
                "5-34": [0, 2, 4, 6, 9],
                "5-35": [0, 2, 4, 7, 9],
                "5-z36": [0, 1, 2, 4, 7],
                "5-z37": [0, 3, 4, 5, 8],
                "5-z38": [0, 1, 2, 5, 8]
            },
            "6": {
                "6-1": [0, 1, 2, 3, 4, 5],
                "6-2": [0, 1, 2, 3, 4, 6],
                "6-z3": [0, 1, 2, 3, 5, 6],
                "6-z4": [0, 1, 2, 4, 5, 6],
                "6-5": [0, 1, 2, 3, 6, 7],
                "6-z6": [0, 1, 2, 5, 6, 7],
                "6-7": [0, 1, 2, 6, 7, 8],
                "6-8": [0, 2, 3, 4, 5, 7],
                "6-9": [0, 1, 2, 3, 5, 7],
                "6-z10": [0, 1, 3, 4, 5, 7],
                "6-z11": [0, 1, 2, 4, 5, 7],
                "6-z12": [0, 1, 2, 4, 6, 7],
                "6-z13": [0, 1, 3, 4, 6, 7],
                "6-14": [0, 1, 3, 4, 5, 8],
                "6-15": [0, 1, 2, 4, 5, 8],
                "6-16": [0, 1, 4, 5, 6, 8],
                "6-z17": [0, 1, 2, 4, 7, 8],
                "6-18": [0, 1, 2, 5, 7, 8],
                "6-z19": [0, 1, 3, 4, 7, 8],
                "6-20": [0, 1, 4, 5, 8, 9],
                "6-21": [0, 2, 3, 4, 6, 8],
                "6-22": [0, 1, 2, 4, 6, 8],
                "6-z23": [0, 2, 3, 5, 6, 8],
                "6-z24": [0, 1, 3, 4, 6, 8],
                "6-z25": [0, 1, 3, 5, 6, 8],
                "6-z26": [0, 1, 3, 5, 7, 8],
                "6-27": [0, 1, 3, 4, 6, 9],
                "6-z28": [0, 1, 3, 5, 6, 9],
                "6-z29": [0, 2, 3, 6, 7, 9],
                "6-30": [0, 1, 3, 6, 7, 9],
                "6-31": [0, 1, 4, 5, 7, 9],
                "6-32": [0, 2, 4, 5, 7, 9],
                "6-33": [0, 2, 3, 5, 7, 9],
                "6-34": [0, 1, 3, 5, 7, 9],
                "6-35": [0, 2, 4, 6, 8, 10],
                "6-z36": [0, 1, 2, 3, 4, 7],
                "6-z37": [0, 1, 2, 3, 4, 8],
                "6-z38": [0, 1, 2, 3, 7, 8],
                "6-z39": [0, 2, 3, 4, 5, 8],
                "6-z40": [0, 1, 2, 3, 5, 8],
                "6-z41": [0, 1, 2, 3, 6, 8],
                "6-z42": [0, 1, 2, 3, 6, 9],
                "6-z43": [0, 1, 2, 5, 6, 8],
                "6-z44": [0, 1, 2, 5, 6, 9],
                "6-z45": [0, 2, 3, 4, 6, 9],
                "6-z46": [0, 1, 2, 4, 6, 9],
                "6-z47": [0, 1, 2, 4, 7, 9],
                "6-z48": [0, 1, 2, 5, 7, 9],
                "6-z49": [0, 1, 3, 4, 7, 9],
                "6-z50": [0, 1, 4, 6, 7, 9]
            },
            "7": {
                "7-1": [0, 1, 2, 3, 4, 5, 6],
                "7-2": [0, 1, 2, 3, 4, 5, 7],
                "7-3": [0, 1, 2, 3, 4, 5, 8],
                "7-4": [0, 1, 2, 3, 4, 6, 7],
                "7-5": [0, 1, 2, 3, 5, 6, 7],
                "7-6": [0, 1, 2, 3, 4, 7, 8],
                "7-7": [0, 1, 2, 3, 6, 7, 8],
                "7-8": [0, 2, 3, 4, 5, 6, 8],
                "7-9": [0, 1, 2, 3, 4, 6, 8],
                "7-10": [0, 1, 2, 3, 4, 6, 9],
                "7-11": [0, 1, 3, 4, 5, 6, 8],
                "7-z12": [0, 1, 2, 3, 4, 7, 9],
                "7-13": [0, 1, 2, 4, 5, 6, 8],
                "7-14": [0, 1, 2, 3, 5, 7, 8],
                "7-15": [0, 1, 2, 4, 6, 7, 8],
                "7-16": [0, 1, 2, 3, 5, 6, 9],
                "7-z17": [0, 1, 2, 4, 5, 6, 9],
                "7-z18": [0, 1, 4, 5, 6, 7, 9],
                "7-20": [0, 1, 2, 5, 6, 7, 9],
                "7-22": [0, 1, 2, 5, 6, 8, 9],
                "7-23": [0, 2, 3, 4, 5, 7, 9],
                "7-24": [0, 1, 2, 3, 5, 7, 9],
                "7-25": [0, 2, 3, 4, 6, 7, 9],
                "7-26": [0, 1, 3, 4, 5, 7, 9],
                "7-27": [0, 1, 2, 4, 5, 7, 9],
                "7-28": [0, 1, 3, 5, 6, 7, 9],
                "7-29": [0, 1, 2, 4, 6, 7, 9],
                "7-30": [0, 1, 2, 4, 6, 8, 9],
                "7-31": [0, 1, 3, 4, 6, 7, 9],
                "7-32": [0, 1, 3, 4, 6, 8, 9],
                "7-33": [0, 1, 2, 4, 6, 8, 10],
                "7-34": [0, 1, 3, 4, 6, 8, 10],
                "7-35": [0, 1, 3, 5, 6, 8, 10],
                "7-z36": [0, 1, 2, 3, 5, 6, 8],
                "7-z37": [0, 1, 3, 4, 5, 7, 8],
                "7-z38": [0, 1, 2, 4, 5, 7, 8]
            },
            "8": {
                "8-1": [0, 1, 2, 3, 4, 5, 6, 7],
                "8-2": [0, 1, 2, 3, 4, 5, 6, 8],
                "8-3": [0, 1, 2, 3, 4, 5, 6, 9],
                "8-4": [0, 1, 2, 3, 4, 5, 7, 8],
                "8-5": [0, 1, 2, 3, 4, 6, 7, 8],
                "8-6": [0, 1, 2, 3, 5, 6, 7, 8],
                "8-7": [0, 1, 2, 3, 4, 5, 8, 9],
                "8-8": [0, 1, 2, 3, 4, 7, 8, 9],
                "8-9": [0, 1, 2, 3, 6, 7, 8, 9],
                "8-10": [0, 2, 3, 4, 5, 6, 7, 9],
                "8-11": [0, 1, 2, 3, 4, 5, 7, 9],
                "8-12": [0, 1, 3, 4, 5, 6, 7, 9],
                "8-13": [0, 1, 2, 3, 4, 6, 7, 9],
                "8-14": [0, 1, 2, 4, 5, 6, 7, 9],
                "8-z15": [0, 1, 2, 3, 4, 6, 8, 9],
                "8-16": [0, 1, 2, 3, 5, 7, 8, 9],
                "8-17": [0, 1, 3, 4, 5, 6, 8, 9],
                "8-18": [0, 1, 2, 3, 5, 6, 8, 9],
                "8-19": [0, 1, 2, 4, 5, 6, 8, 9],
                "8-20": [0, 1, 2, 4, 5, 7, 8, 9],
                "8-21": [0, 1, 2, 3, 4, 6, 8, 10],
                "8-22": [0, 1, 2, 3, 5, 6, 8, 10],
                "8-23": [0, 1, 2, 3, 5, 7, 8, 10],
                "8-24": [0, 1, 2, 4, 5, 6, 8, 10],
                "8-25": [0, 1, 2, 4, 6, 7, 8, 10],
                "8-26": [0, 1, 3, 4, 5, 7, 8, 10],
                "8-27": [0, 1, 2, 4, 5, 7, 8, 10],
                "8-28": [0, 1, 3, 4, 6, 7, 9, 10],
                "8-z29": [0, 1, 2, 3, 5, 6, 7, 9]
            },
            "9": {
                "9-1": [0, 1, 2, 3, 4, 5, 6, 7, 8],
                "9-2": [0, 1, 2, 3, 4, 5, 6, 7, 9],
                "9-3": [0, 1, 2, 3, 4, 5, 6, 8, 9],
                "9-4": [0, 1, 2, 3, 4, 5, 7, 8, 9],
                "9-5": [0, 1, 2, 3, 4, 6, 7, 8, 9],
                "9-6": [0, 1, 2, 3, 4, 5, 6, 8, 10],
                "9-7": [0, 1, 2, 3, 4, 5, 7, 8, 10],
                "9-8": [0, 1, 2, 3, 4, 6, 7, 8, 10],
                "9-9": [0, 1, 2, 3, 5, 6, 7, 8, 10],
                "9-10": [0, 1, 2, 3, 4, 6, 7, 9, 10],
                "9-11": [0, 1, 2, 3, 5, 6, 7, 9, 10],
                "9-12": [0, 1, 2, 4, 5, 6, 8, 9, 1]
            }
        });

}());
;(function(){

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
;(function(){

    'use strict';

    angular.module('ngForte.PitchClassCollection',[])
        .factory('PitchClassCollection', function(
            PitchClassCollectionFormats,
            PitchClassCollectionTypes){

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
                } else _pitchFormat = PitchClassCollectionFormats.numeric;
                this._ = {
                    arrayValue: anArray,
                    collectionType: PitchClassCollectionType,
                    pitchFormat: _pitchFormat
                };
            }

            PitchClassCollection.prototype = {
                toString: function() {
                    return composeStringValue(this._.pitchFormat, this._.collectionType, this._.arrayValue);
                },
                toArray: function() {
                    return this._.arrayValue;
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
                if (myArray.length > theCollectionFormat.max) {
                    throw 'myArray.length must be lower than '+theCollectionFormat.max;
                }
                if (myArray.length < theCollectionFormat.min) {
                    throw 'myArray.length must be higher than '+theCollectionFormat.min;
                }
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

            PitchClassCollection.withArrayTypeAndFormat = function(anArray, PitchClassCollectionType, aFormat) {
                return new PitchClassCollection(anArray, PitchClassCollectionType, aFormat);
            };

            return PitchClassCollection;

        });

}());
;(function(){

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
;(function(){
    'use strict';

    angular.module('ngForte',[
        'ngForte.constants',
        'ngForte.PitchClassCollection',
        'ngForte.PitchClass',
        'ngForte.PitchClassSet'
    ]);

}());
