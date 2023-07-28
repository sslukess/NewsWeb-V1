
import { HeroPanel, FrontPgLeadStories } from '../components/index';
import getLatestStories from '../graphql/query-functions/LatestStories';
import { NormalisedStory } from '../types/index.d';
import mapRawResponseToStoryObject from '../graphql/data-mapping/StoryDataMapping';
import LeadStory from './components/leadStory'

async function HomePage(props) {

    //   const { latestStories } = props;

    const latestStories = await getLatestStories(3);

    // clean the stories data
    const cleanedStories: NormalisedStory[] = latestStories.map((item) => {
        const cleanStory = mapRawResponseToStoryObject(item);
        return cleanStory;
    });

    return (
        <>

            <HeroPanel
                imgSrc={''}
                headingCopy={'Local News, Local First'}
                paragraphCopy={'The Local Bulletin is the premier source for local news in the Western Suburbs of Brisbane.'}
                buttonCopy={'Latest News'}
            />

            <LeadStory rawStory={latestStories[0]} />

            <FrontPgLeadStories stories={cleanedStories} />

        </>

    )
}

export default HomePage;