

function calk(switchID) {
    Console.log(  switchID);
    var r = 0;
    var result = document.getElementById('run');
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    switch (switchID) {
        case'btnPlus':
            r = n1 * 1 + n2 * 1;
            break;
        case 'btnMinus':
            r = n1 * 1 - n2 * 1;
            break;
        case 'btnMultiply':
            r = n1 * 1 * n2 * 1;
            break;
        case 'btnDevide':
            r = n1 * 1 / n2 * 1;
            break;
    }

    result.value = r;
}

window.onload = function () {
    var btnDevide = document.getElementById('btnDevide');
    btnDevide.onClick = calk('btnDevide');
    var btnPlus = document.getElementById('btnPlus');
    btnPlus.onClick = calk('btnPlus');
    var btnMinus = document.getElementById('btnMinus');
    btnMinus.onClick = calk('btnMinus');
    var btnMultiply = document.getElementById('btnMultiply');
    btnMultiply.onClick = calk('btnMultiply');
}
