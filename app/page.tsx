
import { HeroPanel, FrontPgLeadStories } from '../components/index';
import getLatestStories from '../graphql/query-functions/LatestStories';
import { NormalisedStory } from '../types/index.d';
import mapRawResponseToStoryObject from '../graphql/data-mapping/StoryDataMapping';
import LeadStory from './components/leadStory'
import queryConfiguration from '../graphql/query-functions/configurationQuery';
import getStoryFromId from '../graphql/query-functions/getStoryFromId';

async function HomePage(props) {

    const latestStories = await getLatestStories(3);

    // clean the stories data
    const cleanedStories: NormalisedStory[] = latestStories.map((item) => {
        const cleanStory = mapRawResponseToStoryObject(item);
        return cleanStory;
    });

    // ---- Lead Story ----

    // get LeadStory Configuration 
    const leadStoryConfig = await queryConfiguration("LeadStory");

    // // get the lead story id from the configuration
    const leadStoryId = leadStoryConfig[0]?.ConfigurationReferenceId;

    // get story from ID 
    const leadStory = await getStoryFromId(leadStoryId);
    
    return (
        <>

            <HeroPanel
                imgSrc={''}
                headingCopy={'Local News, Local First'}
                paragraphCopy={'The Local Bulletin is the premier source for local news in the Western Suburbs of Brisbane.'}
                buttonCopy={'Latest News'}
            />

            <LeadStory rawStory={leadStory ?? latestStories[0]} />

            <FrontPgLeadStories stories={cleanedStories} />

        </>

    )
}

export default HomePage;