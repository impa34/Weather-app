import "./App.css";
import "./index.css";
import WeatherForm from "./components/WeatherForm";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  // First find the latitude and longitude of user's input then fetch with that data the weather
  const geocodeApi = async (city) => {
    try {
      const lookUp = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid={API-KEY}`
      );
      const response = await lookUp.json();

      const { lat, lon } = response[0];
      const find = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API-KEY}`
      );
      const response2 = await find.json();
      let temp = response2.main.temp - 273.15;
      console.log(response2);
      setWeather({
        city: response2.name,
        temp: temp.toFixed(1),
        main: response2.weather[0].main,
        humidity: response2.main.humidity,
        wind: response2.wind.speed,
      });
    } catch (e) {
      console.log(e.message);
      setWeather(null);
    }
  };

  const weatherStyles = {
    Clear: {
      background: "bg-gradient-to-b from-yellow-300 to blue-400",
    },
    Clouds: {
      background: "bg-gradient-to-b from-gray-400 to-gray-700",
    },
    Rain: {
      background: "bg-gradient-to-b from-blue-700 to-gray-600",
    },
    Snow: {
      background: "bg-gradient-to-b from-white to-blue-200",
    },
    Thunderstorm: {
      background: "bg-gradient-to-b from-purple-900 to-gray-700",
    },
    Mist: {
      background: "bg-gradient-to-b from-gray-300 to-gray-500",
    },
    Haze: {
      background: "bg-gradient-to-b from-gray-300 to-gray-500",
    },
  };

  return (
    <div className="overflow-hidden min-h-screen relative">
      <h1 className="z-10 relative text-5xl font-bold text-center pt-10 text-white drop-shadow-md tracking-wide">
        Weather app
      </h1>
      <WeatherForm onAdd={geocodeApi} />
      {weather && (
        <div
          className={`absolute inset-0 min-h-screen p-8 text-white transition-all duration-500 ${
            weather ? weatherStyles[weather.main]?.background : "bg-gray-500"
          }`}
        >
          {weather.main === "Clouds" && (
            <img
              src="cloud2.png"
              alt="cloud"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none animate-moveCloud"
            ></img>
          )}
          {weather.main === "Clouds" && (
            <img
              src="cloud1.webp"
              alt="cloud"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none  animate-[moveCloud_90s_linear_infinite]"
            ></img>
          )}
          {weather.main === "Rain" && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
            >
              <source src="rain.mp4" />
            </video>
          )}
          {weather.main === "Clear" && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
            >
              <source src="sun.mp4" />
            </video>
          )}
          {weather.main === "Snow" && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
            >
              <source src="snow.mp4" />
            </video>
          )}
          {weather.main === "Thunderstorm" && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
            >
              <source src="thunder.mp4" />
            </video>
          )}
          {weather.main === "Haze" && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
            >
              <source src="haze.mp4" />
            </video>
          )}
          {weather.main === "Mist" && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
            >
              <source src="haze.mp4" />
            </video>
          )}
          <div className="p-5">
            <h2 className="relative top-20 p-10 text-3xl font-semibold text-center text-white drop-shadow-md">
              City: {weather.city}
            </h2>
          </div>
          <div className="relative top-20 p-4 text-3xl text-center grid grid-cols-2 md:grid-cols-4 gap-6 px-8 ">
            <div
              className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-md transition transform duration-300 hover:scale-105
"
            >
              <p className="text-xl font-semibold">🌡 Temperature</p>
              <p className="text-2xl">{weather.temp} ºC</p>
            </div>
            <div
              className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-md transition transform duration-300 hover:scale-105
"
            >
              <p className="text-xl font-semibold">🌤 Condition</p>
              <p className="text-2xl">{weather.main}</p>
            </div>
            <div
              className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-md transition transform duration-300 hover:scale-105
"
            >
              <p className="text-xl font-semibold">💧 Humidity</p>
              <p className="text-2xl">{weather.humidity}</p>
            </div>
            <div
              className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-md transition transform duration-300 hover:scale-105
"
            >
              <p className="text-xl font-semibold">🌬 Wind</p>
              <p className="text-2xl">{weather.wind} kt</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
