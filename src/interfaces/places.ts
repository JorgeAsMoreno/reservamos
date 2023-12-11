export interface IPlace {
  result_type: string
  city_name: string
  lat: number
  long: number
}

export interface IWeatherData {
  list: {
    main: {
      temp_max: number
      temp_min: number
    }
  }[]
}
