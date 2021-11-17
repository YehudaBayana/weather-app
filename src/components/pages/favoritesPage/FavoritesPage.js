import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  deleteFromFavorites,
  setAllWeather,
  setApiError,
  setCurrentCity,
} from '../../../redux/actions';
import './favoritesPage.css';

const FavoritesPage = (props) => {
  const {
    favorites,
    allWeather,
    isC,
    setCurrentCity,
    setAllWeather,
    setApiError,
  } = props;
  useEffect(() => {
    setAllWeather([]);
    favorites.forEach((city) => {
      fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${city?.Key}?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&language=en-us&details=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setAllWeather(data);
        })
        .catch(() => setApiError(true));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {favorites.length > 0 ? (
        <h1>favorites cities</h1>
      ) : (
        <h1>no favorites cities</h1>
      )}
      <div
        className='favorites-container'
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {favorites?.map((city, i) => {
          return (
            <>
              <Link key={i} to='/'>
                <div
                  onClick={() => {
                    setCurrentCity(city);
                  }}
                  className='favorites-card-container'
                >
                  <div className='favorites-widget'>
                    <div className='favorites-details'>
                      <div className='favorites-temperature'>
                        {isC
                          ? Math.floor(
                              allWeather[i]?.Temperature.Metric.Value
                            ) + allWeather[i]?.Temperature.Metric.Unit
                          : Math.floor(
                              allWeather[i]?.Temperature.Imperial.Value
                            ) + allWeather[i]?.Temperature.Imperial.Unit}
                        °
                      </div>
                      <div className='favorites-summary'>
                        <p className='favorites-summaryText'>
                          {city?.LocalizedName}
                        </p>
                      </div>
                      <div className='favorites-precipitation'>
                        {allWeather[i]?.WeatherText}
                      </div>
                      <div className='favorites-wind'>
                        Wind: {allWeather[i]?.Wind?.Speed.Metric.Value}{' '}
                        {allWeather[i]?.Wind?.Speed.Metric.Unit}
                      </div>
                    </div>
                    <div className='favorites-pictoBackdrop'></div>
                    <div className='favorites-pictoFrame'></div>
                    <div className='favorites-pictoCloudBig'></div>
                    <div className='favorites-pictoCloudFill'></div>
                    <div className='favorites-pictoCloudSmall'></div>
                    <div className='favorites-iconCloudBig'></div>
                    <div className='favorites-iconCloudFill'></div>
                    <div className='favorites-iconCloudSmall'></div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    allWeather: state.allWeather,
    isC: state.isC,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
  deleteFromList: (key) => dispatch(deleteFromFavorites(key)),
  setAllWeather: (weather) => dispatch(setAllWeather(weather)),
  setApiError: (weather) => dispatch(setApiError(weather)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
