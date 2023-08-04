// DOM Selectors

let
    title = document.querySelector('#title h1'),
    conversionInput = document.querySelector('#conversion input'),
    form = document.querySelector('form'),
    result = document.querySelector('#result'),
    convertBtn = document.querySelector('#convert'),
    resetBtn = document.querySelector('#reset'),
    changeBtn = document.querySelector('#change'),
    inputValue,
    answerBox;

//Events
changeBtn.addEventListener('click', () => {
    if (title.innerHTML === 'Converter °C to °F') {
        title.innerHTML = 'Converter °F to °C'
        conversionInput.setAttribute('placeholder', '°F')
        document.title = 'Degree Conversion | °F to °C'
    } else {
        title.innerHTML = 'Converter °C to °F'
        conversionInput.setAttribute('placeholder', '°C')
        document.title = 'Degree Conversion | °C to °F'
    }
})

// localStorage.setItem('Degree','Fahrenheit')
// (1°F − 32) × 5/9 =
convertBtn.addEventListener('click', () => {
    inputValue = conversionInput.value
    if (title.innerHTML === 'Converter °C to °F') {
        if (inputValue.length >= 1 || inputValue != '') {
            answerBox = inputValue * 9 / 5 + 32
            result.style.display = 'block'
            result.innerHTML = `${inputValue} °C to ${answerBox}°F`
        }
    } else {
        if (inputValue.length >= 1 || inputValue != '') {
            answerBox = (inputValue - 32) * 5 / 9
            result.style.display = 'block'
            result.innerHTML = `${inputValue} °F to ${answerBox.toFixed(4)}°C`
        }
    }
})