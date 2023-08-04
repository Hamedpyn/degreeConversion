// DOM Selectors

let
    title = document.querySelector('#title h1'),
    conversionInput = document.querySelector('#conversion input'),
    form = document.querySelector('form'),
    convertBtn = document.querySelector('#convert'),
    resetBtn = document.querySelector('#reset'),
    changeBtn = document.querySelector('#change');
//Events
changeBtn.addEventListener('click', ()=>{
    if (title.innerHTML === 'Converter °C to °F') {
        title.innerHTML = 'Converter °F to °C'
        conversionInput.setAttribute('placeholder','°F')
        document.title = 'Degree Conversion | °F to °C'
    } else {
        title.innerHTML = 'Converter °C to °F'
        conversionInput.setAttribute('placeholder','°C')
        document.title = 'Degree Conversion | °C to °F'
    }
})