

let hova = document.getElementById("szines");
let oda = document.getElementById("pascal");

    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        hova.appendChild(sor)
        sor.classList.add("sor");
        for (var o = 0; o < 10; o++) {
            let sz�m = document.createElement("div");
            sor.appendChild(sz�m);
            sz�m.classList.add("elem");
            sz�m.innerText = (s + 1) * (o + 1);
            sz�m.style.background = `rgb(${255 - (255 / 10 * s)}, 0, 0)`;
        }
    }


    

    for (var psor = 0; psor < 10; psor++) {
        //�j div l�trehoz�sa az �j sornak
        //�j div oszt�lylist�j�hoz add hozz� a "sor"-t
        //�j div-et add hozz� a "pascal" gyermekeihez
        let ps = document.createElement("div");
        oda.appendChild(ps);
        ps.classList.add("psor");
        for (var poszlop = 0; poszlop <= psor; poszlop++) {
            let pelem = document.createElement("div");
            ps.appendChild(pelem);
            pelem.classList.add("pelem");
            pelem.innerText = faktorialisR(psor) / (faktorialisR(poszlop) * faktorialisR(psor - poszlop));
            if (poszlop == 0) {
                pelem.style.marginLeft = (document.documentElement.clientWidth / 2) - 15 - (psor * 15) + ".px";
            }
        }
    }


var faktorialisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * faktorialisR(n - 1);
    }
}
