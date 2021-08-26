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
            <InputBoard size={props.size} setBoard={props.setBoard} setBoardFilled={setBoardFilled} submit={submit}/>
            {boardFilled ? 
                <button className="findWords" onClick={props.findWords}>FIND WORDS</button>
            :
                <p className="promptText">FILL IN EACH SQUARE WITH A LETTER TO CONTINUE</p>
            }
        </div>
    );
}

export default InputScreen;