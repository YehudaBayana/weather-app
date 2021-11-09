import { useEffect } from 'react';

const useCurrWeather = (cityKey, setCityData) => {
  useEffect(() => {
    if (cityKey) {
      fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=KaTGIASr9NFspoidKuY07atdW8My3qp1&language=en-us&details=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setCityData(data);
        });
    }
  }, [cityKey, setCityData]);
};

export default useCurrWeather;
