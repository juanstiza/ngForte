(function(){
    'use strict';

    describe('ngForte pitchClassCollection',function(){

        beforeEach(module('ngForte'));

        it('Should compose a collection string value as prime form',
          inject(function(pitchClassCollection, pitchClassCollectionTypes){

          var collection = pitchClassCollection.withArrayAndType([0,1,2,3], pitchClassCollectionTypes.primeForm);
          expect(collection.toString()).toEqual('(0,1,2,3)');

        }));

        it('Should compose a collection string value as prime inversion',
          inject(function(pitchClassCollection, pitchClassCollectionTypes){

          var collection = pitchClassCollection.withArrayAndType([0,1,2,3],
            pitchClassCollectionTypes.primeInversion);
          expect(collection.toString()).toEqual('[0,1,2,3]');

        }));

        it('Should compose a collection string value as normal form',
          inject(function(pitchClassCollection, pitchClassCollectionTypes){

          var collection = pitchClassCollection.withArrayAndType([0,1,2,3],
            pitchClassCollectionTypes.normalForm);
          expect(collection.toString()).toEqual('0,1,2,3');

        }));

        it('Should compose a collection string value as interval vector',
          inject(function(pitchClassCollection, pitchClassCollectionTypes){

          var collection = pitchClassCollection.withArrayAndType([1,1,2,2,3,3],
            pitchClassCollectionTypes.intervalVector);
          expect(collection.toString()).toEqual('<112233>');

        }));

        it('Should throw error on malformed interval vector',
          inject(function(pitchClassCollection, pitchClassCollectionTypes){

          expect(function(pitchClassCollection){
            pitchClassCollection.withArrayAndType([1,1,2,2,3],
              pitchClassCollectionTypes.intervalVector);
          }).toThrow();

        }));

        it('Should throw error on malformed pitch class set',
          inject(function(pitchClassCollection, pitchClassCollectionTypes){

          expect(function(pitchClassCollection){
            pitchClassCollection.withArrayAndType([1,2,3,4,5,6,7,8,9,10,11,12],
              pitchClassCollectionTypes.primeForm);
          }).toThrow();

          expect(function(pitchClassCollection){
            pitchClassCollection.withArrayAndType([1,2],
              pitchClassCollectionTypes.primeForm);
          }).toThrow();

        }));

    });

    describe('ngForte pitchClass', function(){

        beforeEach(module('ngForte'));

        it('Should instantiate pitchClass Class',
          inject(function(pitchClass, pitchClassCollectionFormats){

            var aPC = pitchClass.withInt(0);
            expect(aPC.intValue).toEqual(0);

        }));

        it('Should transpose a pitchClass',
          inject(function(pitchClass, pitchClassCollectionFormats){

          var aPC = pitchClass.withInt(0);
          expect(aPC.transpose(1).intValue).toEqual(1);
          expect(aPC.transpose(-1).intValue).toEqual(11);
          expect(aPC.transpose(13).intValue).toEqual(1);

        }));

        it('Should represent a pitchClass as string value',
          inject(function(pitchClass, pitchClassCollectionFormats){

          var aPC = pitchClass.withInt(0);
          expect(aPC.stringValue(pitchClassCollectionFormats.numeric)).toEqual('0');
          expect(aPC.stringValue(pitchClassCollectionFormats.latin)).toEqual('do');

        }));

        it('Should invert a pitchClass',
          inject(function(pitchClass, pitchClassCollectionFormats){

          var aPC = pitchClass.withInt(7);
          expect(aPC.invert().intValue).toEqual(5);

          aPC = pitchClass.withInt(13);
          expect(aPC.invert().intValue).toEqual(11);

        }));

    });

    describe('ngForte pitchClassSet', function(){

        beforeEach(module('ngForte'));

        it('Should return a PitchClassSet as an array',
          inject(function(pitchClassSet){

            var aPCSet = pitchClassSet.withArray([0,1,2,3]);

            expect(aPCSet.arrayValue).toEqual([0,1,2,3]);

        }));

        it('Should return a PitchClassSet cardinal number',
          inject(function(pitchClassSet){

          var aPCSet = pitchClassSet.withArray([0,1,2,3]);

          expect(aPCSet.cardinal).toEqual(4);

        }));



        it('Should transpose, invert and normalize a pitchClassSet',
          inject(function(pitchClassSet){

          var aPCSet = pitchClassSet.withArray([0,1,2,3]);

          expect(aPCSet.transpose(5).arrayValue).toEqual([5,6,7,8]);
          expect(aPCSet.transpose(5).normalize().arrayValue).toEqual([0,1,2,3]);

          expect(aPCSet.invert().arrayValue).toEqual([0, 11, 10, 9]);

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

        }));

        it('Should return a PitchClassSet as string values',
          inject(function(pitchClassSet){

          var aPCSet = pitchClassSet.withArray([0,1,2,3]);
          expect(aPCSet.normalForm.toString()).toEqual('(0,1,2,3)');
          expect(pitchClassSet.withArray([5,2,4,1]).iv.toString()).toEqual('<212100>');

        }));

        it('Should return prime and inverted forms as arrays', inject(function(pitchClassSet){

          var aPCSet = pitchClassSet.withArray([0,1,7,11]);
          expect(aPCSet.primeForm.toArray()).toEqual([0,1,2,6]);
          expect(aPCSet.primeInversion.toArray()).toEqual([0,1,2,8]);

        }));

    });

}());
