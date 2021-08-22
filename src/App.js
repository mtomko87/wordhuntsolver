import { useState } from 'react';
import InputScreen from './components/inputScreen';
import LoadingScreen from './components/loadingScreen';
import ResultsScreen from './components/resultsScreen';
import wordHunt from './functions/wordHunt';
import './App.css';
import SizeScreen from './components/sizeScreen';

function App() {

	const [screen, setScreen] = useState(0);
	const [size, setSize] = useState(4);
	const [board, setBoard] = useState(null);
	const [results, setResults] = useState([]);

	const goHome = () => {
		setScreen(0);
	}

	const selectSize = (selectedSize) => {
		setSize(selectedSize);
		setScreen(1);
	}

	const findWords = () => {
		setScreen(2);
		wordHunt(board).then(result => {
			setResults(result);
			setScreen(3);
		});
	}

	let screenToShow = null;
	if (screen === 0) screenToShow = <SizeScreen selectSize={selectSize}/>
	if (screen === 1) screenToShow = <InputScreen size={size} setBoard={setBoard} findWords={findWords} goHome={goHome}/>
	if (screen === 2) screenToShow = <LoadingScreen/>
	if (screen === 3) screenToShow = <ResultsScreen board={board} results={results} goHome={goHome}/>

	return (
		<div className="App">
			{screenToShow}
		</div>
	);
}

export default App;