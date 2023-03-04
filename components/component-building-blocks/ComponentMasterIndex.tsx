import * as atomComponentIndex from "./atoms/AtomComponentIndex";
import * as moleculeComponentsIndex from "./molecules/MoleculeComponentsIndex";

// Getting all atoms 
const { 
    BasicCard
} = atomComponentIndex;

// Getting all molecules
const {
    mapStoriesToCards
} = moleculeComponentsIndex;

// named exports for atoms + molecules
export {
    // ATOMS
    BasicCard,
    // MOLECULES
    mapStoriesToCards
};

// A named export with the whole library
const allComponents = {
    ...atomComponentIndex,
    ...moleculeComponentsIndex,
};

export default allComponents;
