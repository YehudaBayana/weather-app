import { PageHeader, Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  // let locationAutoCompleteApi = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=KaTGIASr9NFspoidKuY07atdW8My3qp1&q=Jer&language=en-us";
  // let currentWeatherApi = "http://dataservice.accuweather.com/currentconditions/v1/213225?apikey=KaTGIASr9NFspoidKuY07atdW8My3qp1&language=en-us&details=true"
  // let days5 =
  //   'http://dataservice.accuweather.com/forecasts/v1/daily/5day/213225?apikey=KaTGIASr9NFspoidKuY07atdW8My3qp1&language=en-us&details=true&metric=true';
  return (
    <div className='App'>
      <PageHeader
        ghost={false}
        title='Title'
        subTitle='This is a subtitle'
        extra={[
          <Button key='3'>Operation</Button>,
          <Button key='2'>Operation</Button>,
          <Button key='1' type='primary'>
            Primary
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
}

export default App;
