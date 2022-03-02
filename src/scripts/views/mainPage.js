import React, { useContext } from "react";
import { InitialDataContext } from "../context/initalData";

import { DesktopView } from "./desktopView";
import { MobileView } from "./mobileView";

export const MainPage = ({ isMobile = false, isTablet = false, width, height, path, isDesktop = true }) => {
  const dataContext = useContext(InitialDataContext);
  const label = dataContext.label;

  console.log(width);
  return (
    <div>
      {
        Object.keys(label).length > 0 &&
        <>
          <div>
            {!isMobile && <DesktopView path={path} widthS={width} />}
            {isMobile && <MobileView path={path} widthS={width} />}
          </div>
        </>
      }
    </div >
  );

};
