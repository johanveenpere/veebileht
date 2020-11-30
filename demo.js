//Autor: Johan Veenpere

//kuna pythoni kood on keeruline veebilehel tööle panna, siis on projekt porditud javascripti

function displayTime(){
    //praegune aeg
    let date = new Date;
    //tekitatakse minutite ja tundide stringid
    let minutestring    = ("000000" + date.getMinutes().toString(2)).slice(-6);
    let hourstring      = ("000000" + date.getHours().toString(2)).slice(-6);
    //asendatakse 0 ja 1 ämblike ja sipelgatega
    let outstring = (hourstring + ":" + minutestring).replace(/1/g, "🐜").replace(/0/g, "🕷️");
    console.log(outstring);
    //näidatakse aega lehel
    document.getElementById("stickyheader").innerText = outstring;
}

function main(){
    console.log("in main");
    displayTime();
    //seatakse funktsiooni väljakutsumiste intervall
    setInterval(displayTime, 60000);
}

//kuna kasutatakse html elementi, siis tuleb enne js käivitamist oodata, et leht ära laeks
document.addEventListener("DOMContentLoaded", main);