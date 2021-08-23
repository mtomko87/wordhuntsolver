import { useEffect, useState } from 'react';
import '../css/loadingScreen.css'

const LoadingScreen = () => {

    const [numDots, setNumDots] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumDots(prevDots => prevDots >= 3 ? 0 : prevDots + 1);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loadingScreen">
            <p className="loadingText">LOADING{".".repeat(numDots)}</p>
        </div>
    );
}

export default LoadingScreen;