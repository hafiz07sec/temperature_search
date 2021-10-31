const API_KEY = `cde0e1d842c95b51d8278c304a4184b0`;

const searchTemperature = () => {
    const city = document.getElementById("input_city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayResult(data)
        })
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayResult = result => {
    setInnerText('city', result.name);
    setInnerText('temperature', result.main.temp);
    setInnerText('condition', result.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}

