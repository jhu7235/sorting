function bubbleSort (arr) {
	for (var i = 0 ; i < arr.length; i++) {
		for (var j = 0; j < arr.length - (i + 1) ; j++ ) {
			if (arr[j] > arr[j + 1]) {
				swap( j, arr);
			}
		}
	}
	return arr;
}

function swap (j, arr) {
	var temp = arr[j] ;
	arr[j] = arr[j + 1];
	arr[j + 1] = temp;
}

function gen() {
    let a = Math.random() * 20;
    var arr = [];
    while (a > 0){
        arr.push(Math.round(Math.random() * 20));
        a--;
    }
    return arr;
}
