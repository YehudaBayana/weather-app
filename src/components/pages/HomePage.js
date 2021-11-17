import React from 'react';
import SearchInput from '../features/searchInput/SearchInput';
import WeatherInfo from '../features/weatherInfo/WeatherInfo';

const HomePage = ({ theme }) => {
  return (
    <>
      <SearchInput />
      <WeatherInfo theme={theme} />
    </>
  );
};

export default HomePage;
