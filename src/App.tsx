import React, { useState } from 'react'
import { IPlace, IWeather } from './interfaces/places'
import { getPlaces, getWeatherData } from './requests/fetch'
import Places from './components/Places/Places'
import Search from './components/Search/Search'
import WeatherData from './components/WeatherData/WeatherData'

function App() {
  const [city, setCity] = useState<string>('')
  const [places, setPlaces] = useState<IPlace[]>([])
  const [weatherData, setWeatherData] = useState<IWeather | null>(null)
  const [loadingPlaces, setLoadingPlaces] = useState<boolean>(false)
  const [loadingWeather, setLoadingWeather] = useState<boolean>(false)
  const [noResultsMessage, setNoResultsMessage] = useState<string>('');

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const handleSearch = async () => {
    if (city) {
      try {
        setLoadingPlaces(true)
        const response = await getPlaces(city)
        setNoResultsMessage(response.length === 0 ? 'No se encontraron resultados.' : '');
        setPlaces(response)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingPlaces(false)
      }
    }
  }

  const handleWeather = async (lat: number, long: number) => {  
    try {
      setLoadingWeather(true)
      const response = await getWeatherData(lat, long)
      setWeatherData(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingWeather(false)
    }
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
      {loadingPlaces && <p>Cargando destinos...</p>}
      {noResultsMessage && <p>{noResultsMessage}</p>}
      {places.length > 0 && !loadingPlaces && !noResultsMessage &&(
        <Places
          {...{
            places,
            handleWeather,
          }}
        />
      )}

      {loadingWeather && <p>Obteniendo pronosticos...</p>}
      {weatherData && !loadingWeather && (
        <WeatherData
          {...{
            weatherData,
          }}
        />
      )}
    </div>
  )
}

export default App
