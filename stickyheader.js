let element;
let elementRect;
let distanceFromTop;

function main(){
    element = document.getElementById("stickyheader");

    const observer = new IntersectionObserver( ([e]) => e.target.classList.toggle("stickied", e.intersectionRatio < 1), {threshold: [1]});
    observer.observe(element); 
}

document.addEventListener("DOMContentLoaded", main);
//document.addEventListener("scroll", onScroll);