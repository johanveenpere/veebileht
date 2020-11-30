let element;
let elementRect;
let distanceFromTop;

function onScroll(){
    let scroll = window.scrollY;
    if(scroll >= distanceFromTop + 60){
        console.log("element ülemises ääres");
        //element.style.position = "absolute";
        //element.style.top = "0";
        element.classList.add("stickied");
        element.classList.remove("unstickied")
        element.style.textAlign = "right";
    }
    if(scroll < distanceFromTop - 60){
        console.log("element pole ülemises ääres");
        //element.style.position = "relative";
        element.classList.add("unstickied")
        element.classList.remove("stickied");
        element.style.textAlign = "center";
    }
}

function main(){
    element = document.getElementById("stickyheader");
    elementRect = element.getBoundingClientRect();
    distanceFromTop = elementRect.top;

    const observer = new IntersectionObserver( ([e]) => e.target.classList.toggle("stickied", e.intersectionRatio < 1), {threshold: [1]});
    observer.observe(element); 
}

document.addEventListener("DOMContentLoaded", main);
//document.addEventListener("scroll", onScroll);