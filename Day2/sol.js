

function getGrade(score) {
    let grade;
    // Write your code here
    if (score <= 30 && score > 25){
        grade = 'A';
    }
    else if(score <= 25 && score >20){
        grade = 'B';
    }
    else if(score <= 20 && score > 15){
        grade = 'C';
    }
    else if(score <= 15 && score >10){
        grade = 'D';
    }
    else if(score <= 10 && score > 5){
        grade = 'E';
    }
    else
     grade = 'F';
    return grade;
}




   function getLetter(s) {
    // Write your code here
    var a = "aeiou";
    var b = "bcdfg";
    var c = "hjklm";
    var d = "npqrstvwxyz"
    if(a.indexOf(s[0]) != -1)
      return 'A';

   if(b.indexOf(s[0]) != -1)
      return 'B';

   if(c.indexOf(s[0]) != -1)
      return 'C';
   if(d.indexOf(s[0]) != -1)
      return 'D';
}



/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
   var vowel = "aeiou";
   for(var i = 0 ; i < s.length ; i++){
       if(vowel.indexOf(s[i]) != -1){
           console.log(s[i]);
       }
   }
      for(var i = 0 ; i < s.length ; i++){
       if(vowel.indexOf(s[i]) == -1){
           console.log(s[i]);
       }
   }
}
