import { useEffect, useRef } from 'react';
import '../css/inputSquare.css'

const InputSquare = props => {

    const square = useRef(null);
    useEffect(() => {
        if (props.focused) square.current.focus();
    });

    const handleKeyDown = e => {
        if (e.keyCode >= 65 && e.keyCode <= 90) { // letters
            props.setLetter(props.row, props.col, e.key);
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode === 8) { // backspace
            props.setLetter(props.row, props.col, null);
            props.setFocus(props.row, props.col - 1);
        }
        else if (e.keyCode === 46) { // delete
            props.setLetter(props.row, props.col, null);
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

    return (
        <div ref={square} className="inputSquare" tabIndex="0" onKeyDown={handleKeyDown}>
            <p className="inputText">{props.letter}</p>
        </div>
    );
}

export default InputSquare