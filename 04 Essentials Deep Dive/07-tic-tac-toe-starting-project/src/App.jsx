import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X'); //initially X is active

  const [gameTurns, setGameTurns] = useState([]); //gameTurns is state of array/list which will contains 
                                                  //all the moves played by the players, whenever a square 
                                                  //is selected, it will be added to gameTurns

  function handleSelectSquare() {
    //if the active player is X, we change it to O, otherwise we change it to X
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    //now we need to m,ake sure that this function is execurted when the button is clicked
    //which is in the gameboard component, so we pass onSelectSquare prop to the component

    //so now whenever the button is pressed the active user is switched


    //here we need to update our turns based on the previous game turns
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){ //prevTurns[0] why 0 bcz first in the list will always be the last player active
        currentPlayer = 'O';      //and initially the array will be empty so we use prevTurns.length > 0
      }
      const updatedTurns = [ { square : { row: rowIndex, col: colIndex }, player: currentPlayer }
        , ...prevTurns];  //here updatedTurns is an array that will store all the previous game turns [...prevTurns]
        //and before prevTurns we are creating an object square with rowIndex, colIndex. So the first element is always the last game turn
        //also we need to know which player is active, but we can't use - "[ { square : { row: rowIndex, col: colIndex }, player: activePlayer }
        //, ...prevTurns]" as it is a state inside a state (activePlayer), so we will use a variable currentPlayer for that

        return updatedTurns;
    });
  }

  return (
    
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>         
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>         
        </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log />
    </main>
   
    
  );
}

export default App
