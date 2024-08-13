const key = "c271f789bb7bdb1a7cf51e95d3568d2d";

function buttonClick() {
    const city = document.querySelector(".input-search").value;
    searchCity(city);
}

async function searchCity(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`);
        const data = await response.json();
        showValues(data);
    } catch (error) {
        console.error('Erro ao buscar a cidade:', error);
    }
}

function showValues(data) {
    // Exibir temperatura
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "ºC";
    
    // Exibir descrição
    document.querySelector(".description").innerHTML = data.weather[0].description;

    // Exibir umidade e remover classe 'hidden'
    const humidity = document.querySelector(".humidity");
    humidity.querySelector(".text span").innerHTML = data.main.humidity + "%";
    humidity.classList.remove("hidden");

    // Exibir vento e remover classe 'hidden'
    const wind = document.querySelector(".wind");
    wind.querySelector(".text span").innerHTML = Math.floor(data.wind.speed) + " Km/h";
    wind.classList.remove("hidden");

    // Atualizar imagem e remover classe 'hidden'
    const imgPreview = document.querySelector(".img-preview");
    imgPreview.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    imgPreview.classList.remove("hidden");

    // Exibir a caixa de clima e remover a classe 'hidden'
    const weatherBox = document.querySelector(".weather-box");
    weatherBox.classList.remove("hidden");
}


document.querySelector(".input-search").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        buttonClick();
    }
});