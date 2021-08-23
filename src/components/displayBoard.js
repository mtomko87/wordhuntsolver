import { useState } from 'react';
import '../css/displayBoard.css';
import DisplaySquare from './displaySquare';
import Line from './line';

const DisplayBoard = props => {

    // store the position of each square, start with them all init to 0, 0
    let array = new Array(props.letters.length);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(props.size);
        for (let j = 0; j < props.letters.length; j++) {
            array[i][j] = {x: 0, y: 0};
        }
    }
    const [squarePositions, setSquarePositions] = useState(array);

    // create an array of lines out of our path
    let lines = [];
    for (let i = 1; i < props.path.length; i++) {
        lines.push({
            start: props.path[i - 1],
            end: props.path[i] 
        });
    }

    // function to set the position of a square
    const setSquarePosition = (pos, x, y) => {
        setSquarePositions(prevState => {
            let copy = [...prevState];
            let rowCopy = [...copy[x]];
            rowCopy[y] = pos;
            copy[x] = rowCopy;
            return copy;
        });
    }

    return (
        <div className="displayBoard">
            {props.letters.map((row, rowIndex) => 
                <div key={rowIndex}>
                    {row.map((letter, colIndex) =>
                        <div key={colIndex} className="displayBoardItem">
                            <DisplaySquare letter={letter} setPos={pos => setSquarePosition(pos, rowIndex, colIndex)}/>
                        </div>
                    )}
                </div>
            )}
            {lines.map((line, index) =>
                <Line key={index} start={squarePositions[line.start.x][line.start.y]} end={squarePositions[line.end.x][line.end.y]}/>
            )}
        </div>
    );
}

export default DisplayBoard;