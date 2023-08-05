// Select DOM elements

let
    title = document.querySelector('#title h1'),
    conversionInput = document.querySelector('#conversion input'),
    form = document.querySelector('form'),
    result = document.querySelector('#result'),
    convertBtn = document.querySelector('#convert'),
    resetBtn = document.querySelector('#reset'),
    changeBtn = document.querySelector('#change'),
    inputValue = '',
    answerBox = '';

//Events
// Toggle between Celsius and Fahrenheit on click
changeBtn.addEventListener('click', () => {
    if (title.innerHTML === 'Converter °C to °F') {
        changeToFahrenheit();
    } else {
        changeToCelsius();
    }
});

// Convert input value on click 
convertBtn.addEventListener('click', () => {
    inputValue = conversionInput.value;
    if (title.innerHTML === 'Converter °C to °F') {
        if (inputValue) {
            convertToFahrenheit();
        } else {
            withOutValue()
        }
    } else {
        if (inputValue) {
            convertToCelsius();
        } else {
            withOutValue()
        }
    }
});

// Conversion functions
function changeToFahrenheit() {
    // Update HTML from Celsius to Fahrenheit
    title.innerHTML = 'Converter °F to °C';
    conversionInput.setAttribute('placeholder', '°F');
    document.title = 'Degree Conversion | °F to °C';
}

function changeToCelsius() {
    // Update HTML from Celsius to Fahrenheit
    title.innerHTML = 'Converter °C to °F';
    conversionInput.setAttribute('placeholder', '°C');
    document.title = 'Degree Conversion | °C to °F';
}

function convertToFahrenheit() {
    // Convert input Celsius to Fahrenheit
    answerBox = inputValue * 9 / 5 + 32;

    // Display result
    result.style.display = 'block';
    result.style.color = '#fff';
    result.innerHTML = `${inputValue}°C to ${answerBox}°F`;
}

function convertToCelsius() {
    // Convert input Fahrenheit to Celsius
    answerBox = (inputValue - 32) * 5 / 9;

    // Display result
    result.style.display = 'block';
    result.style.color = '#fff';
    result.innerHTML = `${inputValue}°F to ${answerBox.toFixed(4)}°C`;
}

// Display error if no input value
function withOutValue() {
    // Show result div 
    result.setAttribute('style', 'display:block');
    // Style result text red
    result.style.color = 'red';
    // Set error message 
    result.innerHTML = 'Enter a Number Please!';
}