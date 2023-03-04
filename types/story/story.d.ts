import { rawListeners } from "process";

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

// Placeholder for raw story data, helps to differentiate between raw and normalised data
export type RawStory = any;