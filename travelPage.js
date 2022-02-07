
//variables for hamburger menu functionality 

const burgir = document.getElementById("hamburger");
const toggleList = document.getElementById("toggleList");
let menuOpen = false;

//hamburger menu functionality

burgir.addEventListener("click", function() {
    if (menuOpen == false) {
        burgir.style.transitionDuration = "0.5s";
        burgir.style.transform = "rotate(90deg)";
        setTimeout(function() {
        toggleList.style.display = "block";
        }, 200);
        menuOpen = true;
    } else {
        burgir.style.transitionDuration = "0.5s";
        burgir.style.transform = "rotate(0deg)";
        setTimeout(function() {
        toggleList.style.display = "none";
        }, 200);
        menuOpen = false;
    }
});

//variables for left right button functionality

const btnleft = document.getElementById("buttonleft");
const btnright = document.getElementById("buttonright");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
let cardCount = 0;

//left right button functionality

btnright.addEventListener("click", function() {
    if (cardCount < 3) {
    cardCount += 1;
    checkCardPlus();
    }
});
btnleft.addEventListener("click", function() {
    if (cardCount > 0) {
    cardCount -= 1;
    checkCardMinus();
    }
});
function checkCardPlus() {
    setTransitionDuration();
    if (cardCount == 1) {
        card1.style.opacity = "0";
        setTimeout (function() {
            card2.style.marginLeft = "-250px";
        }, 500);
    }
    else if (cardCount == 2) {
        card2.style.opacity = "0";
        setTimeout (function() {
            card3.style.marginLeft = "-250px";
        }, 500);
    }
    else if (cardCount == 3) {
        card3.style.opacity = "0";
        setTimeout (function() {
            card4.style.marginLeft = "-250px";
        }, 500);
    }
};
function checkCardMinus() {
    setTransitionDuration();
    if (cardCount == 0) {
        card2.style.marginLeft = "20px";
        setTimeout (function() {
            card1.style.opacity = "1";
        }, 500);
    }
    else if (cardCount == 1) {
        card2.style.marginLeft = "-250px";
        card3.style.marginLeft = "20px";
        setTimeout (function() {
            card2.style.opacity = "1";
        }, 500);
    }
    else if (cardCount == 2) {
        card3.style.marginLeft = "-250px";
        card4.style.marginLeft = "20px";
        setTimeout (function() {
            card3.style.opacity = "1";
        }, 500);
    }
};
function setTransitionDuration() {
    card1.style.transitionDuration = "0.5s";
    card2.style.transitionDuration = "0.5s";
    card3.style.transitionDuration = "0.5s";
    card4.style.transitionDuration = "0.5s";
};