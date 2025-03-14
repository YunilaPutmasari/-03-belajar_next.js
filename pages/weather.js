import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);

    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();

    setWeather(data);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-gray-800 w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Cek Cuaca</h1>
        <input
          type="text"
          placeholder="Masukkan nama kota"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchWeather}
          disabled={loading}
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          {loading ? "Memuat..." : "Cari Cuaca"}
        </button>

        {weather && weather.main ? (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Cuaca di {weather.name}</h2>
            <p className="text-gray-700"><strong>Suhu:</strong> {weather.main.temp}°C</p>
            <p className="text-gray-700"><strong>Kecepatan Angin:</strong> {weather.wind.speed} m/s</p>
            <p className="text-gray-700"><strong>Kondisi:</strong> {weather.weather[0].description}</p>
          </div>
        ) : (
          weather?.error && <p className="text-red-500 mt-3">Error: {weather.error}</p>
        )}
      </div>
    </div>
  );
}
