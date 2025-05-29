import {useState} from 'react'

function WeatherForm({ onAdd }) {
    const [city, setCity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city.trim()) {
            onAdd(city.trim())
            setCity("")
        }
    }
  return (
<div className="relative z-10 text-center p-4">
  <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2 flex-wrap">
    <input
      className="px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={city}
      placeholder="Enter a city"
      onChange={(e) => setCity(e.target.value)}
    />
    <button
      type="submit"
      className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all"
    >
      Search
    </button>
  </form>
</div>

  )
}

export default WeatherForm