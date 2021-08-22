import '../css/word.css';

const Word = props => {
    return (
        <div className="word" tabIndex="0" onFocus={() => props.setPath(props.path)}>
            <p className="wordText">{props.word}</p>
        </div>
    );
}

export default Word;