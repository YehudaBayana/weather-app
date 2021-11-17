import React from 'react';
import './Hamburger.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setIsC } from '../../../redux/actions';

function Hamburger(props) {
  const { setTheme, theme, setIsC, isC } = props;
  const openNav = () => {
    document.getElementById('fullNav').style.height = '100%';
  };

  const closeNav = () => {
    document.getElementById('fullNav').style.height = '0%';
  };
  return (
    <>
      <div id='fullNav' className='overlay'>
        <span className='closebtn' onClick={() => closeNav()}>
          &times;
        </span>
        <div className='overlay-content'>
          <a
            href='https://tech-career-alternative.firebaseapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='/frontfolio/images/tech-career-logo.png'
              width='200px'
              alt=''
            />
          </a>
          <Link to='/' onClick={() => closeNav()}>
            HOME
          </Link>
          <Link to='/favorites' onClick={() => closeNav()}>
            FAVORITES
          </Link>
          <Button
            key='1'
            onClick={() => {
              setTheme((old) => (old === 'dark' ? 'light' : 'dark'));
              closeNav();
            }}
            style={
              theme === 'dark'
                ? { backgroundColor: 'white', color: 'black' }
                : { backgroundColor: '#424242', color: 'white' }
            }
          >
            {theme === 'dark' ? 'light mode' : 'dark mode'}
          </Button>
          <Button
            key='2'
            onClick={() => {
              setIsC(!isC);
              closeNav();
            }}
          >
            {isC ? 'Fahrenheit' : 'Celsius'}
          </Button>
        </div>
      </div>
      <span
        style={{ fontSize: '30px', cursor: 'pointer', color: '#1c47af' }}
        onClick={() => openNav()}
      >
        &#9776;
      </span>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isC: state.isC,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsC: (status) => dispatch(setIsC(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
