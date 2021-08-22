import { useState } from 'react';
import InputSquare from './inputSquare';
import '../css/inputBoard.css';

const InputBoard = props => {

    let array = new Array(props.size);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(props.size);
    }

    const [letters, setLetters] = useState(array);
    const [focusedSquare, setFocusedSquare] = useState({row: 0, col: 0});

    const setLetter = (row, col, letter) => {

        let copy = [...letters];
        copy[row][col] = letter ? letter.toUpperCase() : null;
        setLetters(copy);

        let boardFilled = true;
        for (let i = 0; i < props.size; i++) {
            for (let j = 0; j < props.size; j++) {
                if (!copy[i][j]) {
                    boardFilled = false;
                    break;
                }
            }
        }
        props.setBoardFilled(boardFilled);
        if (boardFilled) props.setBoard(copy);
    }

    const setFocus = (row, col) => {
        if (row < 0) row = 0;
        if (row >= props.size) row = props.size - 1;
        if (col < 0) {
            if (row > 0) {
                row--;
                col = props.size - 1;
            } else {
                col = 0;
            }
        }
        if (col >= props.size) {
            if (row < props.size - 1) {
                row++;
                col = 0;
            } else {
                col = props.size - 1;
            }
        }
        setFocusedSquare({row: row, col: col});
    }

    const numbers = [...Array(props.size).keys()];

    return (
        <div className="inputBoard">
            {numbers.map((row) =>
                <div key={row} className="boardRow">
                    {numbers.map((col) =>
                        <div key={col} className="boardItem">
                            <InputSquare
                                letter={letters[row][col]}
                                row={row}
                                col={col}
                                focused={focusedSquare.row === row && focusedSquare.col === col}
                                setLetter={setLetter}
                                setFocus={setFocus}
                                submit={props.submit}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default InputBoard;