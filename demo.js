function displayTime(){
    let date = new Date;
    let minutestring    = date.getMinutes().toString(2);
    let hourstring      = date.getHours().toString(2);
    let outstring = (hourstring + " " + minutestring).replace(/1/g, "🐜").replace(/0/g, "🕷️");
    console.log(outstring);
}

setInterval(displayTime, 60000);