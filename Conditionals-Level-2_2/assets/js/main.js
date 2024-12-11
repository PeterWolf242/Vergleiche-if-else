function checkAirQuality() {
    // event.preventDefault();
    let number = document.querySelector("#range").value;

    let wert = document.querySelector(".luftwert");
    let outputFeld = document.querySelector(".outputFeld");

    let body = document.querySelector("body");


    wert.innerHTML = `<p>Aktueller Wert: ${number}</p>`;

    console.log(wert);


    if (number <= 50) {
        body.style.backgroundColor = "#e95354";
        outputFeld.innerHTML = "<p>Level of health concern: Good</p>";
        outputFeld.innerHTML += "<p>Level of health effect: Little or no risk</p>";
    }
    else if (number > 50 && number <=100) {
        body.style.backgroundColor = "#ffd54f";
        outputFeld.innerHTML = "<p>Level of health concern: Moderate</p>";
        outputFeld.innerHTML += "<p>Level of health effect: Acceptable quality</p>";
    }
    else if (number > 100 && number <=150) {
        body.style.backgroundColor = "#169873";
        outputFeld.innerHTML = "<p>Level of health concern:  Unhealthy for sensitive groups</p>";
        outputFeld.innerHTML += "<p>Level of health effect: Generable publics not likely affected</p>";
    }
}

function Reset() {
    let output = document.querySelector(".outputFeld");
    let number = document.querySelector("#number");

    output.style.display = "none";
    number.value = "";
}