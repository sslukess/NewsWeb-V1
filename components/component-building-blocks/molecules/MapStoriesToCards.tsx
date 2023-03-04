import { BasicCard } from "../atoms/AtomComponentIndex";

const mapStoriesToCards = (stories) => {
    return stories.map((story) => (
        <BasicCard
        imgSrc={`${story.storyPhoto.url}`}
        cardTitle={story.storyTitle}
        cardCopy={story.storySummary}
        buttonCopy={"Read Story"}
        link={`/story/${story.slug}`}
        />
    ));
};

export default mapStoriesToCards;