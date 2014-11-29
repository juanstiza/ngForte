(function(){
    'use strict';

    describe('ngForte pitchClassCollection',function(){

        beforeEach(module('ngForte'));

        it('Should compose a string value as several formats', inject(function(pitchClassCollection, pitchClassCollectionTypes){

            var collection = pitchClassCollection.withArrayAndType([0,1,2,3], pitchClassCollectionTypes.primeForm);
            expect(collection.toString()).toEqual('(0,1,2,3)');

            collection = pitchClassCollection.withArrayAndType([0,1,2,3], pitchClassCollectionTypes.inversedForm);
            expect(collection.toString()).toEqual('[0,1,2,3]');

            collection = pitchClassCollection.withArrayAndType([0,1,2,3], pitchClassCollectionTypes.normalForm);
            expect(collection.toString()).toEqual('0,1,2,3');

            collection = pitchClassCollection.withArrayAndType([1,1,2,2,3,3], pitchClassCollectionTypes.intervalVector);
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

        it('Should instantiate pitchClass Class', inject(function(pitchClass, pitchClassCollectionFormats){

            var aPC = pitchClass.withInt(0);

            expect(aPC.intValue).toEqual(0);
            expect(aPC.stringValue(pitchClassCollectionFormats.numeric)).toEqual('0');
            expect(aPC.stringValue(pitchClassCollectionFormats.latin)).toEqual('do');

            expect(aPC.transpose(1).intValue).toEqual(1);
            expect(aPC.transpose(-1).intValue).toEqual(11);
            expect(aPC.transpose(13).intValue).toEqual(1);

            var newPC = pitchClass.withInt(7);
            expect(newPC.invert().intValue).toEqual(5);

            var newPC = pitchClass.withInt(13);
            expect(newPC.invert().intValue).toEqual(11);

        }));

    });

    describe('ngForte pitchClassSet', function(){

        beforeEach(module('ngForte'));

        //TODO: separate tests by action.
        it('Should instantiate pitchClassSet Class', inject(function(pitchClassSet){
            var aPCSet = pitchClassSet.withArray([0,1,2,3]);
            // Array value
            expect(aPCSet.arrayValue).toEqual([0,1,2,3]);
            // Cardinal
            expect(aPCSet.cardinal).toEqual(4);
            // Transposition
            expect(aPCSet.transpose(5).arrayValue).toEqual([5,6,7,8]);
            expect(aPCSet.transpose(5).normalize().arrayValue).toEqual([0,1,2,3]);
            // Inversion
            expect(aPCSet.invert().arrayValue).toEqual([0, 11, 10, 9]);
            // Inversion + transposition
            expect(
                pitchClassSet.withArray([2,3,4]).
                    invert().
                    arrayValue
            ).toEqual([10,9,8]);
            expect(
                pitchClassSet.withArray([2,3,4]).
                    invert().
                    transpose(-8).
                    arrayValue
            ).toEqual([2,1,0]);
            // String representation
            expect(aPCSet.normalForm.toString()).toEqual('(0,1,2,3)');

            var otherPCSet = pitchClassSet.withArray([0,1,7,11]);
            expect(otherPCSet.primeForm.toArray()).toEqual([0,1,2,6]);

        }));

    });

}());