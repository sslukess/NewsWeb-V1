import React, { memo } from 'react';

const GoogleFontImports = (props) => {

    // just add new lines here for a new font. 
    return (
        <>
            {/* You only need these two once, so don't touch them or add new */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />

            {/* Okay this is the actual fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lemon&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Monofett&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
        </>
    )
};

export default GoogleFontImports;