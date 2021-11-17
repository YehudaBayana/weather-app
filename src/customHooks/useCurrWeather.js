import { useEffect } from 'react';

const useCurrWeather = (
  cityKey,
  setCurrWeather,
  setAllWeather,
  setApiError
) => {
  useEffect(() => {
    if (cityKey) {
      fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&language=en-us&details=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setCurrWeather(data);
          setAllWeather(data);
        })
        .catch(() => setApiError(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityKey]);
};

export const getUserLocation = (setCurrentCity, setApiError) => {
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&q=${latitude}%2C${longitude}&language=en-us&details=true&toplevel=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentCity(data);
      })
      .catch(() => setApiError(true));
  };

  const error = () => {
    setCurrentCity({
      Version: 1,
      Key: '215854',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
    });
  };

  if (!navigator.geolocation) {
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

export default useCurrWeather;
