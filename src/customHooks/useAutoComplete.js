import { useEffect } from 'react';

const useAutoComplete = (cityName, setOptions) => {
  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=KaTGIASr9NFspoidKuY07atdW8My3qp1&q=${cityName}&language=en-us`
    )
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      });
  }, [cityName, setOptions]);
};

export default useAutoComplete;
