const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');


function changeImageSize(event) {
    const scaleValue = event.target.value;
    const newWidth = 300 * (scaleValue / 50);
    sliderImage.style.width = `${newWidth}px`;
}

const debouncedChangeSize = _.debounce(changeImageSize, 100);

sliderInput.addEventListener('input', debouncedChangeSize);
const box = document.getElementById('box');

// Функція, яка змінює позицію квадрата під курсор
function moveBox(event) {
    // Віднімаємо 25 (половину ширини/висоти), щоб курсор був чітко по центру квадрата
    box.style.left = `${event.clientX - 25}px`;
    box.style.top = `${event.clientY - 25}px`;
}

// Використовуємо метод _.debounce з бібліотеки Lodash
const debouncedMove = _.debounce(moveBox, 100);

// Слухаємо переміщення миші по всьому вікну
window.addEventListener('mousemove', debouncedMove);