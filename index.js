// Buttons
document.querySelector('#display-name-button').addEventListener('click', () => {
    document.querySelector('#display-name').textContent = 'Susanti';
    document.querySelector('#display-name').classList.toggle('invisible');
});

// Mouse Over
const light = document.querySelector('#light-bulb');

light.onmouseenter = () => light.src = 'images/light-bulb-on.png';
light.onmouseleave = () => light.src = 'images/light-bulb-off.png';

// Toggle
const toggleAlert = () => document.querySelector('#toggle-alert').classList.toggle('invisible');

// Validate
document.querySelector('#form-validate button').addEventListener('click', () => {
    event.preventDefault();

    const input = document.querySelector('#form-validate-first-name');

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
document.querySelector('#form-hobby').addEventListener('submit', () => {
    const item = document.createElement('li');
    item.innerText = document.querySelector('#form-hobby-text').value;
    item.classList.add('list-group-item');
     
    document.querySelector('#hobby-list').appendChild(item);
    document.querySelector('#form-hobby-text').value = "";
 }, true);


// Challenge: Lists (Part 2)
let hobbyList2 = document.querySelector('#hobby-list-2');
document.querySelector('#hobby-list-2').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-hobby')) {
        event.preventDefault();
        const item = event.target.parentElement;
        hobbyList2.removeChild(item);
    }
}, true);


// if(window.addEventListener) {
//     document.querySelector('#form-hobby').addEventListener('submit', addHobby, true);
//     document.querySelector('#hobby-list-2').addEventListener('click', deleteHobby, true);
// }
