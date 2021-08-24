import { useEffect, useRef, useState } from "react";
import '../css/displaySquare.css';

const DisplaySquare = props => {

    const [fontSize, setFontSize] = useState("0px");

    const square = useRef(null);

    const setPos = () => {
        const rect = square.current.getBoundingClientRect();
        const x = (rect.left + window.scrollX + rect.right + window.scrollX) / 2;
        const y = (rect.top + window.scrollY + rect.bottom + window.scrollY) / 2;
        props.setPos({x: x, y: y});
    }

    const calcFontSize = () => {
        const rect = square.current.getBoundingClientRect();
        const width = rect.width;
        const size = (width * 0.6) + "px";
        setFontSize(size);
    }
    
    useEffect(() => {
        setPos();
        calcFontSize();
        window.addEventListener("resize", setPos);
        window.addEventListener("resize", calcFontSize);
        return () => {
            window.removeEventListener("resize", setPos);
            window.removeEventListener("resize", calcFontSize)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div ref={square} className="displaySquare">
            <p className="displayLetter" style={{fontSize: fontSize}}>{props.letter}</p>
        </div>
    );
}

export default DisplaySquare;