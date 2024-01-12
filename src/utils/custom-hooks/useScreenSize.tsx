
import { useMediaQuery } from 'react-responsive';


export default function useScreenSize() {

    //get ScreenSizes
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800.1px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 485px)' })
    const isTinyMobile = useMediaQuery({ query: '(max-width: 375px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    let mediaValueObj = { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isMobile, isTinyMobile, isPortrait, isRetina }

    return mediaValueObj;
}