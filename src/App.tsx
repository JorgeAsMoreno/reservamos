import React, { useState } from 'react'
import { IPlace, IWeatherData } from './interfaces/places'
import { getPlaces, getWeatherData } from './requests/fetch'
import Places from './components/Places/Places'
import Search from './components/Search/Search'

function App() {
  const [city, setCity] = useState<string>('')
  const [places, setPlaces] = useState<IPlace[]>([])
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null)

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const handleSearch = async () => {
    getPlaces(city).then().then(response => {
      setPlaces(response)
    }).catch(error => {
      throw error
    })
  }

  const handleWeather = async (lat: number, long: number) => {  
    getWeatherData(lat, long).then(response => {
      setWeatherData(response.data)
    }).catch(error => {
      throw error
    })
  }

  return (
    <div>
      <Search
        {...{
          handleCityChange,
          handleSearch,
          city
        }}
      />
      {places.length > 0 ? (
        <Places
          {...{
            places,
            handleWeather,
          }}
        />
      ): <p>Sin resultados</p>}

      {weatherData && (
        <div>
          <h2>Weather Forecast</h2>
          <ul>
            {weatherData.list.map((item, index) => (
              <li key={index}>
                Max Temp: {item.main.temp_max}°C, Min Temp: {item.main.temp_min}°C
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
