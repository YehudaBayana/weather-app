import React from 'react';
import { connect } from 'react-redux';
import './weeklyWeather.css';

const WeeklyWeather = (props) => {
  const { weeklyWeather, isC } = props;
  return (
    <>
      <div
        className='weather-of-the-week margin'
        // style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {weeklyWeather.DailyForecasts?.map((day, i) => {
          let average = Math.floor(
            (day.Temperature.Minimum.Value + day.Temperature.Maximum.Value) / 2
          );
          return (
            <>
              <div key={i} className='weather-wrapper'>
                <div className='weather-card madrid'>
                  <div
                    className={`weather-icon ${average > 10 ? 'sun' : 'cloud'}`}
                  ></div>
                  <h1>
                    {isC
                      ? average + ' C'
                      : Math.floor(average * 3.2034632) + ' F'}
                  </h1>
                  <p>{new Date(day.Date).toDateString()}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    weeklyWeather: state.weeklyWeather,
    currentCity: state.currentCity,
    isC: state.isC,
  };
};

export default connect(mapStateToProps)(WeeklyWeather);
