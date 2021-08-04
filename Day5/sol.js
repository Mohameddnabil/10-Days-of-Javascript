

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  for(let i in nums){
      if((nums[i] & 1) == 1)
        nums[i] *= 3;
      else
        nums[i] *= 2;
  }
  return nums;   
}




/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

function sides(literals, ...expressions) {
         var a = expressions[0];
         var p = expressions[1];
         var common = Math.sqrt(p * p - 16 * a);
         var s1 = (p + common) /4;
         var s2 = (p - common) /4;
         return [s2,s1];
}



/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){
     return this.w * this.h;
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle{
     constructor(w){
         super(w,w);
     }
}
