const cloneArray = array => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = [...array[i]];
    }
    return newArray;
}

const checkWord = (board, word, path = []) => {

    if (word.length === 0) return [true, path];

    if (path.length === 0) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === word.charAt(0)) {
                    let newBoard = cloneArray(board);
                    newBoard[i][j] = null;
                    const [isMatch, foundPath] = checkWord(newBoard, word.substr(1), [{x: i, y: j}]);
                    if (isMatch) return [true, foundPath];
                }
            }
        }
    }

    else {
        let pos = path[path.length - 1];
        for (const i of [-1, 0, 1]) {
            for (const j of [-1, 0, 1]) {
                if (i === 0 && j === 0) continue;
                let x = pos.x + i;
                let y = pos.y + j;
                if (x < 0 || y < 0 || x >= board.length || y >= board.length) continue
                if (board[x][y] === word.charAt(0)) {
                    let newBoard = cloneArray(board);
                    newBoard[x][y] = null;
                    let newPath = [...path];
                    newPath.push({x: x, y: y});
                    const [isMatch, foundPath] = checkWord(newBoard, word.substr(1), newPath);
                    if (isMatch) return [true, foundPath];
                }
            }
        }
    }

    return [false, null];
}

const wordHunt = async board => {

    let results = [];

    await fetch('dictionary.txt')
    .then(r => r.text())
    .then(t => {
        const words = t.split("\n");
        for (let word of words) {

            word = word.trim().toUpperCase();
            if (word.length < 3) continue;

            const [isMatch, path] = checkWord(board, word);
            if (isMatch) results.push({word: word, path: path});
        }
        results.sort((a, b) => {
            if (a.word.length > b.word.length) return -1;
            else if (b.word.length > a.word.length) return 1
            else return 0;
        });
    });

    return results;
}

export default wordHunt;