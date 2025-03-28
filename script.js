async function getWeather() {
    const city = document.getElementById('city').innerText;
    const apiKey = 'API Key'; // Replace with your API key which you can get onopenweathermap.org
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const forecastResponse = await fetch(forecastUrl);

        if (!response.ok || !forecastResponse.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const forecastData = await forecastResponse.json();

        document.getElementById('weather').innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <div class="temp">${getWeatherEmoji(data.main.temp)} ${data.main.temp}°C</div>
            <div class="desc">${data.weather[0].description}</div>
        `;

        // Forecast for the next few hours
        const forecastHTML = forecastData.list.slice(0, 5).map(entry => `
            <div>
                <div>${new Date(entry.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <div>${getWeatherEmoji(entry.main.temp)} ${entry.main.temp}°C</div>
            </div>
        `).join('');
        document.getElementById('forecast').innerHTML = forecastHTML;

    } catch (error) {
        document.getElementById('weather').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

// Show popup
function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(() => {
        popup.classList.remove("hide");
        popup.classList.add("show");
    }, 10);
}

// Hide popup
function hidePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    popup.classList.add("hide");
    setTimeout(() => popup.style.display = "none", 300);
}

// Set city from input field
function setCity() {
    const city = document.getElementById("city-input").value.trim();
    if (city === "") return;

    document.getElementById("city").innerText = city;
    hidePopup();
    getWeather();
}

// Weather Emojis based on Temperature
function getWeatherEmoji(temp) {
    if (temp > 30) return '☀️';
    if (temp > 20) return '🌤';
    if (temp > 10) return '🌥';
    return '❄️';
}

// Sample city suggestions (can be replaced with an API)
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "London", "Mumbai", "Delhi", "Tokyo", "Paris"];

// Autocomplete functionality
document.getElementById("city-input").addEventListener("input", function () {
    let input = this.value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = "";

    if (input.length > 0) {
        let filteredCities = cities.filter(city => city.toLowerCase().startsWith(input));
        filteredCities.forEach(city => {
            let div = document.createElement("div");
            div.innerText = city;
            div.onclick = function () {
                document.getElementById("city-input").value = city;
                suggestionsBox.innerHTML = ""; // Clear suggestions after selection
            };
            suggestionsBox.appendChild(div);
        });
    }
});

// Fetch weather when page loads
window.onload = getWeather;
 