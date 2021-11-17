import React from 'react';
import MainHeader from '../mainHeader/MainHeader';
import WeeklyWeather from '../weeklyWeather/WeeklyWeather';

const WeatherInfo = ({ theme }) => {
  return (
    <div>
      <div className='container'>
        <MainHeader />
        <div className='weather-of-the-day margin'>
          <h1
            style={theme === 'dark' ? { color: 'white' } : { color: 'black' }}
          >
            The weather for the coming days
          </h1>
        </div>
        <WeeklyWeather />
      </div>
    </div>
  );
};

export default WeatherInfo;
