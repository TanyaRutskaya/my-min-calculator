function calk(){

var n1= document.getElementById('num1').value ;
    console.log(n1);
var n2 = document.getElementById('num2').value;
    console.log(n2);
var result = document.getElementById('run');
    console.log(result);

var r = n1*1 + n2*1;
    console.log(r);
result.value = r;}

window.onload = function(){
    var btnrun = document.getElementById('btnRun');
    //btnrun.onClick = calk;
}
