
const saveButton = document.querySelector("#save-slides");
const nextButton = document.querySelector("#next-slide");
const prevButton = document.querySelector("#prev-slide");

const slide1input = document.querySelector("#slide1");
const slide2input = document.querySelector("#slide2");
const slide3input = document.querySelector("#slide3");

//MAIN
(function () {
    Setlist();
})();

function Setlist() {

    //add event listeners 
    saveButton.addEventListener("click", () => { saveSlides(); })
    nextButton.addEventListener("click", () => { nextSlide(1); })
    prevButton.addEventListener("click", () => { nextSlide(-1); })
}

const img1 = "https://images.pexels.com/photos/13377187/pexels-photo-13377187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 = "https://images.pexels.com/photos/1450369/pexels-photo-1450369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img3 = "https://images.pexels.com/photos/1450367/pexels-photo-1450367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function saveSlides() {
    console.log("save slides");
    console.log(slide1input.value);
    console.log(slide2input.value);
    console.log(slide3input.value);
}

let numSlide = 0;
function nextSlide(numMove) {

    //incre or decre the slide index
    numSlide += numMove;
    if (numSlide > 2) numSlide -= 3;
    else if (numSlide < 0) numSlide = 2;
    console.log(numSlide);

    //set slide --- set background image.
    switch (numSlide) {
        case 0:
            document.body.style.backgroundImage = `url(${img1})`;
            break;
        case 1:
            document.body.style.backgroundImage = `url(${img2})`;
            break;
        case 2:
            document.body.style.backgroundImage = `url(${img3})`;
            break;
    }
}
