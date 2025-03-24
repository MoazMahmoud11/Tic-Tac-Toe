import { useEffect } from "react"


export default function GameBoard({  onSelectSquare, board }){


    // const [gameBoard,setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard( (prevGameBoard) =>{
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; 
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare(); // call in game board
    // }
    
    useEffect( () => {
        if(board === null){
            console.log("i am rendered")
        }
    }, [JSON.stringify(board)]); // good => [...board.map( (i) => [...i])]

    return <ol id="game-board">
        {board.map( (row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={ () => onSelectSquare(rowIndex, colIndex) }
                    disabled={playerSymbol !== null}> 
                    {/* disabled={playerSymbol === 'X' ? true : playerSymbol === 'O' ? true : false} */}
                        {playerSymbol}
                        </button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}