import * as atomComponentIndex from "./atoms/AtomComponentIndex";
import * as moleculeComponentsIndex from "./molecules/MoleculeComponentsIndex";

// Getting all atoms 
const { 
    BasicCard,
    StyledLink
} = atomComponentIndex;

// Getting all molecules
const {
    MapStoriesToCards,
    SearchBar
} = moleculeComponentsIndex;

// named exports for atoms + molecules
export {
    // ATOMS
    BasicCard,
    StyledLink,
    // MOLECULES
    MapStoriesToCards,
    SearchBar
};

// A default export with the whole library
const allComponents = {
    ...atomComponentIndex,
    ...moleculeComponentsIndex,
};

export default allComponents;
