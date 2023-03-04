export const getPhotoWithSize = (photoURL: string, width: number | null = null, height: number | null = null): string => {

    // Build the parameters if passed the values. 
    const widthParameter = width ? `?w=${width}` : '';
    const heightParameter = height ? `?h=${height}` : '';

    return `${photoURL}` + widthParameter + heightParameter;
}