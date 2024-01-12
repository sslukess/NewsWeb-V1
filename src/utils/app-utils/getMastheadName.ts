
const mastheadName = process.env.NEXT_PUBLIC_MASTHEAD || "The sslukess Times"; 

function calcMastheadName(masthead: string):  string[] {

    const mastheadArray = masthead.split(" "); 

    return mastheadArray; 
}

function getMastheadName(): string[] {
    return calcMastheadName(mastheadName); 
} 

export default getMastheadName;
