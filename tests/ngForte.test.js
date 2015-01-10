(function(){
    'use strict';

    describe('ngForte PitchClassCollection',function(){

        beforeEach(module('ngForte'));

        it('Should compose a collection string value as prime form',
          inject(function(PitchClassCollection, PitchClassCollectionTypes){

          var collection = PitchClassCollection.withArrayAndType([0,1,2,3], PitchClassCollectionTypes.primeForm);
          expect(collection.toString()).toEqual('(0,1,2,3)');

        }));

        it('Should compose a collection string value as prime inversion',
          inject(function(PitchClassCollection, PitchClassCollectionTypes){

          var collection = PitchClassCollection.withArrayAndType([0,1,2,3],
            PitchClassCollectionTypes.primeInversion);
          expect(collection.toString()).toEqual('[0,1,2,3]');

        }));

        it('Should compose a collection string value as normal form',
          inject(function(PitchClassCollection, PitchClassCollectionTypes){

          var collection = PitchClassCollection.withArrayAndType([0,1,2,3],
            PitchClassCollectionTypes.normalForm);
          expect(collection.toString()).toEqual('0,1,2,3');

        }));

        it('Should compose a collection string value as interval vector',
          inject(function(PitchClassCollection, PitchClassCollectionTypes){

          var collection = PitchClassCollection.withArrayAndType([1,1,2,2,3,3],
            PitchClassCollectionTypes.intervalVector);
          expect(collection.toString()).toEqual('<112233>');

        }));

        it('Should throw error on malformed interval vector',
          inject(function(PitchClassCollection, PitchClassCollectionTypes){

          expect(function(PitchClassCollection){
            PitchClassCollection.withArrayAndType([1,1,2,2,3],
              PitchClassCollectionTypes.intervalVector);
          }).toThrow();

        }));

        it('Should throw error on malformed pitch class set',
          inject(function(PitchClassCollection, PitchClassCollectionTypes){

          expect(function(PitchClassCollection){
            PitchClassCollection.withArrayAndType([1,2,3,4,5,6,7,8,9,10,11,12],
              PitchClassCollectionTypes.primeForm);
          }).toThrow();

          expect(function(PitchClassCollection){
            PitchClassCollection.withArrayAndType([1,2],
              PitchClassCollectionTypes.primeForm);
          }).toThrow();

        }));

    });

    describe('ngForte PitchClass', function(){

        beforeEach(module('ngForte'));

        it('Should instantiate PitchClass Class',
          inject(function(PitchClass, PitchClassCollectionFormats){

            expect(PitchClass.withInt(0).intValue).toEqual(0);

        }));

        it('Should transpose a PitchClass',
          inject(function(PitchClass, PitchClassCollectionFormats){

          expect(PitchClass.withInt(0).transpose(1).intValue).toEqual(1);
          expect(PitchClass.withInt(0).transpose(-1).intValue).toEqual(11);
          expect(PitchClass.withInt(0).transpose(13).intValue).toEqual(1);

          expect(PitchClass.withInt(0).transpose(5).transpose(-3).intValue).toEqual(2);

        }));

        it('Should represent a PitchClass as string value',
          inject(function(PitchClass, PitchClassCollectionFormats){

          var aPC = PitchClass.withInt(0);
          expect(aPC.stringValue(PitchClassCollectionFormats.numeric)).toEqual('0');
          expect(aPC.stringValue(PitchClassCollectionFormats.latin)).toEqual('do');

        }));

        it('Should invert a PitchClass',
          inject(function(PitchClass, PitchClassCollectionFormats){

          expect(PitchClass.withInt(7).invert().intValue).toEqual(5);

          expect(PitchClass.withInt(13).invert().intValue).toEqual(11);

          expect(PitchClass.withInt(7).invert().invert().intValue).toEqual(7);

        }));

    });

    describe('ngForte PitchClassSet', function(){

        beforeEach(module('ngForte'));

        it('Should return a PitchClassSet as an array',
          inject(function(PitchClassSet){

            expect(PitchClassSet.withArray([0,1,2,3]).arrayValue).toEqual([0,1,2,3]);

        }));

        it('Should return a PitchClassSet cardinal number',
          inject(function(PitchClassSet){

          expect(PitchClassSet.withArray([0,1,2,3]).cardinal).toEqual(4);

        }));

        it('Should transpose, invert and normalize a PitchClassSet',
          inject(function(PitchClassSet){

          expect(PitchClassSet.withArray([0,1,2,3]).transpose(5).arrayValue).toEqual([5,6,7,8]);
          expect(PitchClassSet.withArray([0,1,2,3]).transpose(5).normalize().arrayValue).toEqual([0,1,2,3]);

          expect(PitchClassSet.withArray([0,1,2,3]).invert().arrayValue).toEqual([0, 11, 10, 9]);

          expect(
            PitchClassSet.withArray([2,3,4]).
            invert().
            arrayValue
          ).toEqual([10,9,8]);
          expect(
            PitchClassSet.withArray([2,3,4]).
            invert().
            transpose(-8).
            arrayValue
          ).toEqual([2,1,0]);

        }));

        it('Should return a PitchClassSet as string values',
          inject(function(PitchClassSet){

          var aPCSet = PitchClassSet.withArray([0,1,2,3]);
          expect(aPCSet.normalForm.toString()).toEqual('(0,1,2,3)');

          expect(PitchClassSet.withArray([5,2,4,1]).iv.toString()).toEqual('<212100>');

        }));

        it('Should return prime and inverted forms as arrays',
          inject(function(PitchClassSet){

          var aPCSet = PitchClassSet.withArray([0,1,7,11]);
          expect(aPCSet.primeForm.toArray()).toEqual([0,1,2,6]);
          expect(aPCSet.primeInversion.toArray()).toEqual([0,4,5,6]);

        }));

    });

}());
