//Autor: Johan Veenpere
//read 8 ja 9 võetud aadressilt https://stackoverflow.com/questions/16302483/event-to-detect-when-positionsticky-is-triggered

function main(){
    let element;
    element = document.getElementById("stickyheader");
    //jälgitakse, kas stickyheader element läheb vastu ekraani ülemist äärt. Kui läheb, siis pannakse külge klass stickied
    const observer = new IntersectionObserver( ([e]) => e.target.classList.toggle("stickied", e.intersectionRatio < 1), {threshold: [1]});
    observer.observe(element); 
}

//kuna kasutatakse html elementi, siis tuleb enne js käivitamist oodata, et leht ära laeks
document.addEventListener("DOMContentLoaded", main);