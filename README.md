# WeatherApp
WeatherApp - Unified Mentor Project
🌦 Weather App
A simple, responsive weather application that allows users to check the current temperature and weather conditions of any city. The app fetches real-time weather data and a short-term forecast using the OpenWeatherMap API.

📌 Features
🌍 Search for any city to get live weather updates

📊 Displays temperature, weather conditions, and a forecast

📌 City selection through a popup with auto-suggestions

💻 Responsive design optimized for mobile, tablet, and desktop

🎨 Clean and modern UI

🛠 Tech Stack
Frontend: HTML, CSS, JavaScript

API: OpenWeatherMap API

Deployment: GitHub Pages (or local execution)

✅ Requirements
A modern web browser (Chrome, Firefox, Edge, etc.)

A stable internet connection (to fetch live weather data)

An API Key from OpenWeatherMap

⚙️ Functionality & Working
When the page loads, it fetches the weather details of a default city.

Users can change the city using a popup selector, which allows typing and auto-suggestions.

On selection, the app fetches and updates the current temperature, weather description, and forecast.

Displays a 5-hour weather forecast in a flexible grid layout.

Includes emoji-based weather indicators for better visualization.

🚀 How to Run the Project
Option 1: Open Directly in a Browser
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/weather-app.git
cd weather-app
Open the index.html file in a browser.

Option 2: Run with Live Server (Recommended)
Open the project in VS Code or another editor.

Install the Live Server extension (if using VS Code).

Right-click index.html and select "Open with Live Server".

Option 3: Deploy on GitHub Pages
Push the project to a GitHub repository.

Go to Settings > Pages and select the main branch for deployment.

Access your weather app from the provided GitHub Pages URL.

📌 API Configuration
Sign up at OpenWeatherMap and generate an API key.

Replace YOUR_API_KEY in script.js with your actual API key:

js
Copy
Edit
const apiKey = 'YOUR_API_KEY'; 
📝 Future Enhancements
Add more weather details like humidity, wind speed, and sunrise/sunset times.

Allow users to save favorite cities.

Implement dark mode for better UI experience.

