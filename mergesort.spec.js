describe('Split', function(){
  it('handles an array', function(){
    expect( split([1,3,4,4]) ).toEqual( [[1, 3], [4, 4]] );
  });

  it('handles an odd size array', function(){
    expect( split([1, 3 , 4, 4, 1]) ).toEqual( [[1, 3], [4, 4, 1]] );
  });

});

describe('Merge', function(){
  it('handles an array', function(){
    expect( merge( [1, 3], [4, 4] )).toEqual( [1, 3, 4, 4] );
  });

    it('handles an empty array', function(){
    expect( merge( [], [] )).toEqual( [] );
  });

});

describe('Merge Sort', function(){
  it('handles an array', function(){
    expect( mergeSort( [1, 4, 3, 4] )).toEqual( [1, 3, 4, 4] );
  });

  it('handles an empty array', function(){
    expect( mergeSort( [] )).toEqual( [] );
  });

  it('handles an odd number array', function(){
    expect( mergeSort( [1, 4, 3] )).toEqual( [1, 3, 4] );
  });

});