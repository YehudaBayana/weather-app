import React, { useRef } from 'react';
import { Input, Space } from 'antd';
import {
  setApiError,
  setAutoComplete,
  setCityName,
  setCurrentCity,
} from '../../../redux/actions';
import { connect } from 'react-redux';
import './searchInput.css';
import useAutoComplete from '../../../customHooks/useAutoComplete';

const SearchInput = (props) => {
  const {
    setCityName,
    autoComplete,
    setAutoComplete,
    setCurrentCity,
    setApiError,
  } = props;
  const { Search } = Input;
  const inputRef = useRef();

  const onSearch = (value) => {
    setCityName(value);
    if (!value) {
      return setAutoComplete([]);
    }
    // useAutoComplete(value)
    // fetch(
    //   `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&q=${value}&language=en-us`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setAutoComplete(data);
    //   })
    //   .catch(() => setApiError(true));
  };

  const onUserChoice = (city) => {
    setCurrentCity(city);
    setAutoComplete([]);
  };

  return (
    <>
      <div className='search-input-div margin'>
        <Space direction='vertical'>
          <Search
            placeholder='search city'
            allowClear
            onSearch={onSearch}
            style={{ width: 300 }}
            ref={inputRef}
            size='large'
            enterButton
          />
        </Space>
        <ul className='result-ul'>
          {autoComplete?.map((city) => (
            <li
              key={city.Key}
              className='result-li'
              onClick={() => onUserChoice(city)}
            >
              {city.LocalizedName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.currentCity,
    cityName: state.cityName,
    autoComplete: state.autoComplete,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
  setCityName: (city) => dispatch(setCityName(city)),
  setAutoComplete: (autoComplete) => dispatch(setAutoComplete(autoComplete)),
  setApiError: (bool) => dispatch(setApiError(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
