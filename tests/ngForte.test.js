(function(){
    'use strict';

    describe('ngForte pitchClassCollection',function(){

        beforeEach(module('ngForte'));

        it('Should compose a string value as several formats', inject(function(pitchClassCollection, pitchClassCollectionTypes){

            var collection = pitchClassCollection.withArrayAndType([0,1,2,3], pitchClassCollectionTypes.primeForm);
            expect(collection.toString()).toEqual('(0,1,2,3)');

            var collection = pitchClassCollection.withArrayAndType([0,1,2,3], pitchClassCollectionTypes.inversedForm);
            expect(collection.toString()).toEqual('[0,1,2,3]');

            var collection = pitchClassCollection.withArrayAndType([0,1,2,3], pitchClassCollectionTypes.normalForm);
            expect(collection.toString()).toEqual('0,1,2,3');

            var collection = pitchClassCollection.withArrayAndType([1,1,2,2,3,3], pitchClassCollectionTypes.intervalVector);
            expect(collection.toString()).toEqual('<112233>');

            expect(function(pitchClassCollection){
                pitchClassCollection.withArrayAndType([1,1,2,2,3], pitchClassCollectionTypes.intervalVector);
            }).toThrow();

            expect(function(pitchClassCollection){
                pitchClassCollection.withArrayAndType([1,2,3,4,5,6,7,8,9,10,11,12], pitchClassCollectionTypes.primeForm);
            }).toThrow();

            expect(function(pitchClassCollection){
                pitchClassCollection.withArrayAndType([1,2], pitchClassCollectionTypes.primeForm);
            }).toThrow();

        }));

    });

    describe('ngForte pitchClass', function(){

        beforeEach(module('ngForte'));

        it('Should', inject(function(pitchClass, pitchClassCollectionFormats){

            var aPC = pitchClass.withInt(0);

            expect(aPC.intValue).toEqual(0);
            expect(aPC.toString()).toEqual('0');

            var otherPC = pitchClass.withIntAndFormat(0, pitchClassCollectionFormats.latin);

            expect(otherPC.toString()).toEqual('do');

        }));

    });

}());