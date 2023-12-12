import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 3px 12px 0px rgba(75, 33, 24, 0.15);
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  padding: 2em;
  text-align: center;
`

const HeaderTitle = styled.h1`
  color: #298ea1;
  font-size: 2.5em;
`

const InputForm = styled.form`
  border: 1px solid #000;
  position: relative;
  width: -webkit-fill-available;
  
  @media screen and (min-width: 768px) {
    width: 35vw;
  }
`

const Input = styled.input`
  border: 0;
  outline: none;
  padding: 1em;
  width: -webkit-fill-available;
`

const SearchButton = styled.button`
  background-color: #ce348b;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.99em;
  right: 0;

  &:hover {
    opacity: 0.8;
    transition: .4s;
  }
`

interface ISearch {
  handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSearch: () => void
  city: string
}

const Search = ({
  handleCityChange,
  handleSearch,
  city
}: ISearch) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        Con Reservamos planear tu viaje es aún más fácil
      </HeaderTitle>
      <InputForm
        onSubmit={e => e.preventDefault()}
      >
        <Input
          onChange={handleCityChange}
          type='text'
          value={city}
          placeholder='A donde quieres viajar?'
        />
        <SearchButton
          onClick={handleSearch}
          type='submit'
        >
          Buscar
        </SearchButton>
      </InputForm>
    </HeaderContainer>
  )
}

export default Search
