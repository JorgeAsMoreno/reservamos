import axios from "axios"
import { IPlace } from "../interfaces/places"
import { API_BASE_URL, API_KEY } from "../utils/constants"


export const getWeatherData = async (lat: number, long: number) => {
  return await axios.get(`${API_BASE_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}`)
}

export const getPlaces = async (city: string) => {
  try {
    const response = await axios.get(`https://search.reservamos.mx/api/v2/places?q=${city}`)
    const cities = response.data.filter((place: IPlace) => place.result_type === 'city')
    return cities
  } catch (error) {
    console.error('Error fetching places:', error)
  }
}
