function calculation (switchID) {
    var n1 = document.getElementById('num1').value*1;
    var n2 = document.getElementById('num2').value*1;
    var result;
    switch(switchID){
        case 'btnPl':
            result = n1 * 1 + n2 * 1;
            break;
        case 'btnMin':
            result = n1 * 1 - n2 * 1;
            break;
        case 'btnDev':
            result = n1 * 1 / n2 * 1;
            break;
        case 'btnMul':
            result = n1 * 1 * n2 * 1;
            break;
    }
    return document.getElementById('run').value = result;
}
var btnPl = document.getElementById('btnPlus');
var btnMin = document.getElementById('btnMinus');
var btnDev = document.getElementById('btnDevide').value;
var btnMul = document.getElementById('btnMultiply').value;