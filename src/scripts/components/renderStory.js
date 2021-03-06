import React, { useEffect, useState } from "react";

const RenderStory = ({
    number,
    setScrollLeft,
    setLastStory,
    scrollLeft,
    id,
    label,
    path,
    isStoryLast,
    storyPage,
    setScrollPage,
    width,
    handleOnImageClick,
    desktopView,
    isEven
}) => {
    const [totalPage, setTotalPage] = useState(0)
    const handleSetScrollLeft = (e) => {
        setScrollLeft(e)
    }

    const handleSetLastStory = (e) => {
        setLastStory(e)
    }

    const handleSetStoryPage = (e) => {
        setScrollPage(e)
    }

    useEffect(() => {
        const slider = document.getElementById(`swipe-container-${number}`);

        const handleScroll = () => {
            handleSetScrollLeft(slider.scrollLeft);
        }

        handleSetLastStory(false)
        slider.addEventListener("scroll", handleScroll);

        if (slider.offsetWidth + slider.scrollLeft >= slider.scrollWidth) {
            handleSetLastStory(true)
        }

        handleSetStoryPage((Math.round(slider.scrollLeft / slider.offsetWidth) + 1))

        return () => slider.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollLeft]);

    useEffect(() => {
        const slider = document.getElementById(`swipe-container-${number}`);

        setTotalPage(Math.round(slider.scrollWidth / slider.offsetWidth));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    const setImgClick = () => {
        handleOnImageClick()
    }

    const isEvenC = isEven ? "isEvenContainer" : "isOddContainer"
    return (
        <div>
            <div className={`story-container ${isEvenC}`} id={`story-container-${number}`}>
                <div className="story-header-container">
                    <div className="story-header-number">{number}</div>
                    <div className="story-header-title" dangerouslySetInnerHTML={{ __html: label[id]["title"].replace('</br>', '') }} />
                </div>

                <div className={`story-body-container`}>
                    {label[id].image !== "" &&
                        <div className="story-image-container">
                            <img className="story-img" src={`${path}images/${label[id].image}`} alt={`img1`} onClick={() => setImgClick()} />
                            <div className="story-image-text">
                                <div className="story-date">{label[id].date}</div>
                                <div className="story-caption" dangerouslySetInnerHTML={{ __html: label[id].caption.replace('</br>', '') }} />
                            </div>

                        </div>
                    }
                    <div className="story-body-text-container" id={`swipe-container-${number}`}>
                        {
                            label[id].story.map((x, y) => {

                                return (
                                    <p className="story-body-text" key={y}>
                                        {x}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    !desktopView &&
                    <div className={`swipe-pageination-container`}>
                        <div className={`swipe-container`}>
                            <img className="swipe-img" src={`${path}images/swipeLogo.png`} alt={`img-swipe`} />
                        </div>
                        <div className="swipe-pagination">
                            {storyPage} of {totalPage}
                        </div>
                    </div>

                }
            </div>
        </div>
    )
};

export default RenderStory;

