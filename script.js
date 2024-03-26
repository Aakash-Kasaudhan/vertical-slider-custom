const winHeight = window.innerHeight;
const winWidth = window.innerWidth;
let autoScrollInterval;

function scrollSliderDown(){
  window.scrollBy(0, winHeight);
}

function scrollSliderUp(){
  window.scrollBy(0, -winHeight);
}

function startScroll() {
  autoScrollInterval = setInterval(() => {
    if (window.scrollY + winHeight >= document.body.scrollHeight) {
      window.scrollTo(0, 0);
    } else {
      window.scrollBy(0, winHeight); 
    }
  }, 2000); 
}

startScroll();