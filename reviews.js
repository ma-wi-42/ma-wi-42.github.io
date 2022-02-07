
//person data as an array of objects

const userData = [
    {
        id: 1,
        img: "reviewsimages/person1.jpg", 
        name: "Tamara Collins",
        title: "WEB DEVELOPER",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem odio soluta delectus totam eaque voluptate dolores minima vitae neque molestiae quis, perferendis sequi vel quia sapiente officiis."
    },
    {
        id: 2,
        img: "reviewsimages/person2.jpg",
        name: "Pablito Gonzales",
        title: "INTERN",
        text: "Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so. Fanny as smile up small."
    },
    {
        id: 3,
        img: "reviewsimages/person3.jpg",
        name: "Michael Berger",
        title: "WEB DESIGNER",
        text: "Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. At missed advice my it no sister."
    },
    {
        id: 4,
        img: "reviewsimages/person4.jpg",
        name: "Linda White",
        title: "UX DESIGNER",
        text: "Ye on properly handsome returned throwing am no whatever. In without wishing he of picture no exposed talking minutes. Curiosity continual belonging offending so explained it exquisite."
    }
]

//basic variables for elements and calculation

const btnleft = document.getElementById("btnleft");
const btnright = document.getElementById("btnright");
const btnsurprise = document.getElementById("btnsurprise");

const personImg = document.getElementById("personimg");
const personName = document.getElementById("personname");
const personTitle = document.getElementById("persontitle");
const personText = document.getElementById("persontext");

let personCount = 0;

//button functionality

btnright.addEventListener("click", function() {
    personCount ++ ;
    if (personCount == 4) {
        personCount = 0;
    }
    checkNr();
});
btnleft.addEventListener("click", function() {
    personCount -- ;
    if (personCount == -1) {
        personCount = 3;
    }
    checkNr();
});
btnsurprise.addEventListener("click", function() {
    if (personCount == 0) {
        while (personCount == 0) {
            personCount = Math.floor(Math.random() * 4);
        }
    }
    else if (personCount == 1) {
        while (personCount == 1) {
            personCount = Math.floor(Math.random() * 4);
        }
    }
    else if (personCount == 2) {
        while (personCount == 2) {
            personCount = Math.floor(Math.random() * 4);
        }
    }
    else if (personCount == 3) {
        while (personCount == 3) {
            personCount = Math.floor(Math.random() * 4);
        }
    }
    checkNr();
});
function checkNr () {
if (personCount == 1) {
    let persona = userData[1];
    personImg.src = persona.img;
    personName.innerHTML = persona.name;
    personTitle.innerHTML = persona.title;
    personText.innerHTML = persona.text;
}
else if (personCount == 2) {
    let persona = userData[2];
    personImg.src = persona.img;
    personName.innerHTML = persona.name;
    personTitle.innerHTML = persona.title;
    personText.innerHTML = persona.text;
}
else if (personCount == 3) {
    let persona = userData[3];
    personImg.src = persona.img;
    personName.innerHTML = persona.name;
    personTitle.innerHTML = persona.title;
    personText.innerHTML = persona.text;
}
else if (personCount == 0) {
    let persona = userData[0];
    personImg.src = persona.img;
    personName.innerHTML = persona.name;
    personTitle.innerHTML = persona.title;
    personText.innerHTML = persona.text;
}
};
