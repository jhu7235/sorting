describe('Bubble Sort', function(){
	beforeEach( function () {
		spyOn(window, 'swap').and.callThrough();
 	});
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handle array of one element', function () {
  	expect(bubbleSort ([2]) ).toEqual( [2] );
  });


  it('handle already sorted array', function () {
  	expect( bubbleSort ([1, 2]) ).toEqual( [1, 2] );
  });

  it('handle array of reverse sort', function () {
  	expect(bubbleSort ([2, 1]) ).toEqual( [1, 2] );
  	expect(window.swap.calls.count()).toEqual(1);
  });


  it('handle array with duclicate elements', function () {
  	expect( bubbleSort ([1, 2, 2, 3, 2, 1, 2, 12, 41, 12, 4]) ).toEqual( [1, 1, 2, 2, 2, 2, 3, 4, 12, 12, 41] );
  });

  var arr = gen();
  it('handle random array', function () {
  	expect(bubbleSort (arr) ).toEqual( arr.sort() );
  });  


});