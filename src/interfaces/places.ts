export interface IPlace {
  result_type: string
  city_name: string
  lat: number
  long: number
  country: string
  state: string
}

export interface IForecastData {
  list: {
    main: {
      temp_max: number
      temp_min: number
    }
  }[]
}
 
 export interface IWeather {
  city:    City;
  cnt:     number;
  cod:     string;
  list:    List[];
  message: number;
  weather: Weather
 }
 
interface City {
  coord:      Coord;
  country:    string;
  id:         number;
  name:       string;
  population: number;
  sunrise:    number;
  sunset:     number;
  timezone:   number;
 }
 
interface Coord {
  lat: number;
  lon: number;
 }
 
interface List {
  dt:         number;
  dt_txt:     Date;
  main:       MainClass;
  pop:        number;
  visibility: number;
  weather:    Weather[];
 }
 
interface MainClass {
  feels_like: number;
  grnd_level: number;
  humidity:   number;
  pressure:   number;
  sea_level:  number;
  temp:       number;
  temp_kf:    number;
  temp_max:   number;
  temp_min:   number;
 }
 

 export interface Weather {
  description: string;
  icon:        string;
  id:          number;
  main:        string;
 }