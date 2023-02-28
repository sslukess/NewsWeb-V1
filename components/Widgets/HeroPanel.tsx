import React, { useContext } from "react";
import { ScreenSize, MediaValueObj } from '../../Utils/Dep_ScreenSize';
import './LeftHeadingText.scss';

export default function LeftHeadingText(props) {

    let localScreenSize: MediaValueObj = useContext(ScreenSize);

    let localScreenSizeClass = localScreenSize.isTabletOrMobile ? 'mobile' : 'desktop';

    return (
        <div id='outerContainer' className={localScreenSizeClass}>
            <div id='heading-box' className={localScreenSizeClass}>
                <h3>{props.heading}</h3>
            </div>
            <div id='para-box' className={localScreenSizeClass}>
                <p>{props.text}</p>
            </div>
        </div>
    )
};