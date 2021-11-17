import { useEffect } from 'react';
import { connect } from 'react-redux';
import useAutoComplete from '../../customHooks/useAutoComplete';
import useCurrWeather, {
  getUserLocation,
} from '../../customHooks/useCurrWeather';
import useWeekWeather from '../../customHooks/useWeekWeather';
import {
  setAllWeather,
  setApiError,
  setAutoComplete,
  setCurrentCity,
  setCurrentWeather,
  setWeeklyWeather,
} from '../../redux/actions';

const GetWeather = (props) => {
  const {
    currentCity,
    cityName,
    setAutoComplete,
    setCurrentWeather,
    setAllWeather,
    setWeeklyWeather,
    setCurrentCity,
    setApiError,
  } = props;

  useAutoComplete(cityName, setAutoComplete, setApiError);
  useCurrWeather(
    currentCity?.Key,
    setCurrentWeather,
    setAllWeather,
    setApiError
  );
  useWeekWeather(currentCity?.Key, setWeeklyWeather, setApiError);

  useEffect(() => {
    getUserLocation(setCurrentCity, setApiError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.currentCity,
    cityName: state.cityName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
  setAutoComplete: (autoComplete) => dispatch(setAutoComplete(autoComplete)),
  setCurrentWeather: (currentWeather) =>
    dispatch(setCurrentWeather(currentWeather)),
  setAllWeather: (currentWeather) => dispatch(setAllWeather(currentWeather)),
  setWeeklyWeather: (weeklyWeather) =>
    dispatch(setWeeklyWeather(weeklyWeather)),
  setApiError: (bool) => dispatch(setApiError(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetWeather);
