import { rawListeners } from "process";

// Interface for mapped data
export interface NormalisedStory {
    storyTitle: string;
    storyBody: React.ReactNode;
    storySummary: React.ReactNode;
    storyPhoto: {
        fileName: string;
        url: string;
    };
    slug: string;
    topics: string[];
    storyDate: string;
    author: string;
}

// Placeholder for raw story data, helps to differentiate between raw and normalised data
export type RawStory = any;