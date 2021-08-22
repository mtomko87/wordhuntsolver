import '../css/sizeChoice.css';

const SizeChoice = props => {

    const numbers = [...Array(props.size).keys()];

    return (
        <div className="sizeChoice" onClick={() => props.select(props.size)}>
            <div>
                {numbers.map((row) =>
                    <div key={row} className="gridRow">
                        {numbers.map((col) =>
                            <div key={col} className="gridItem">
                                <div className="gridSquare"></div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <p className="choiceText">{props.size}x{props.size}</p>
        </div>
    );
}

export default SizeChoice;