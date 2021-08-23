import { useState } from "react";
import DisplayBoard from "./displayBoard";
import '../css/resultsScreen.css';
import Word from "./word";

const ResultsScreen = props => {

    const [path, setPath] = useState([]);

    return (
        <div className="resultsScreen">
            <button className="backButton" onClick={props.goHome}></button>
            <div className="boardDiv">
                <p className="wordCount">{props.results.length + " WORDS"}</p>
                <DisplayBoard letters={props.board} path={path}/>
            </div>
            {props.results.length > 0 && <div className="wordsDivOuter">
                <div className="wordsDiv">
                    {props.results.map(result =>
                        <Word key={result.word} word={result.word} path={result.path} setPath={setPath}/>
                    )}
                </div>
            </div>}
        </div>
    );
}

export default ResultsScreen;