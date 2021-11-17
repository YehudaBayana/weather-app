import { useEffect } from 'react';

const useAutoComplete = (cityName, setAutoComplete, setApiError) => {
  useEffect(() => {
    fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Vw78AAyCE30KZX7W8JRfAIYExiGy8ly9&q=${cityName}&language=en-us`
    )
      .then((res) => res.json())
      .then((data) => {
        setAutoComplete(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);
};

export default useAutoComplete;
