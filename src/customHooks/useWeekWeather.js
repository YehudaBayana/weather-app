import { useEffect } from 'react';

const useWeekWeather = (cityKey, setWeekData, setApiError) => {
  useEffect(() => {
    if (cityKey) {
      fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&language=en-us&details=true&metric=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeekData(data);
        })
        .catch(() => setApiError(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityKey, setWeekData]);
};

export default useWeekWeather;
