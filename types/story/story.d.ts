
// Interface for mapped data
export interface NormalisedStory {
    storyTitle: string;
    storyBody: React.ReactNode;
    storyPhoto: {
        fileName: string;
        url: string;
    };
    slug: string;
}