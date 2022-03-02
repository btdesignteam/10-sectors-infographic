import React, { useContext, useEffect } from "react";
import DropDown from "../components/dropdown";
import { InitialDataContext } from "../context/initalData";
import shareon from 'shareon';

export const Header = ({ path, isMobile, handleDropdown, dropdownValue, isAbsolute, isDesktop, handleIsAbsolute }) => {
    const dataContext = useContext(InitialDataContext);
    const label = dataContext.label;

    useEffect(() => {
        shareon();
    }, [])

    const handleOnClickDropdown = (e) => {
        handleDropdown(e)
    }

    const selectedA = isAbsolute === true ? 'selected' : '';
    const selectedP = isAbsolute === false ? 'selected' : '';

    const handleOnClickBt = () => {
        // window.location = label.btUrl;
        window.open(label.btUrl);
    }

    const handleOnClickBudget = () => {
        // window.location = label.budgetUrl;
        window.open(label.budgetUrl);
    }

    // const handleOnClickFb = () => {
    //     // window.location = label.fbUrl;
    //     window.open(label.fbUrl);
    // }

    // const handleOnClickTw = () => {
    //     // window.location = label.twUrl;
    //     window.open(label.twUrl);
    // }

    // const metaTitle = document.querySelector('meta[name="twitter:description"]').content
    return (
        <div className="header-container">
            <div className="header-bar">
                <div onClick={() => handleOnClickBt()}>
                    <img src={isMobile ? `${path}images/btMobileLogo.svg` : `${path}images/btLogo.png`} alt="logo" className="btlogo" />
                </div>
                <div className="share-button-container">
                    <div className="shareon" data-url={`${label.fbUrl}`}>
                        <div className="facebook">
                            <img src={`${path}images/fbLogo.png`} alt="logo" className="fblogo" />
                        </div>
                    </div>
                    <div className="shareon" data-url={`${label.twUrl}`}>
                        <div className="twitter" data-title="Dive deep into the #SGBudget2022 estimates with this #interactive breakdown of revenue and expenditure" data-via="BusinessTimes">
                            <img src={`${path}images/twitterLogo.png}`} alt="logo" className="twitterlogo" />
                        </div>
                    </div>

                    <div className="shareon" data-url={`${label.fbUrl}`}>
                        <div className="linkedin">
                            <img src={`${path}images/inLogo.png}`} alt="logo" className="inlogo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-selection">
                <div onClick={() => handleOnClickBudget()}>
                    <img src={`${path}images/budgetLogo.png`} alt="logo" className="budgetlogo" />
                </div>
                <div className="mode-container">
                    <div className="view-title">{label.mainView.mode}</div>
                    <div className={`mode-button-container ${selectedA}`} onClick={() => handleIsAbsolute(true)}>
                        <div className="mode-button-text">{label.mainView.absolute}</div>
                    </div>
                    <div className={`mode-button-container ${selectedP}`} onClick={() => handleIsAbsolute(false)}>
                        <div className="mode-button-text">{isDesktop ? label.mainView.percentage : label.mainView.percent}</div>
                    </div>
                </div>
            </div>
            {
                !isDesktop &&
                <div className="main-dropdown">
                    <DropDown
                        data={label.view}
                        value={dropdownValue}
                        path={path}
                        handleOnData={(e) => handleOnClickDropdown(e)}
                    />
                </div>
            }
        </div>

    );

};
