import { useEffect, useRef, useState } from 'react';
import '../css/inputSquare.css'

const InputSquare = props => {

    const [fontSize, setFontSize] = useState("0px");

    const square = useRef(null);

    const calcFontSize = () => {
        const rect = square.current.getBoundingClientRect();
        const width = rect.width;
        const size = (width * 0.6) + "px";
        setFontSize(size);
    }

    useEffect(() => {
        if (props.focused) square.current.focus();
        calcFontSize();
        window.addEventListener("resize", calcFontSize);
        return () => window.removeEventListener("resize", calcFontSize)
    });

    const handleKeyDown = e => {
        e.preventDefault();
        if (e.keyCode >= 65 && e.keyCode <= 90) { // letters
            props.setLetter(props.row, props.col, e.key);
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode === 8) { // backspace
            props.setLetter(props.row, props.col, "");
            props.setFocus(props.row, props.col - 1);
        }
        else if (e.keyCode === 46) { // delete
            props.setLetter(props.row, props.col, "");
            props.setFocus(props.row, props.col);
        }
        else if (e.keyCode === 37) { // left
            props.setFocus(props.row, props.col - 1);
        }
        else if (e.keyCode === 38) { // up
            props.setFocus(props.row - 1, props.col);
        }
        else if (e.keyCode === 39) { // right
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode === 40) { // down
            props.setFocus(props.row + 1, props.col);
        }
        else if (e.keyCode === 13) { // enter
            props.submit();
        }
    }

    const disable = e => {
        e.preventDefault();
    }

    return (
        <input
            ref={square}
            className="inputSquare"
            defaultValue={props.letter}
            style={{fontSize: fontSize}}
            maxLength="1"
            onKeyDown={handleKeyDown}
            onPaste={disable}
            onDrop={disable}
        ></input>
    );
}

export default InputSquare