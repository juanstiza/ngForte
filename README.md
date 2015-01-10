# ngForte

Version 0.0.3

## API

### Create new PC set

var pc = PitchClassSet.withArray([0,4,7,8]);

### Get prime form

    pc.primeForm.toString()
    //returns '(0,1,4,8)'

### Get prime inversion

    pc.primeInversion.toString()
    //returns '[0,3,4,8]'

### Get interval vector

    pc.iv.toString()
    //returns '<101310>'

## Other functions

### Get map for pitch class

    pc.hash.map
    //returns [1,0,0,0,1,0,0,1,1,0,0,0]
