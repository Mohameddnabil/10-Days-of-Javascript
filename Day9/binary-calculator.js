var op1 = "";
var op2 = "";
var flag = false;
var operator = "";
function AddOne(){
    if(flag)
     op2 += '1';
    else
      op1 += '1';

   document.getElementById("res").innerHTML += '1';
}
function AddZero(){
    if(flag)
      op2 += '0';
    else
      op1 += '0';

  document.getElementById("res").innerHTML += '0';
}
function SetOperator(ope){
    flag = true;
    operator = ope;

    document.getElementById("res").innerHTML += ope;
}
function ToDec(num){
  var ret = 0 , exp = 0 , n = num.length;
   while(exp < n){
       ret += (1 << (n - exp - 1 ) ) * (num[exp++] - '0');
   }
   return ret;
}
function Evalutae(){
    var ret = 0;
    switch(operator){
        case '+':
            ret = op1 + op2;
            break;
        case '-':
            ret = op1 - op2;
               break;
        case '*':
            ret = op1 * op2;
             break;
        case '/':
          ret = op1 / op2;
          break;
    }
    var Bin ="";
    while(ret){
        Bin += (ret & 1);
        ret >>= 1;
    }

    return Bin.split("").reverse().join("");;
}
function GetRes(){
    op1 = ToDec(op1);
    op2 = ToDec(op2);

    console.log(op1);
    console.log(op2);

    document.getElementById("res").innerHTML =
    Evalutae();
    op2 = op1 = operator = "";
}
function Clear(){
    document.getElementById("res").innerHTML = "";
    op2 = op1 = operator = "";
}
