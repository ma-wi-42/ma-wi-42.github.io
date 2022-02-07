
// variables for buttons and categories

const btnAll = document.getElementById("btn1");
const btnBre = document.getElementById("btn2");
const btnDin = document.getElementById("btn3");
const btnDes = document.getElementById("btn4");

const breakfast = document.getElementsByClassName("breakfast");
const dinner = document.getElementsByClassName("dinner");
const dessert = document.getElementsByClassName("dessert");

//button functionality for all

btnAll.addEventListener("click", function () {
    let x = dinner;
    let i;
    for (i = 0; i < x.length; i++) {
    dinner[i].style.display = 'flex';
    }
})
btnAll.addEventListener("click", function () {
    let x = breakfast;
    let i;
    for (i = 0; i < x.length; i++) {
    breakfast[i].style.display = 'flex';
    }
})
btnAll.addEventListener("click", function () {
    let x = dessert;
    let i;
    for (i = 0; i < x.length; i++) {
    dessert[i].style.display = 'flex';
    }
})

//button functionality for breakfast 

btnBre.addEventListener("click", function () {
    let x = breakfast;
    let i;
    for (i = 0; i < x.length; i++) {
    breakfast[i].style.display = 'flex';
    }
})
btnBre.addEventListener("click", function () {
    let x = dinner;
    let i;
    for (i = 0; i < x.length; i++) {
    dinner[i].style.display = 'none';
    }
})
btnBre.addEventListener("click", function () {
    let x = dessert;
    let i;
    for (i = 0; i < x.length; i++) {
    dessert[i].style.display = 'none';
    }
})

//button functionality for lunch/dinner

btnDin.addEventListener("click", function () {
    let x = dinner;
    let i;
    for (i = 0; i < x.length; i++) {
    dinner[i].style.display = 'flex';
    }
})
btnDin.addEventListener("click", function () {
    let x = breakfast;
    let i;
    for (i = 0; i < x.length; i++) {
    breakfast[i].style.display = 'none';
    }
})
btnDin.addEventListener("click", function () {
    let x = dessert;
    let i;
    for (i = 0; i < x.length; i++) {
    dessert[i].style.display = 'none';
    }
})

//button functionality for dessert

btnDes.addEventListener("click", function () {
    let x = dessert;
    let i;
    for (i = 0; i < x.length; i++) {
    dessert[i].style.display = 'flex';
    }
})
btnDes.addEventListener("click", function () {
    let x = dinner;
    let i;
    for (i = 0; i < x.length; i++) {
    dinner[i].style.display = 'none';
    }
})
btnDes.addEventListener("click", function () {
    let x = breakfast;
    let i;
    for (i = 0; i < x.length; i++) {
    breakfast[i].style.display = 'none';
    }
})