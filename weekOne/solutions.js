// Push Front
// Given an array and an additional value, insert this value at the beginning of the array.

function pushFront(arr, value) {
    arr.unshift(value);
    return arr;
}

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr) {
    let temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
    return arr.pop()
}

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, ind, val) {
    arr[arr.length] = val;
    for (var x = arr.length-1; x > ind; x--) {
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swap(arr) {
    if (arr.length%2 == 0) {
        for (var x = 0; x < arr.length; x+=2) {
            var temp = arr[x];
            arr[x] = arr[x+1];
            arr[x+1] = temp;
        }
    } else {
        for (var x = 0; x < arr.length-1; x+=2) {
            var temp = arr[x];
            arr[x] = arr[x+1];
            arr[x+1] = temp;
        }
    }
    return arr;
}

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

function removeDups(arr) {
    var idx = 0;
    var count = 1;
    while (count < arr.length) {
        if (arr[idx] == arr[count]){
            count++;
        } else {
            arr[idx+1] = arr[count];
            idx++;
            count++;
        }
    }
    for (var x = 0; x < idx; x++) {
        arr.pop();
    }
    return arr;
}