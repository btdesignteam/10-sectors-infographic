import React, { useEffect, useState, useLayoutEffect } from 'react';
import { MainPage } from "./scripts/views/mainPage";
import { InitialDataContext } from "./scripts/context/initalData";


// import {
//   size
// } from "./styles/stylesScript/screenSizeConfig"

export default function App() {
  const [label, setLabel] = useState({})

  let path = "/bt_files/graphs/2022/top-10-sectors-infographic/";

  if (window.location.hostname === "localhost" || window.location.hostname === "192.168.1.158") {
    path = "/"
  }

  if (window.location.hostname === "devstaff.businesstimes.com.sg") {
    path = "https://dev.businesstimes.com.sg/bt_files/graphs/2022/top-10-sectors-infographic/"
  }
  
  if (window.location.hostname === "btstaff.businesstimes.com.sg" || window.location.hostname === "www.businesstimes.com.sg" || window.location.hostname === "businesstimes.com.sg") {
    path = "/bt_files/interactives/2022/top-10-sectors-infographic/";
  }

  const getData = () => {
    const url = `${path}data/label.json?${new Date().getTime()}`
    fetch(url
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setLabel(myJson);
      });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [])

  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      const updateSize = () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        // if (window.screen.width < window.innerWidth) {
        //   width = window.screen.width
        // }

        // if (window.screen.height < window.innerHeight) {
        //   width = window.screen.height
        // }

        setSize([width, height]);
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };


  const [width, height] = useWindowSize();
  const isMobile = width < 769
  const isTablet = width > 767 && width < 970;
  const isDesktop = width > 970;
  // const isMobile = width <= parseInt(size.mobile.max.slice(0, -2), 10) ? true : false;
  // const isTablet = width >= parseInt(size.tablet.min.slice(0, -2), 10) && width <= parseInt(size.tablet.max.slice(0, -2), 10) ? true : false;
  // const isDesktop = width >= parseInt(size.desktop.min.slice(0, -2), 10) ? true : false;

  return (
    <InitialDataContext.Provider value={{ label }}>
      <MainPage width={width} height={height} path={path} isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
    </InitialDataContext.Provider>
  );
}
