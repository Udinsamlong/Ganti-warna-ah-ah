const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF3'];
let currentIndex = 0;

const button = document.getElementById('colorSwitchButton');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});
