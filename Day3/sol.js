

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a, b){return a - b});
   for(var i = nums.length - 2 ; i > -1 ; i--){
         if(nums[i] != nums[nums.length - 1])
         return nums[i];
   }
}



/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}


/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
   if(a > 0)
     return "YES";
        if(a == 0)
        throw new Error("Zero Error");
        if(a < 0)
        throw new Error("Negative Error");

}
