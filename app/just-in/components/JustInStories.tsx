// Types
import { NormalisedStory } from "../../../types/index.d";

//components 
import { MapStoriesToCards } from '../../../components/component-building-blocks/ComponentBuildingBlockIndex';

const JustInStoriesSection = (props) => {

    // Pull stories from props
    const { stories }: { stories: NormalisedStory[] } = props;

    return (
        <MapStoriesToCards stories={stories}/>
    );
};

export default JustInStoriesSection;
