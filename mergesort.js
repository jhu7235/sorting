function merge(arr1, arr2) {
	var newArray = [];
	var firstValue;
	while ((arr1.length + arr2.length) > 0) {
		console.log(newArray);
		if (arr1.length === 0) {
			firstValue = arr2.shift();
			newArray.push(firstValue);
		} else if (arr2.length === 0 ) {
			firstValue = arr1.shift();
			newArray.push(firstValue);
		} else if (arr1[0] <= arr2[0]) {
			 firstValue = arr1.shift();
			newArray.push(firstValue);
		} else {
			firstValue = arr2.shift();
			newArray.push(firstValue);
		}
	}
	return newArray;
}

function mergeSort(arr) {
	if (arr.length > 1) {
		arr = split(arr);
		return merge( mergeSort(arr[0]), mergeSort(arr[1]));
	} else {
		return arr;
	}
}


function split(arr) {
	var firstHalf = arr.slice(0, Math.floor(arr.length / 2));
	var secondHalf = arr.slice(Math.floor(arr.length / 2));
	return [firstHalf, secondHalf];
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