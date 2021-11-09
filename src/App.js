import { PageHeader, Button, Input, Space, Card } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';
import currWeatherJ from './mockData/currWeather.json';
import locationAuto from './mockData/locationAuto.json';
import days5 from './mockData/days5.json';
import { connect } from 'react-redux';
import {
  addToFavorites,
  deleteFromFavorites,
  setCurrentCity,
} from './redux/actions';
import { useEffect, useState } from 'react';
import useCurrWeather from './customHooks/useCurrWeather';
import useWeekWeather from './customHooks/useWeekWeather';
// import useAutoComplete from './customHooks/useAutoComplete';

function App(props) {
  // console.log('props.favorites: ', props.favorites);
  const listFavorites = props.favorites || [];

  // console.log('props.currentCity: ', props.currentCity);
  const currentCity = props.currentCity || [];

  const [inFavorites, setInFavorites] = useState(null);
  const [cityName, setCityName] = useState('');
  const [options, setOptions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currWeather, setCurrWeather] = useState({});
  const [weekWeather, setWeekWeather] = useState([]);
  const { Search } = Input;

  // useAutoComplete(cityName, setOptions);
  // useCurrWeather(currentCity?.Key, setCurrWeather);
  // useWeekWeather(currentCity?.Key, setWeekWeather);
  // console.log('curr: ', currWeather);

  useEffect(() => {
    setOptions(locationAuto);
    setCurrWeather(currWeatherJ);
    setWeekWeather(days5);
  }, []);

  const onSearch = (value) => {
    setCityName(value);
    setFiltered((old) =>
      options.filter(
        (city) =>
          city.LocalizedName.toLowerCase().indexOf(value.toLowerCase()) === 0
      )
    );
    if (!value) {
      setFiltered([]);
    }
  };
  // console.log('filtered: ', filtered);
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  function addToFavorites(city) {
    props.addToList(city);
    setInFavorites(city);
  }

  function deleteFromFavorites(key) {
    props.deleteFromList(key);
    setInFavorites(null);
  }
  function setCurrentCity(city) {
    props.setCurrentCity(city);
  }

  useEffect(() => {
    setInFavorites(listFavorites.find((city) => city.key === locationAuto.Key));
  }, [listFavorites]);

  return (
    <div className='App'>
      <nav className='navbar margin'>
        <PageHeader
          ghost={false}
          title='Title'
          subTitle='This is a subtitle'
          extra={[
            <Button key='2'>favorites</Button>,
            <Button key='1' type='primary'>
              Primary
            </Button>,
          ]}
        ></PageHeader>
      </nav>
      <div className='search-input-div margin'>
        <Space direction='vertical'>
          <Search
            placeholder='input search text'
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Space>
        <ul>
          {filtered?.map((city) => (
            <li onClick={() => setCurrentCity(city)}>{city.LocalizedName}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className='container'>
          <div className='main-header margin'>
            {currWeather[0]?.Temperature && (
              <Card
                title={currentCity?.LocalizedName}
                bordered={false}
                style={{ width: 300 }}
              >
                <p>
                  {currWeather[0]?.Temperature.Metric.Value}{' '}
                  {currWeather[0]?.Temperature.Metric.Unit}
                </p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            )}

            {inFavorites ? (
              <Button
                className='favorite-btn'
                style={{ fontSize: '24px' }}
                type='primary'
                shape='round'
                icon={<HeartFilled style={{ color: 'red' }} />}
                onClick={() => deleteFromFavorites(locationAuto[0].key)}
              >
                remove from
              </Button>
            ) : (
              <Button
                className='favorite-btn'
                style={{ fontSize: '24px' }}
                type='primary'
                shape='round'
                icon={<HeartFilled style={{ color: 'white' }} />}
                onClick={() => addToFavorites(locationAuto[0])}
              >
                save to fav
              </Button>
            )}
          </div>
          <div className='weather-of-the-day margin'>
            <h1>cloudy thing</h1>
          </div>
          <div
            className='weather-of-the-week margin'
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            {weekWeather?.DailyForecasts?.map((day) => {
              return (
                <>
                  <Card
                    title='Card title'
                    bordered={false}
                    style={{ width: 225 }}
                  >
                    <p>{weekday[new Date(day.Date).getDay()]}</p>
                    <p>
                      {day.Temperature.Minimum.Value}-{' '}
                      {day.Temperature.Maximum.Value}
                    </p>
                    <p>Card content</p>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { favorites: state.favorites, currentCity: state.currentCity };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToList: (city) => dispatch(addToFavorites(city)),
  deleteFromList: (key) => dispatch(deleteFromFavorites(key)),
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// let locationAutoCompleteApi = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=KaTGIASr9NFspoidKuY07atdW8My3qp1&q=Jer&language=en-us";
// let currentWeatherApi = "http://dataservice.accuweather.com/currentconditions/v1/213225?apikey=KaTGIASr9NFspoidKuY07atdW8My3qp1&language=en-us&details=true"
// let days5 =
//   'http://dataservice.accuweather.com/forecasts/v1/daily/5day/213225?apikey=KaTGIASr9NFspoidKuY07atdW8My3qp1&language=en-us&details=true&metric=true';
