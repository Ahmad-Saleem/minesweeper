import React from 'react'
import {Provider} from 'react-redux'
import {List} from 'immutable'

import store from './store'

let board = new Array(10);
board = board.fill(new Array(10), 0, 9).map(row => row.fill(0, 0, 9));



function App() {
  
  return (
    <Provider store={store}>
      {
        console.log(store.getState().game.get('board'))
      }
      <div className="App">
      <header>
          <h1>Mine Sweeper </h1>
      </header>
      <main>
        <div className='board'>
          {
            List.isList(store.getState().game.get('board')) && store.getState().game.get('board').map((row, key) => <div key={key} className='row'> 
              {
                row.map((cell, key) => <div key={key} className='cell' onClick={() => console.log(cell)} />)
              }
              </div>
            )
          }
        </div>
      </main>
    </div>
    </Provider>
  );
}

export default App;
