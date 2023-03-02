
import { HeroPanel, FrontPgLeadStories } from '../components/index';
import { dummyStories } from '../components/widgets/FrontPageLeadStories';


function HomePage() {
  return (
    <>

    <HeroPanel
      imgSrc={'/hero-wallpaper.jpg'}
      headingCopy={'Local News, Local First'} 
      paragraphCopy={'The Local Bulletin is the premier source for local news in the Western Suburbs of Brisbane.'}
      buttonCopy={'Latest Stories'}
      buttonHref={'/just-in'}
    />


    <FrontPgLeadStories
      story1={dummyStories.story1}
      story2={dummyStories.story2}
      story3={dummyStories.story3}
    />

</>

  )
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default HomePage