//Reverse Array

function reverseArr(arr) {
    for (var i = 0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

//Remove Range

function removeRange(arr, start, end) {
    for (var count = 0; count < (end - start + 1); count++) {
        removeAt(arr, start);
    }
    return arr;
}

//Remove At

function removeAt(arr, idx) {
    var val = arr[idx];
    for (var i=idx; i < arr.length-1; i++) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    arr.pop();
    return val;
}



