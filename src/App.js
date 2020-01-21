import React from 'react';

let board = new Array(10);
board = board.fill(new Array(10), 0, 9).map(row => row.fill(0, 0, 9));

console.log(board)
function App() {
  return (
    <div className="App">
      <header>
          <h1>Mine Sweeper </h1>
      </header>
      <main>
        <div className='board'>
          {
            board.map((row, key) => <div key={key} className='row'> 
              {
                row.map((cell, key) => <div key={key} className='cell' onClick={() => console.log(cell)} />)
              }
              </div>
            )
          }
        </div>
      </main>
    </div>
  );
}

export default App;
