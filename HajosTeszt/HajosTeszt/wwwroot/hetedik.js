






var k�rd�sek;
var k�rd�sSorsz�m = 0;

function let�lt�s() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => let�lt�sBefejez�d�tt(data));
}


function let�lt�sBefejez�d�tt(d) {
    console.log("Sikeres let�lt�s")
    console.log(d)
    k�rd�sek = d
    k�rd�sMegjelen�t�s(0);
}

var k�rd�sMegjelen�t�s = function (k�rd�sSz�ma) {

    let k�rd�s_sz�veg = document.getElementById("k�rd�s_sz�veg");
    let k�p = document.getElementById("k�p1");
    let v�lasz1 = document.getElementById("v�lasz1");
    let v�lasz2 = document.getElementById("v�lasz2");
    let v�lasz3 = document.getElementById("v�lasz3");

    k�rd�s_sz�veg.innerHTML = k�rd�sek[k�rd�sSz�ma].questionText

    if (k�rd�sek[k�rd�sSz�ma].image != "") {
        k�p.src = "https://szoft1.comeback.hu/hajo/" + k�rd�sek[k�rd�sSz�ma].image;
    }
    else {
        k�p.src = "";
    }

    v�lasz1.innerText = k�rd�sek[k�rd�sSz�ma].answer1
    v�lasz2.innerText = k�rd�sek[k�rd�sSz�ma].answer2
    v�lasz3.innerText = k�rd�sek[k�rd�sSz�ma].answer3
}


window.onload = () => {

    let�lt�s();

    document.getElementById("vissza").onclick = () => {

        document.getElementById("v�lasz1").style.backgroundColor = "peachpuff";
        document.getElementById("v�lasz2").style.backgroundColor = "peachpuff";
        document.getElementById("v�lasz3").style.backgroundColor = "peachpuff";

        document.getElementById("v�lasz1").style.pointerEvents = 'auto';
        document.getElementById("v�lasz2").style.pointerEvents = 'auto';
        document.getElementById("v�lasz3").style.pointerEvents = 'auto';

        if (k�rd�sSorsz�m == 0) {
            k�rd�sSorsz�m = k�rd�sek.length - 1
            k�rd�sMegjelen�t�s(k�rd�sSorsz�m);
        }
        else {
            k�rd�sMegjelen�t�s(--k�rd�sSorsz�m);
        }

    }

    document.getElementById("el�re").onclick = () => {

        document.getElementById("v�lasz1").style.backgroundColor = "peachpuff";
        document.getElementById("v�lasz2").style.backgroundColor = "peachpuff";
        document.getElementById("v�lasz3").style.backgroundColor = "peachpuff";

        document.getElementById("v�lasz1").style.pointerEvents = 'auto';
        document.getElementById("v�lasz2").style.pointerEvents = 'auto';
        document.getElementById("v�lasz3").style.pointerEvents = 'auto';

        if (k�rd�sSorsz�m == k�rd�sek.length - 1) {
            k�rd�sSorsz�m = 0;
            k�rd�sMegjelen�t�s(k�rd�sSorsz�m);
        }
        else {
            k�rd�sMegjelen�t�s(++k�rd�sSorsz�m);
        }

    }


    document.getElementById("v�lasz1").onclick = () => {

        if (k�rd�sek[k�rd�sSorsz�m].correctAnswer == 1) {
            document.getElementById("v�lasz1").style.background = "darkgreen";
        }
        else {
            document.getElementById("v�lasz1").style.background = "lightcoral";
            document.getElementById("v�lasz" + k�rd�sek[k�rd�sSorsz�m].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("v�lasz1").style.pointerEvents = 'none';
        document.getElementById("v�lasz2").style.pointerEvents = 'none';
        document.getElementById("v�lasz3").style.pointerEvents = 'none';

    }

    document.getElementById("v�lasz2").onclick = () => {

        if (k�rd�sek[k�rd�sSorsz�m].correctAnswer == 2) {
            document.getElementById("v�lasz2").style.background = "darkgreen";
        }
        else {
            document.getElementById("v�lasz2").style.background = "lightcoral";
            document.getElementById("v�lasz" + k�rd�sek[k�rd�sSorsz�m].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("v�lasz1").style.pointerEvents = 'none';
        document.getElementById("v�lasz2").style.pointerEvents = 'none';
        document.getElementById("v�lasz3").style.pointerEvents = 'none';
    }

    document.getElementById("v�lasz3").onclick = () => {

        if (k�rd�sek[k�rd�sSorsz�m].correctAnswer == 3) {
            document.getElementById("v�lasz3").style.background = "darkgreen";
        }
        else {
            document.getElementById("v�lasz3").style.background = "lightcoral";
            document.getElementById("v�lasz" + k�rd�sek[k�rd�sSorsz�m].correctAnswer).style.background = "darkgreen";
        }

        document.getElementById("v�lasz1").style.pointerEvents = 'none';
        document.getElementById("v�lasz2").style.pointerEvents = 'none';
        document.getElementById("v�lasz3").style.pointerEvents = 'none';
    }
}


