import React from 'react'
import styled from 'styled-components'
import { IPlace } from '../../interfaces/places'

const PlacesContainer = styled.div`
  padding: 1em;
`

const PlacesTitle = styled.p`
  font-size: 2em;
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`

const PlaceListItem = styled.li`
  align-items: center; 
  border-radius: 16px;
  background: #fff;
  box-shadow: 1px 3px 12px 0px rgba(75, 33, 24, 0.15);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1em 1.5em;
  width: 180px;

  @media screen and (min-width: 1024px) {
    width: 250px;
  }
`

const ListItemCity = styled.p`
  margin: 0 0 1.5em 0;
`

const ListItemState = styled.span`
  font-weight: bold;
`

const ListItemCountry = styled.p`
  margin: 0;
`

interface IPlaces {
  places: IPlace[]
  handleWeather: (lat: number, long: number) => void
  city: string
}

const Places = ({ places, handleWeather, city }: IPlaces) => {
  return (
    <PlacesContainer>
      <PlacesTitle>Resultados de tu busqueda en <b>{city}</b></PlacesTitle>
      <PlacesList>
        {places.map(place => (
          <PlaceListItem key={place.city_name} onClick={() => handleWeather(place.lat, place.long)}>
            <ListItemCity>{place.city_name}</ListItemCity>
            <ListItemState>{place.state}</ListItemState>
            <ListItemCountry>{place.country}</ListItemCountry>
          </PlaceListItem>
        ))}
      </PlacesList>
    </PlacesContainer>
  )
}

export default Places
