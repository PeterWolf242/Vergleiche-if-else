function checkAge() {
    event.preventDefault();
    let number = document.querySelector("#number").valueAsNumber;

    let output = document.querySelector(".outputFeld");

    if (number >= 18) {
        output.classList.add("true");
        output.classList.remove("false");
        output.innerHTML = "Ja, Du kannst Shisha rauchen";
    }
    else {
        output.classList.remove("true");
        output.classList.add("false");
        output.innerHTML = "Du darfst noch nicht Shisha rauchen";
    }
}

function Reset() {
    let output = document.querySelector(".outputFeld");
    let number = document.querySelector("#number");

    output.style.display = "none";
    number.value = "";
}