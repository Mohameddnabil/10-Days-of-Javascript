

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    const ret = {length: a , width: b , perimeter: 2 * (a + b) , area: a*b};
    return ret;
}



/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
   var ret = 0;
   for(let i in objects){
       ret += (objects[i].x == objects[i].y);
   }
   return ret;
}


function Polygon(arr){
        this.perimeter = function(){
            var a = 0;
            for(let i in arr)
                a += arr[i];
            return a;
        }
}
