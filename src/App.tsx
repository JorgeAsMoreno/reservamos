import React, { useState } from 'react'
import { IForecastData, IPlace, IWeather } from './interfaces/places'
import { getPlaces, getWeatherData } from './requests/fetch'
import Places from './components/Places/Places'
import Search from './components/Search/Search'
import WeatherData from './components/WeatherData/WeatherData'

function App() {
  const [city, setCity] = useState<string>('')
  const [places, setPlaces] = useState<IPlace[]>([])
  const [weatherData, setWeatherData] = useState<IWeather | null>(null)

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
      console.log(response.data)
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
        <WeatherData
          {...{
            weatherData
          }}
        />
      )}
    </div>
  )
}

export default App
