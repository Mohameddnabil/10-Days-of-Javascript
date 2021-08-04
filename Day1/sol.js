

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;

    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter =  2 * (length + width);

    return perimeter;
}






/*
 * Create the function factorial here
 */
function factorial(n){
    let ret = 1;
    for(var  i =2 ; i <= n ; i++)
      ret *= i;
      return ret;
}


function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
     const PI = Math.PI;
     let r = parseFloat(readLine());
    // Print the area of the circle:
    console.log(PI * r * r);
    // Print the perimeter of the circle:
   console.log(2 * PI * r);
}
