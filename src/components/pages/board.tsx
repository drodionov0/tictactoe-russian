import { useState } from "react";
import styles from '../scss/board.module.scss'


function Square ({ value, onSquareClick }: {value: any, onSquareClick: () => void}) {
    return(
        <button className={styles.but} onClick={onSquareClick}>{value}</button>
    );
}

function Board(){

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));


    function handleClick(i: number){
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status: string;

    if(winner) {
        status = 'Победитель: ' + winner;
    } else if(squares.every((square) => square !== null)){
        status = 'Ничья';
    } else {
        status = 'Следующий ход за ' + (xIsNext ? 'X' : 'O');
    }


    function handleReset() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        }

    return(

        <div className={styles.page}>
            <button onClick={handleReset} className={styles.buts}>Сброс</button>
             <div className={styles.status}>{status}</div>
                <div className={styles.board}>
                    <Square
                        value={squares[0]}
                        onSquareClick={() => handleClick(0)}
                    />
                    <Square
                        value={squares[1]}
                        onSquareClick={() => handleClick(1)}
                    />
                    <Square
                        value={squares[2]}
                        onSquareClick={() => handleClick(2)}
                    />
                </div>
                <div className={styles.board}>
                    <Square
                        value={squares[3]}
                        onSquareClick={() => handleClick(3)}
                    />
                    <Square
                        value={squares[4]}
                        onSquareClick={() => handleClick(4)}
                    />
                    <Square
                        value={squares[5]}
                        onSquareClick={() => handleClick(5)}
                    />
                </div>
                <div className={styles.board}>
                    <Square
                        value={squares[6]}
                        onSquareClick={() => handleClick(6)}
                    />
                    <Square
                        value={squares[7]}
                        onSquareClick={() => handleClick(7)}
                    />
                    <Square
                        value={squares[8]}
                        onSquareClick={() => handleClick(8)}
                    />
                </div>
        </div>
    );


}

function calculateWinner(squares: any){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

export default Board;