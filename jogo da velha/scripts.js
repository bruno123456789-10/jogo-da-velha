let ordem = 1;
let vencedor;

//definindo casas # pri | seg | ter
//                  qua | qui | sex
//                  set | oit | non

let pri = "y";
let seg = "y";
let ter = "y";
let qua = "y";
let qui = "y";
let sex = "y";
let set = "y";
let oit = "y";
let non = "y";



//funçoes de quando tocar nas casas.

function primeira() {

    if (ordem == 1 || ordem == 3 || ordem == 5 || ordem == 7 || ordem == 9 ) {
        document.getElementById("primeira").style.backgroundImage = "url(x.png)";

        pri = "x";
    }else{
        document.getElementById("primeira").style.backgroundImage = "url(o.png)";

        pri = "o";
    }
             
    winner();
}

function segunda() {
    
    if (ordem == 1 || ordem == 3 || ordem == 5 || ordem == 7 || ordem == 9 ) {
        document.getElementById("segunda").style.backgroundImage = "url(x.png)";

        seg = "x";
    }else{
        document.getElementById("segunda").style.backgroundImage = "url(o.png)";

        seg = "o";
    }
    
    winner();
}

function terceira() {
    
    if (ordem == 1 || ordem == 3 || ordem == 5 || ordem == 7 || ordem == 9 ) {
        document.getElementById("terceira").style.backgroundImage = "url(x.png)";

        ter = "x";
    }else{
        document.getElementById("terceira").style.backgroundImage = "url(o.png)";

        ter = "o";
    }
    
    winner();
}

function quarta() {
    
    if (ordem == 1 || ordem == 3 || ordem == 5 || ordem == 7 || ordem == 9 ) {
        document.getElementById("quarta").style.backgroundImage = "url(x.png)";

        qua = "x";
    }else{
        document.getElementById("quarta").style.backgroundImage = "url(o.png)";

        qua = "o";
    }
    
    winner();
}

function quinta() {
    
    if (ordem == 1 || ordem == 3 || ordem == 5 || ordem == 7 || ordem == 9 ) {
        document.getElementById("quinta").style.backgroundImage = "url(x.png)";

        qui = "x";
    }else{
        document.getElementById("quinta").style.backgroundImage = "url(o.png)";

        qui = "o";
    }
    
    winner();
}

function sexta() {
    
    if (ordem == 1 || ordem == 3 || ordem == 5 || ordem == 7 || ordem == 9 ) {
        document.getElementById("sexta").style.backgroundImage = "url(x.png)";

        sex = "x";
    }else{
        document.getElementById("sexta").style.backgroundImage = "url(o.png)";

        sex = "o";
    }
    
    winner();
}

function setima() {
    
    if (ordem == 1 || ordem == 3 || ordem == 5 || ordem == 7 || ordem == 9 ) {
        document.getElementById("setima").style.backgroundImage = "url(x.png)";

        set = "x";
    }else{
        document.getElementById("setima").style.backgroundImage = "url(o.png)";

        set = "o";
    }
    
    winner();
}

function oitava() {
    
    if (ordem == 1 || ordem == 3 || ordem == 5 || ordem == 7 || ordem == 9 ) {
        document.getElementById("oitava").style.backgroundImage = "url(x.png)";

        oit = "x";
    }else{
        document.getElementById("oitava").style.backgroundImage = "url(o.png)";

        oit = "o";
    }
    
    winner();
}

function nona() {
    
    if (ordem == 1 || ordem == 3 || ordem == 5 || ordem == 7 || ordem == 9 ) {
        document.getElementById("nona").style.backgroundImage = "url(x.png)";

        non = "x";
    }else{
        document.getElementById("nona").style.backgroundImage = "url(o.png)";

        non = "o";
    }
    
    winner();
}

//Funçoes para checar quem ganhou

function winner() {
    ordem++;

    if ((pri == "x" & seg == "x" & ter == "x") || (qua == "x" & qui == "x" & sex == "x") || (set == "x" & oit == "x" & non == "x") || (pri == "x" & qui == "x" & non == "x") || (ter == "x" & qui == "x" & set == "x") || (pri == "x" & qua == "x" & set == "x") || (seg == "x" & qui == "x" & oit == "x") || (ter == "x" & sex == "x" & non == "x")) {
        vencedor = "X ganhou";
        document.getElementById("winner").style.display = "block"
        document.getElementById("winner").innerHTML = vencedor;
    }else if (ordem == 10) {
        empate()
    }

    if ((pri == "o" & seg == "o" & ter == "o") || (qua == "o" & qui == "o" & sex == "o") || (set == "o" & oit == "o" & non == "o") || (pri == "o" & qui == "o" & non == "o") || (ter == "o" & qui == "o" & set == "o") || (pri == "o" & qua == "o" & set == "o") || (seg == "o" & qui == "o" & oit == "o") || (ter == "o" & sex == "o" & non == "o")) {
        vencedor = "O ganhou";
        document.getElementById("winner").style.display = "block"
        document.getElementById("winner").innerHTML = vencedor;
    }else if (ordem == 10) {
        empate()
    }
}

function empate() {
    document.getElementById("winner").style.display = "block"
    document.getElementById("winner").innerHTML = vencedor;
    vencedor = "velha"
}