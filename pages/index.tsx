
import { HeroPanel } from '../components/index';


function HomePage() {
  return (


    // Hero Content
    <HeroPanel
      imgSrc={'/hero-wallpaper.jpg'}
      headingCopy={'Local News, Local First'} 
      paragraphCopy={'The Local Bulletin is the premier source for local news in the Western Suburbs of Brisbane.'}
      buttonCopy={'Latest Stories'}
    />

  )
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default HomePage