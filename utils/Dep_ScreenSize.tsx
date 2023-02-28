import React, { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export interface MediaValueObj {
    isDesktopOrLaptop: boolean,
    isBigScreen: boolean,
    isTabletOrMobile: boolean,
    isMobile: boolean,
    isPortrait: boolean,
    isRetina: boolean
};

export const ScreenSize = createContext({});

export default function ScreenSizeProvider({ children }) {

    //get ScreenSizes
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800.1px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 485px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    let mediaValueObj = { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isMobile, isPortrait, isRetina }

    return (
        <ScreenSize.Provider value={mediaValueObj}>
            {children}
        </ScreenSize.Provider>
    )
}