// Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

// declare a function (taking an array as a parameter)
// test if array is too short (array must have at least 2 values)
//              if too short, return null
// find second to last value

function secondToLast(arr) {
    if(arr.length < 2) {
        return null
    }
    return arr[arr.length - 2]
}

console.log(secondToLast([42,true,4,"Kate",7, 8, "Jake", false, 2]))


// Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

// declare a function pass 2 arrays as parameters
// create empty new array
// find out how long to loop; which arrays length is longer?
// for loop
//      if within bounds of smaller arr
//          push from arr 1
//          push from arr 2
//      push from longer array
// return new array

function zipIt(arrA, arrB) {
    let zipped = [];
    if(arrA.length > arrB.length) {
        var big = arrA;
        var small = arrB;
    } else {
        var big = arrB;
        var small = arrA;
    }
    for(let i=0; i<big.length; i++) {
        if(i >= small.length){
            zipped.push(big[i])
        } else {
            zipped.push(arrA[i]);
            zipped.push(arrB[i]);
        }
    }
    return zipped
}


console.log(zipIt([1,2,3,4,5,6,7,8,9], [10,20,30,40]))






// Parens Valid
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.


