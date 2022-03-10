import React, { useContext, useState } from "react";
import { InitialDataContext } from "../context/initalData";

import RenderStory from "../components/renderStory";

export const MobileView = ({ isMobile = false, isTablet = false, widthS, height, path, isDesktop = true }) => {
    const dataContext = useContext(InitialDataContext);
    const label = dataContext.label;
    const [show, setShow] = useState(false);
    const [whichStoryImgClick, setWhichStoryImgClick] = useState(1);

    const [scrollLeft1, setScrollLeft1] = useState();
    const [isStoryLast1, setIsStoryLast1] = useState(false);
    const [storyPage1, setstoryPage1] = useState(1);

    const [scrollLeft2, setScrollLeft2] = useState();
    const [isStoryLast2, setIsStoryLast2] = useState(false);
    const [storyPage2, setstoryPage2] = useState(1);

    const [scrollLeft3, setScrollLeft3] = useState();
    const [isStoryLast3, setIsStoryLast3] = useState(false);
    const [storyPage3, setstoryPage3] = useState(1);

    const [scrollLeft4, setScrollLeft4] = useState();
    const [isStoryLast4, setIsStoryLast4] = useState(false);
    const [storyPage4, setstoryPage4] = useState(1);

    const [scrollLeft5, setScrollLeft5] = useState();
    const [isStoryLast5, setIsStoryLast5] = useState(false);
    const [storyPage5, setstoryPage5] = useState(1);

    const [scrollLeft6, setScrollLeft6] = useState();
    const [isStoryLast6, setIsStoryLast6] = useState(false);
    const [storyPage6, setstoryPage6] = useState(1);

    const [scrollLeft7, setScrollLeft7] = useState();
    const [isStoryLast7, setIsStoryLast7] = useState(false);
    const [storyPage7, setstoryPage7] = useState(1);

    const [scrollLeft8, setScrollLeft8] = useState();
    const [isStoryLast8, setIsStoryLast8] = useState(false);
    const [storyPage8, setstoryPage8] = useState(1);

    const [scrollLeft9, setScrollLeft9] = useState();
    const [isStoryLast9, setIsStoryLast9] = useState(false);
    const [storyPage9, setstoryPage9] = useState(1);

    const [scrollLeft10, setScrollLeft10] = useState();
    const [isStoryLast10, setIsStoryLast10] = useState(false);
    const [storyPage10, setstoryPage10] = useState(1);

    const handleSetScrollLeft = (e, x) => {
        switch (x) {
            case 1:
                setScrollLeft1(e)
                break;

            case 2:
                setScrollLeft2(e)
                break;

            case 3:
                setScrollLeft3(e)
                break;

            case 4:
                setScrollLeft4(e)
                break;

            case 5:
                setScrollLeft5(e)
                break;

            case 6:
                setScrollLeft6(e)
                break;

            case 7:
                setScrollLeft7(e)
                break;

            case 8:
                setScrollLeft8(e)
                break;

            case 9:
                setScrollLeft9(e)
                break;

            case 10:
                setScrollLeft10(e)
                break;

            default:
                setScrollLeft1(e)
        }


    }

    const handleSetLastStory = (e, x) => {
        switch (x) {
            case 1:
                setIsStoryLast1(e)
                break;
            case 2:
                setIsStoryLast2(e)
                break;
            case 3:
                setIsStoryLast3(e)
                break;
            case 4:
                setIsStoryLast4(e)
                break;
            case 5:
                setIsStoryLast5(e)
                break;
            case 6:
                setIsStoryLast6(e)
                break;
            case 7:
                setIsStoryLast7(e)
                break;
            case 8:
                setIsStoryLast8(e)
                break;
            case 9:
                setIsStoryLast9(e)
                break;
            case 10:
                setIsStoryLast10(e)
                break;

            default:
                setIsStoryLast1(e)
        }
    }

    const handleLast = (x) => {
        let islast = isStoryLast1;
        switch (x) {
            case 1:
                islast = isStoryLast1
                break;
            case 2:
                islast = isStoryLast2
                break;
            case 3:
                islast = isStoryLast3
                break;
            case 4:
                islast = isStoryLast4
                break;
            case 5:
                islast = isStoryLast5
                break;
            case 6:
                islast = isStoryLast6
                break;
            case 7:
                islast = isStoryLast7
                break;
            case 8:
                islast = isStoryLast8
                break;
            case 9:
                islast = isStoryLast9
                break;
            case 10:
                islast = isStoryLast10
                break;
            default:
                islast = isStoryLast1
        }

        return islast
    }

    const handleScrollLeft = (x) => {
        let scrollLeft = scrollLeft1;
        switch (x) {
            case 1:
                scrollLeft = scrollLeft1
                break;
            case 2:
                scrollLeft = scrollLeft2
                break;
            case 3:
                scrollLeft = scrollLeft3
                break;
            case 4:
                scrollLeft = scrollLeft4
                break;
            case 5:
                scrollLeft = scrollLeft5
                break;
            case 6:
                scrollLeft = scrollLeft6
                break;
            case 7:
                scrollLeft = scrollLeft7
                break;
            case 8:
                scrollLeft = scrollLeft8
                break;
            case 9:
                scrollLeft = scrollLeft9
                break;
            case 10:
                scrollLeft = scrollLeft10
                break;
            default:
                scrollLeft = scrollLeft1
        }

        return scrollLeft
    }

    const handleScrollPage = (x) => {
        let scrollLeft = storyPage1;
        switch (x) {
            case 1:
                scrollLeft = storyPage1
                break;
            case 2:
                scrollLeft = storyPage2
                break;
            case 3:
                scrollLeft = storyPage3
                break;
            case 4:
                scrollLeft = storyPage4
                break;
            case 5:
                scrollLeft = storyPage5
                break;
            case 6:
                scrollLeft = storyPage6
                break;
            case 7:
                scrollLeft = storyPage7
                break;
            case 8:
                scrollLeft = storyPage8
                break;
            case 9:
                scrollLeft = storyPage9
                break;
            case 10:
                scrollLeft = storyPage10
                break;
            default:
                scrollLeft = storyPage1
        }

        return scrollLeft
    }

    const handleSetStoryPage = (e, x) => {
        switch (x) {
            case 1:
                setstoryPage1(e)
                break;
            case 2:
                setstoryPage2(e)
                break;
            case 3:
                setstoryPage3(e)
                break;
            case 4:
                setstoryPage4(e)
                break;
            case 5:
                setstoryPage5(e)
                break;
            case 6:
                setstoryPage6(e)
                break;
            case 7:
                setstoryPage7(e)
                break;
            case 8:
                setstoryPage8(e)
                break;
            case 9:
                setstoryPage9(e)
                break;
            case 10:
                setstoryPage10(e)
                break;

            default:
                setstoryPage1(e)
        }
    }

    const handleOnImageClick = (e) => {
        setWhichStoryImgClick(e);
        setShow(true)
        document.querySelector("body").style.overflow = "hidden"
    }

    const handleOnClose = (e) => {
        if (e.target.className === "popup-container isShow") {
            setShow(false);
            document.querySelector("body").style.overflow = "auto"
        }

        if (e.target.className === "popup-close-img") {
            setShow(false);
            document.querySelector("body").style.overflow = "auto"
        }

    }
    const isShow = show ? "isShow" : "isHide";

    return (
        <div className="mobile-view-container">
            {
                Object.keys(label).length > 0 &&
                <>
                    {
                        Array.from({ length: label.totalStory }).map((_, x) => {
                            const num = x + 1 < 10 ? `0${x + 1}` : x + 1;
                            return (
                                <RenderStory
                                    key={x}
                                    id={`story${x + 1}`}
                                    label={label}
                                    number={num}
                                    isStoryLast={handleLast(x + 1)}
                                    setScrollLeft={(e) => handleSetScrollLeft(e, x + 1)}
                                    setLastStory={(e) => handleSetLastStory(e, x + 1)}
                                    path={path}
                                    scrollLeft={handleScrollLeft(x + 1)}
                                    storyPage={handleScrollPage(x + 1)}
                                    setScrollPage={(e) => handleSetStoryPage(e, x + 1)}
                                    width={widthS}
                                    handleOnImageClick={() => handleOnImageClick(x + 1)}
                                />
                            )
                        })
                    }


                    <div className={`popup-container ${isShow}`} onClick={(e) => handleOnClose(e)}>
                        <div className="popup-body">
                            <div className="body-container">
                                <div className="popup-close-button" >
                                    <img className="popup-close-img" src={`${path}images/crossButton.png`} alt={`crossButton`} onClick={(e) => handleOnClose(e)} />
                                </div>
                                <img className="popup-story-img" src={`${path}images/${label[`story${whichStoryImgClick}`].image}`} alt={`img1`} />
                                <div className="popup-story-caption" dangerouslySetInnerHTML={{ __html: label[`story${whichStoryImgClick}`].caption }} />
                            </div>
                        </div>
                    </div>


                </>
            }
        </div >
    );

};
