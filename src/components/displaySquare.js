import { useEffect, useRef } from "react";
import '../css/displaySquare.css';

const DisplaySquare = props => {

    const square = useRef(null);

    const setPos = () => {
        const rect = square.current.getBoundingClientRect();
        const x = (rect.left + rect.right) / 2;
        const y = (rect.top + rect.bottom) / 2;
        props.setPos({x: x, y: y});
    }
    
    useEffect(() => {
        setPos();
        window.addEventListener("resize", setPos);
        return () => window.removeEventListener("resize", setPos)
    }, []);

    return (
        <div ref={square} className="displaySquare">
            <p className="displayLetter">{props.letter}</p>
        </div>
    );
}

export default DisplaySquare;