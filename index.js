// Buttons
document.querySelector("#display-name-button").addEventListener('click', () => {
    document.querySelector("#display-name").textContent = "Susanti";
    document.querySelector("#display-name").classList.toggle('invisible');
});

// Mouse Over
let light = document.querySelector("#light-bulb");

light.onmouseenter = () => light.src = "images/light-bulb-on.png";
light.onmouseleave = () => light.src = "images/light-bulb-off.png";

// Toggle
let toggleAlert = () => document.querySelector("#toggle-alert").classList.toggle('invisible');

// Validate
document.querySelector('#form-validate button').addEventListener('click', () => {
    event.preventDefault();

    let input = document.querySelector("#form-validate-first-name");
    if (input.value.length >= 2) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
    }
    else {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
});

// Challenge: Lists



// Challenge: Lists (Part 2)
