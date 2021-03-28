7// JavaScript source code






var k�rd�sek;
var k�rd�sSorsz�m = 0;

function let�lt�s() {
    fetch('/gyak7.json')
        .then(response => response.json())
        .then(data => let�lt�sBefejez�d�tt(data)
        );
}
function let�lt�sBefejez�d�tt(d) {
    console.log("Sikeres let�lt�s")
    console.log(d)
    k�rd�sek = d;
    k�rd�sMegjelen�t�s(0);
}

var k�rd�sMegjelen�t�s = function (k�rd�sSz�ma) {
    let k�rd�s_sz�veg = document.getElementById("k�rd�s_sz�veg");
    let k�p = document.getElementById("k�p1");
    let v�lasz1 = document.getElementById("v�lasz1");
    let v�lasz2 = document.getElementById("v�lasz2");
    let v�lasz3 = document.getElementById("v�lasz3");

    k�rd�s_sz�veg.innerHtml = k�rd�sek[k�rd�sSz�ma].questionText
    k�p.src = "https://szoft1.comeback.hu/hajo/" + k�rd�sek[k�rd�sSz�ma].image
    v�lasz1.innerText = k�rd�sek[k�rd�sSz�ma].answer1
    v�lasz2.innerText = k�rd�sek[k�rd�sSz�ma].answer2
    v�lasz3.innerText = k�rd�sek[k�rd�sSz�ma].answer3
}

Window.onload = () => {
    function Vissza() {
        if (k�rd�sSorsz�m == 0) {
            k�rd�sSorsz�m = k�rd�sek.length - 1;
            let�lt�s();
        }
        else {
            k�rd�sSz�ma--;
            let�lt�s();
        }
    }
    function Elore() {
        if (k�rd�sSorsz�m == k�rd�sek.length - 1) {
            k�rd�sSorsz�m = 0;
            let�lt�s();
        }
        else {
            k�rd�sSorsz�m++;
            let�lt�s();
        }
    }
}



