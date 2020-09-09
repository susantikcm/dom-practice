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

// Validate

// Challenge: Lists

// Challenge: Lists (Part 2)