import { useEffect } from 'react';

const useWeekWeather = (cityKey, setWeekData) => {
  useEffect(() => {
    if (cityKey) {
      fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=KaTGIASr9NFspoidKuY07atdW8My3qp1&language=en-us&details=true&metric=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeekData(data);
        });
    }
  }, [cityKey, setWeekData]);
};

export default useWeekWeather;
