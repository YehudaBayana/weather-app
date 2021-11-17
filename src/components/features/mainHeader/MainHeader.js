import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import {
  addToFavorites,
  deleteFromFavorites,
  setIsC,
} from '../../../redux/actions';
import { connect } from 'react-redux';
import './mainHeader.css';

const MainHeader = (props) => {
  const {
    addToList,
    deleteFromList,
    currentCity,
    listFavorites,
    currentWeather,
    isC,
  } = props;
  const setInFavorites = useState(null)[1];

  const addToFavorites = (city) => {
    city['inFavorites'] = true;
    addToList(city);
    setInFavorites(city);
  };

  const deleteFromFavorites = (city) => {
    city['inFavorites'] = false;
    deleteFromList(city);
    setInFavorites(null);
  };
  useEffect(() => {
    setInFavorites(listFavorites?.find((city) => city.key === currentCity.Key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCity, listFavorites]);

  return (
    <>
      <div className='main-header margin'>
        <div className='card-container'>
          <div className='widget'>
            <div className='details'>
              <div className='temperature'>
                {isC
                  ? Math.floor(currentWeather[0]?.Temperature.Metric.Value) +
                    ' ' +
                    currentWeather[0]?.Temperature.Metric.Unit
                  : Math.floor(currentWeather[0]?.Temperature.Imperial.Value) +
                    ' ' +
                    currentWeather[0]?.Temperature.Imperial.Unit}
              </div>
              <div className='summary'>
                <p className='summaryText'>{currentCity?.LocalizedName}</p>
              </div>
              <div className='precipitation'>
                {currentWeather[0]?.WeatherText}
              </div>
              <div className='wind'>
                Wind: {currentWeather[0]?.Wind?.Speed.Metric.Value}{' '}
                {currentWeather[0]?.Wind?.Speed.Metric.Unit}
              </div>
            </div>
          </div>
        </div>
        {currentCity.inFavorites ? (
          <Button
            className='favorite-btn'
            style={{
              fontSize: '21px',
              marginTop: '42px',
              padding: '7px 30px',
            }}
            type='primary'
            shape='round'
            icon={<HeartFilled style={{ color: 'red' }} />}
            onClick={() => deleteFromFavorites(currentCity)}
          >
            remove from favorites
          </Button>
        ) : (
          <Button
            className='favorite-btn'
            style={{
              fontSize: '21px',
              marginTop: '42px',
              padding: '7px 30px',
            }}
            type='primary'
            shape='round'
            icon={<HeartFilled style={{ color: 'white' }} />}
            onClick={() => addToFavorites(currentCity)}
          >
            add to favorites
          </Button>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    currentCity: state.currentCity,
    autoComplete: state.autoComplete,
    currentWeather: state.currentWeather,
    weeklyWeather: state.weeklyWeather,
    isC: state.isC,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToList: (city) => dispatch(addToFavorites(city)),
  deleteFromList: (key) => dispatch(deleteFromFavorites(key)),
  setIsC: (status) => dispatch(setIsC(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
