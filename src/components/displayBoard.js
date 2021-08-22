import '../css/displayBoard.css';
import Line from './line';

const getPosition = (x, y) => {
    // we flip the coordinates because y actually comes first, becasue of the way we store it
    const xPos = 120 * y + 60; 
    const yPos = 120 * x + 60;
    return {x: xPos, y: yPos};
}

const DisplayBoard = props => {

    let lines = [];
    for (let i = 1; i < props.path.length; i++) {
        lines.push({
            start: props.path[i - 1],
            end: props.path[i] 
        });
    }

    return (
        <div className="displayBoard">
            {props.letters.map((row, index) => 
                <div key={index} className="boardRow">
                    {row.map((letter, index) =>
                        <div key={index} className="boardItem">
                            <div className="inputSquare">
                                <p className="inputText">{letter}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
            {lines.map((line, index) =>
                <Line key={index} start={getPosition(line.start.x, line.start.y)} end={getPosition(line.end.x, line.end.y)}/>
            )}
        </div>
    );
}

export default DisplayBoard;