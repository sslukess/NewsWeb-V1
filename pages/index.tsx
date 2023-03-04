
import { HeroPanel, FrontPgLeadStories } from '../components/index';
import getLatestStories from '../graphql/query-functions/LatestStories';
import { NormalisedStory } from '../types/index.d';
import mapRawResponseToStoryObject from '../graphql/data-mapping/StoryDataMapping';
import { getPhotoWithSize } from '../utils/story-utils/GetPhotoWithSize';


function HomePage(props) {

  const { latestStories } = props;

  // clean the stories data
  const cleanedStories: NormalisedStory[] = latestStories.map((item) => {
    const cleanStory = mapRawResponseToStoryObject(item);
    cleanStory.storyPhoto.url = getPhotoWithSize(cleanStory, 200);
    return cleanStory;
});

  return (
    <>

    <HeroPanel
      imgSrc={'/hero-wallpaper.jpg'}
      headingCopy={'Local News, Local First'} 
      paragraphCopy={'The Local Bulletin is the premier source for local news in the Western Suburbs of Brisbane.'}
      buttonCopy={'Latest Stories'}
      buttonHref={'/just-in'}
    />


    <FrontPgLeadStories latestStories={cleanedStories} />

</>

  )
}

export async function getServerSideProps() {

  const latestStories = await getLatestStories(3);

  return {
    props: {
      latestStories: latestStories,
    }, // will be passed to the page component as props
  }
}

export default HomePage;