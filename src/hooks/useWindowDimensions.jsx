import  { useState, useEffect} from 'react';

const getWindowDimension = ( ) => {
    const { innerWidth: width, innerHeight: height } = window;
    let itsMobile = true;
    if ( width > 400 ) itsMobile = false;
    return { width, height, itsMobile };
}

const useWindowDimension = ( ) => {
    const [dimensions, setDimensions] = useState( getWindowDimension( ) );

    useEffect( ( ) => {
        const handleResize = ( ) => {
            setDimensions( getWindowDimension( ) );
        }

        window.addEventListener('resize', handleResize);
        return ( ) => window.removeEventListener('resize', handleResize);
    }, []);

    return dimensions;
}

export default useWindowDimension;