import React from 'react'
import styled from 'styled-components'
import { IPlace } from '../../interfaces/places'
import PlaceCard from './PlaceCard'

const PlacesContainer = styled.div`
  background-color: #ce348b;
  padding: 1em;
`

const PlacesTitle = styled.p`
  color: #fff;
  font-size: 2em;
  font-weight: bold;
`

const PlacesList = styled.ul`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2em;
  list-style: none;
  overflow: scroll;
  padding: 0;
  place-items: center;


  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr  1fr;
  }
`

interface IPlaces {
  places: IPlace[]
  handleWeather: (lat: number, long: number) => void
}

const Places = ({ places, handleWeather, }: IPlaces) => {
  return (
    <PlacesContainer>
      <PlacesTitle>Resultados de tu busqueda...</PlacesTitle>
      <PlacesList>
        {places.map((place, index) => (
          <PlaceCard
            key={index}
            lat={place.lat}
            long={place.long}
            handleWeather={handleWeather}
            cityName={place.city_name}
            state={place.state}
            country={place.country}
          />
        ))}
      </PlacesList>
    </PlacesContainer>
  )
}

export default Places
