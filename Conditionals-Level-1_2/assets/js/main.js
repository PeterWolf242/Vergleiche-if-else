function weather() {
    let number = document.querySelector("#number").valueAsNumber;

    let output = document.querySelector(".outputFeld");

    if (number >= 8 && number <= 10) {
        output.classList.add("super");
        output.classList.remove("gut");
        output.classList.remove("ok");
        output.classList.remove("schlecht");
        output.innerHTML = "<p>Das Wetter ist Super</p>";
    }
    else if (number >= 6 && number <= 7) {
        output.classList.add("gut");
        output.classList.remove("ok");
        output.classList.remove("super");
        output.classList.remove("schlecht");
        output.innerHTML = "<p>Das Wetter ist gut</p>";
    }
    else if (number >= 3 && number <= 5) {
        output.classList.add("ok");
        output.classList.remove("gut");
        output.classList.remove("super");
        output.classList.remove("schlecht");
        output.innerHTML = "<p>Das Wetter ist ok</p>";
    }
    else if (number >= 0 && number <= 2) {
        output.classList.add("schlecht");
        output.classList.remove("gut");
        output.classList.remove("ok");
        output.classList.remove("super");
        output.innerHTML = "<p>Das Wetter ist schlecht</p>";
    }
}

function Reset() {
    let output = document.querySelector(".outputFeld");
    let number = document.querySelector("#number");

    output.style.display = "none";
    number.value = "";
}