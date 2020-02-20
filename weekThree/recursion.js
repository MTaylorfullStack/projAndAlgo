// Why use recursion?

for(let i =0; i<100; i++) {

}

// Countdown: Write a recursive function that receives num as an input and prints all values down to 0.

// as long as num is not 0, print num
// reduce num

function countdown(num) {
    if(num > 0) {
        console.log(num);
        return countdown(num-1)
    }
    return 0
}


countdown(9)

// loopArray: Write a recursive function to print all values in an inputted array.


function loopArray(arr, i=0) {
    // stay in bounds of the array
    if(i < arr.length) {
        console.log(arr[i])
        i++;
        loopArray(arr, i);
    }
    return arr;
}

loopArray(['hello',4,6,8,10])


// Flood Fill



var canvas2D = [[3,2,3,4,3],
                [2,3,3,4,0],
                [7,3,3,5,3],
                [6,5,3,4,1],
                [1,2,3,3,3]];

console.log(`Beginning with: ${canvas2D}`)

// canvas2D[2][2]
// [3,4]
// canvas[start[0]]
// paramaters: canvas, startPoint, newColor
function floodFill(canvas, start, newColor) {
    var oldColor = canvas[start[0]][start[1]];
    canvas[start[0]][start[1]] = newColor;
    // Left Movement
    if(start[1]-1 >= 0) {
        if(canvas[start[0]][start[1]-1] == oldColor) {
            floodFill(canvas, [start[0], start[1]-1], newColor)
        }
    }
    // Right Movement
    if(start[1]+1 < canvas[0].length) {
        if(canvas[start[0]][start[1]+1] == oldColor) {
            floodFill(canvas, [start[0], start[1]+1], newColor)
        }
    }
    // Down Movement
    if(start[0]+1 < canvas.length) {
        if(canvas[start[0]+1][start[1]] == oldColor) {
            floodFill(canvas, [start[0]+1, start[1]], newColor)
        }
    }
    // Up Movement
    if(start[0]-1 >= 0) {
        if(canvas[start[0]-1][start[1]] == oldColor) {
            floodFill(canvas, [start[0]-1, start[1]], newColor)
        }
    }
    return canvas
}

console.log(floodFill(canvas2D, [2,2], 9))
