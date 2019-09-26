import React from 'react';
import Board from './Board';
import Header from './Header';
class Game extends React.Component{
    render(){
        return(
            <div>
            <Header/>
             <div className="heading animated pulse delay-3s"><h1>Tic-Tac-Toe</h1>

             </div>
             <div className="game">
             <Board/>
             </div>
             <div className="status">
             
             </div>
            
            </div>
        )
    }
}

export default Game;