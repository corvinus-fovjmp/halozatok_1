






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

fetch('/questions/4')
    .then(response => response.json())
    .then(data => console.log(data)
);

fetch('/questions/1')
    .then(response => response.json())
    .then(data => k�rd�sMegjelen�t�s(data)
    );

function k�rd�sMegjelen�t�s(k�rd�s) {
    console.log(k�rd�s);
    document.getElementById("k�rd�s_sz�veg").innerText = k�rd�s.questionText
    document.getElementById("v�lasz1").innerText = k�rd�s.answer1
    document.getElementById("v�lasz2").innerText = k�rd�s.answer2
    document.getElementById("v�lasz3").innerText = k�rd�s.answer3
    document.getElementById("k�p").src = "https://szoft1.comeback.hu/hajo/" + k�rd�s.image;
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



function k�rd�sBet�lt�s(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hib�s v�lasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => k�rd�sMegjelen�t�s(data));
}    


function v�laszfeldolgoz�s(v�lasz) {
    if (!v�lasz.ok) {
        console.error(`Hib�s v�lasz: ${response.status}`)
    }
    else {
        return v�lasz.json()
    }
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


