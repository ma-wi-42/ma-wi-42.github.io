
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

//variables for shopping cart functionality

const buttonMinus = document.getElementById("button1");
const buttonPlus = document.getElementById("button2");
const addToBasket = document.getElementById("button3");
const alert1 = document.getElementById("alert1");
let alertText = document.getElementById("alertText");
let amountBox = document.getElementsByClassName("amountBox")[0];
let quantityValue = 0;

// + & - and shopping cart functionality

buttonMinus.addEventListener("click", function() {
    if (quantityValue > 0) {
        quantityValue -= 1;
        amountBox.innerHTML = quantityValue;
    }
});
buttonPlus.addEventListener("click", function() {
        quantityValue += 1;
        amountBox.innerHTML = quantityValue;
});
addToBasket.addEventListener("click", function() {
    if (quantityValue > 0) {
        alert1.style.display = "flex";
        alertText.innerHTML = quantityValue + "x Onyx x Kairo Sneakers added to shopping cart";
        setTimeout(function() {
            alert1.style.display = "none";
            quantityValue = 0;
            amountBox.innerHTML = quantityValue;
        }, 4000);
    };
});

//variables for image functionality

const imgBig = document.getElementById("imgBig");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

//change image functionality

img1.addEventListener("click", function() {
    imgBig.src = img1.src;
    img1.style.opacity = "0.5";
    img2.style.opacity = "1";
    img3.style.opacity = "1";
    img4.style.opacity = "1";
});
img2.addEventListener("click", function() {
    imgBig.src = img2.src;
    img1.style.opacity = "1";
    img2.style.opacity = "0.5";
    img3.style.opacity = "1";
    img4.style.opacity = "1";
});
img3.addEventListener("click", function() {
    imgBig.src = img3.src;
    img1.style.opacity = "1";
    img2.style.opacity = "1";
    img3.style.opacity = "0.5";
    img4.style.opacity = "1";
});
img4.addEventListener("click", function() {
    imgBig.src = img4.src;
    img1.style.opacity = "1";
    img2.style.opacity = "1";
    img3.style.opacity = "1";
    img4.style.opacity = "0.5";
});

//variables for lightbox functionality

const lightboxbg = document.getElementsByClassName("lightboxbg")[0];
const lightboxwrap = document.getElementsByClassName("lightboxwrap")[0];
const btnX = document.getElementById("btnX");
const lbBtnLeft = document.getElementById("lbBtnLeft");
const lbBtnRight = document.getElementById("lbBtnRight");
const lbImgBig = document.getElementById("lbImgBig");
const lbImg1 = document.getElementById("lbImg1");
const lbImg2 = document.getElementById("lbImg2");
const lbImg3 = document.getElementById("lbImg3");
const lbImg4 = document.getElementById("lbImg4");
let lightboxCount = 0;

//lightbox functionality

imgBig.addEventListener("click", function() {
    if (window.innerWidth > 600) {
        lightboxbg.style.display = "block";
        lightboxwrap.style.display = "flex";
        if (imgBig.src == img1.src) {
            lightboxCount = 0;
            checklbc();
        }
        else if (imgBig.src == img2.src) {
            lightboxCount = 1;
            checklbc();
        }
        else if (imgBig.src == img3.src) {
            lightboxCount = 2;
            checklbc();
        }
        else if (imgBig.src == img4.src) {
            lightboxCount = 3;
            checklbc();
        };
    };
});
btnX.addEventListener("click", function() {
    lightboxbg.style.display = "none";
    lightboxwrap.style.display = "none";
});
lbBtnRight.addEventListener("click", function() {
    if (lightboxCount < 3) {
        lightboxCount += 1;
        checklbc();
    };
});
lbBtnLeft.addEventListener("click", function() {
    if (lightboxCount > 0) {
        lightboxCount -= 1;
        checklbc();
    };
});
lbImg1.addEventListener("click", function() {
    lightboxCount = 0;
    checklbc();
});
lbImg2.addEventListener("click", function() {
    lightboxCount = 1;
    checklbc();
});
lbImg3.addEventListener("click", function() {
    lightboxCount = 2;
    checklbc();
});
lbImg4.addEventListener("click", function() {
    lightboxCount = 3;
    checklbc();
});
function checklbc() {
    if (lightboxCount == 0) {
        lbImgBig.src = lbImg1.src;
        lbImg1.style.opacity = "0.5";
        lbImg2.style.opacity = "1";
        lbImg3.style.opacity = "1";
        lbImg4.style.opacity = "1";
    } 
    else if (lightboxCount == 1) {
        lbImgBig.src = lbImg2.src;
        lbImg1.style.opacity = "1";
        lbImg2.style.opacity = "0.5";
        lbImg3.style.opacity = "1";
        lbImg4.style.opacity = "1";
    } 
    else if (lightboxCount == 2) {
        lbImgBig.src = lbImg3.src;
        lbImg1.style.opacity = "1";
        lbImg2.style.opacity = "1";
        lbImg3.style.opacity = "0.5";
        lbImg4.style.opacity = "1";
    } 
    else if (lightboxCount == 3) {
        lbImgBig.src = lbImg4.src;
        lbImg1.style.opacity = "1";
        lbImg2.style.opacity = "1";
        lbImg3.style.opacity = "1";
        lbImg4.style.opacity = "0.5";
    };
};

//variables for mobile buttons functionality 

const mobileButtonLeft = document.getElementById("mobileButtonLeft");
const mobileButtonRight = document.getElementById("mobileButtonRight");
let mobileCount = 0;

//mobile buttons functionality 

mobileButtonLeft.addEventListener("click", function() {
    if (mobileCount > 0) {
        mobileCount -= 1;
        checkMobileCount();
    }
});
mobileButtonRight.addEventListener("click", function() {
    if (mobileCount < 3) {
        mobileCount += 1;
        checkMobileCount();
    }
});
function checkMobileCount() {
    if (mobileCount == 0) {
        imgBig.src = img1.src;
    } 
    else if (mobileCount == 1) {
        imgBig.src = img2.src;
    } 
    else if (mobileCount == 2) {
        imgBig.src = img3.src;
    } 
    else if (mobileCount == 3) {
        imgBig.src = img4.src;
    };
};