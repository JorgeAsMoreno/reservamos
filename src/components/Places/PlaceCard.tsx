import React from 'react'
import styled from 'styled-components'

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


interface IPlaceCard {
  cityName: string
  state: string
  country: string
  handleWeather: (lat: number, long: number) => void
  lat: number
  long: number
}

const PlaceCard = ({
  cityName,
  state,
  country,
  handleWeather,
  lat,
  long
}: IPlaceCard) => {
  return (
    <PlaceListItem onClick={() => handleWeather(lat, long)}>
      <ListItemCity>{cityName}</ListItemCity>
      <ListItemState>{state}</ListItemState>
      <ListItemCountry>{country}</ListItemCountry>
    </PlaceListItem>
  )
}

export default PlaceCard