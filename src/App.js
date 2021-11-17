import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import './App.css';
import AppRouter from './components/appRouter/AppRouter';
import GetWeather from './components/getWeather/GetWeather';
import ErrorPage from './components/pages/errorPage/ErrorPage';

function App(props) {
  return (
    <>
      <GetWeather />
      {!props.apiError ? <AppRouter /> : <ErrorPage />}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    apiError: state.apiError,
  };
};

export default connect(mapStateToProps)(App);
