import { Button, PageHeader } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setIsC } from '../../../redux/actions';
import Hamburger from '../Hamburger/Hamburger';

const Navbar = (props) => {
  const { pathname } = useLocation();
  const [size, setSize] = useState(window.innerWidth);
  const setForReRender = useState('.')[1];
  const { isC, setIsC, theme, setTheme } = props;
  const forReRenderFunc = () => {
    setForReRender((oldValue) => (oldValue === '.' ? ',' : '.'));
  };

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    forReRenderFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <nav className='navbar margin' style={{ backgroundColor: '#69c0ff' }}>
        <PageHeader
          style={{ backgroundColor: '#bae7ff' }}
          ghost={false}
          title='Yehuda'
          subTitle='Weather app'
          extra={
            size > 460
              ? [
                  <Button key='2' onClick={() => setIsC(!isC)}>
                    {isC ? 'Fahrenheit' : 'Celsius'}
                  </Button>,
                  <Link to='/favorites'>
                    <Button
                      key='3'
                      onClick={forReRenderFunc}
                      type={
                        document.location.href.indexOf('/favorites') > -1
                          ? 'primary'
                          : ''
                      }
                    >
                      favorites
                    </Button>{' '}
                  </Link>,
                  <Link to='/'>
                    <Button
                      key='4'
                      onClick={forReRenderFunc}
                      type={
                        document.location.href.indexOf('/favorites') === -1
                          ? 'primary'
                          : ''
                      }
                    >
                      home
                    </Button>
                  </Link>,
                ]
              : [<Hamburger setTheme={setTheme} theme={theme} />]
          }
        ></PageHeader>
      </nav>
    </>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

// <Button
//   key='1'
//   onClick={() =>
//     setTheme((old) => (old === 'dark' ? 'light' : 'dark'))
//   }
//   style={
//     theme === 'dark'
//       ? { backgroundColor: 'white', color: 'black' }
//       : { backgroundColor: '#424242', color: 'white' }
//   }
// >
//   {theme === 'dark' ? 'light mode' : 'dark mode'}
// </Button>,
