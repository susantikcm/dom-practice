// Buttons
const displayNameButton = document.querySelector('#display-name-button');

displayNameButton.onclick = () => {
    const displayName = document.querySelector('#display-name');
    displayName.classList.remove('invisible');
};

// Mouse Over
const toggleLight = document.querySelector("#light-bulb");
toggleLight.onmouseenter = () => {
    toggleLight.src = "images/light-bulb-on.png";
}
toggleLight.onmouseleave = () => {
    toggleLight.src = "images/light-bulb-off.png";
}

// Toggle
function toggleAlert() {
    let toggleAlert = document.querySelector("#toggle-alert");
    let alertButton = document.querySelector("#toggle-button");
    if (toggleAlert.innerHTML === "Hello World!") {
        (toggleAlert.innerHTML = " ") && (alertButton.innerHTML = "Off");
    } else {
        (toggleAlert.innerHTML = "Hello World!") && (alertButton.innerHTML = "On");
    }
}

// Validate


// Challenge: Lists

// Challenge: Lists (Part 2)