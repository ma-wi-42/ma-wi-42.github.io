function somePie(numero) {
    document.getElementById("resultArea").innerHTML += numero;
}
function wholePie() {
    let a = document.getElementById("resultArea");
    let b = eval(a.innerHTML);
    a.innerHTML = b;
}
function slicePie() {
    let a = document.getElementById("resultArea");
    if (a.innerHTML.endsWith(" ")) {
    a.innerHTML = a.innerHTML.slice(0, -3);
    } else {
    a.innerHTML = a.innerHTML.slice(0, -1);
    }
}
function noPie() {
    document.getElementById("resultArea").innerHTML = "";
}