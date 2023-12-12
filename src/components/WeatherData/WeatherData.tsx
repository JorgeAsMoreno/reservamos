import React from 'react';
import styled from 'styled-components';
import { IWeather } from '../../interfaces/places';

const WeatherContainer = styled.div``;

interface IWeatherData {
  weatherData: IWeather;
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const WeatherData = ({ weatherData }: IWeatherData) => {
  return (
    <WeatherContainer>
      <h2>Pronósticos</h2>
      <Table>
        <thead>
          <tr>
            <th>Max Temp</th>
            <th>Min Temp</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.list.map((item, index) => (
            <tr key={index}>
              <td>
                {item.main.temp_max}
              </td>
              <td>
                {item.main.temp_min}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </WeatherContainer>
  );
};

export default WeatherData;