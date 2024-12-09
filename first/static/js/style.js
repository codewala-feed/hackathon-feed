const b4 = document.getElementById("btn4");
const b5 = document.getElementById("btn5");
const i1 = document.getElementById("inp1");

function entered(){

    b4.style.fontSize = "50px";
    b4.style.boxShadow = "10px 10px 10px black";
    b4.style.transition = "0.5s"
}

function leaving(){
    b4.style.fontSize = "";
    b4.style.boxShadow = "";
    b4.style.transition = "";
}

function hold(){
    b5.style.backgroundColor = "black";
    b5.style.color = "aliceblue";
    b5.style.fontWeight = "700";
}

function release(){
    b5.style.backgroundColor = "";
    b5.style.color = "";
    b5.style.fontWeight = "";
}

function focussed(){
    i1.style.fontSize = "50px";
    i1.style.boxShadow = "10px 10px 30px aliceblue";
    i1.style.transition = "0.5s"
}

function moved(){
    i1.style.fontSize = "";
    i1.style.boxShadow = "";
    i1.style.transition = "0.5s";
}