var cont = 1;

var radio_1 = document.getElementById('radio1');
var radio_2 = document.getElementById('radio2');
var radio_3 = document.getElementById('radio3');

radio_1.checked = true;
var time = 5000;

function proxima_img() {
    cont++;
    if (cont > 3) { 
        cont = 1;
    }
    if (cont === 1) {
        radio_1.checked = true;    
    }
    if (cont === 2) {
        radio_2.checked = true;
    }
    if (cont === 3) {
        radio_3.checked = true;
    }
}

setInterval(() => {
    proxima_img();
}, time);