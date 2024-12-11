function checkAge() {
    let number = document.querySelector("#number").valueAsNumber;

    let output = document.querySelector(".outputFeld");

    if (number >= 18) {
        output.classList.add("true");
        output.classList.remove("false");
        output.innerHTML = "Volljährig";
    }
    else {
        output.classList.remove("true");
        output.classList.add("false");
        output.innerHTML = "Minderjährig";
    }
}

function Reset() {

}