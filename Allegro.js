window.onload=function() {

const rootEl = document.querySelector(':root');
const slidesContainer = document.getElementById("slides-container")
const slide = document.getElementById("slide")
const nextButton = document.getElementById("next-slide")
const prevButton = document.getElementById("prev-slide")
const dotsEl = document.getElementsByClassName("dot");


let clicks =0;
let slideWidth=0;


function slideChanger() {
    rootEl.style.setProperty('--slide-width', -slideWidth + "vw");
}

function dotsChanger() {
    for (i = 0; i < dotsEl.length; i++) {
        dotsEl[i].className = dotsEl[i].className.replace("active-dot", "")
    }
     dotsEl[clicks].classList.toggle('active-dot');
}

function visibilityCheck() {
    nextButton.style.removeProperty("display");
    prevButton.style.removeProperty("display");
    if (slideWidth <= 0){
        prevButton.style.display = "none";
    } else if (slideWidth >= 400){
        nextButton.style.display = "none";
    }
}

for (let j = 0; j < dotsEl.length; j++) {
    dotsEl[j].addEventListener("click", () => {
        clicks = j;
        slideWidth = 100 * clicks;
        visibilityCheck();
        slideChanger()
        dotsChanger();
    })
}

dotsChanger();
visibilityCheck();

nextButton.addEventListener("click", function() { 
    clicks++;
        slideWidth = 100 * clicks;
        slideChanger()
        visibilityCheck();
        dotsChanger();
    console.log('elo')
  });

  prevButton.addEventListener("click", function() {
    clicks--;
    slideWidth = 100 * clicks;
    slideChanger();
    visibilityCheck();
    dotsChanger();
    console.log('ole')
  });




}