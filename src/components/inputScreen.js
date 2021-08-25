import { useState } from 'react';
import InputBoard from './inputBoard'
import '../css/inputScreen.css'

const InputScreen = props => {

    const [boardFilled, setBoardFilled] = useState(false);

    const submit = () => {
        if (boardFilled) props.findWords();
    }

    return (
        <div className="inputScreen">
            <button className="backButton" onClick={props.goHome}></button>
            <p className="inputPrompt">INPUT LETTERS</p>
            <InputBoard size={props.size} setBoard={props.setBoard} setBoardFilled={setBoardFilled} submit={submit}/>
            <button className="findWords" disabled={!boardFilled} onClick={props.findWords}>FIND WORDS</button>
        </div>
    );
}

export default InputScreen;