import  React from 'react';
import Square from './Square';

class Board extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            squares:Array(9).fill(null),
            xIsNext:true,
        }
    }
    
    calculateWinner(squares) {
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
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

  
    handleClick(i){
        const squares=this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares:squares,
            xIsNext:!this.state.xIsNext,
        });
    }
    renderSquare(i){
        return <Square value={this.state.squares[i]}
                onClick={()=>this.handleClick(i)}
        />
    }
    render(){
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return(
            <div className="main">
            <div style={{textAlign:"center"}}>{status}</div>
              <section>
                <div> {this.renderSquare(0)}</div>
                <div> {this.renderSquare(1)}</div>
                <div> {this.renderSquare(2)}</div>
              </section>
              <section>
              <div> {this.renderSquare(4)}</div>
              <div> {this.renderSquare(5)}</div>
              <div> {this.renderSquare(6)}</div>
            </section>
          
            <section>
            <div> {this.renderSquare(7)}</div>
            <div> {this.renderSquare(8)}</div>
            <div> {this.renderSquare(9)}</div>
          </section>
        

            </div>
        )
    }
}
export default Board;