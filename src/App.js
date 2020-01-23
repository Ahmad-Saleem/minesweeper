import React from 'react'
import {connect} from 'react-redux'

import {openCell} from './containers/Game/actions'
// let board = new Array(10);
// board = board.fill(new Array(10), 0, 9).map(row => row.fill(0, 0, 9));



function App({game, openCell}) {
  const {board} = game;

  return (
      <div className="App">
      <header>
          <h1>Mine Sweeper </h1>
      </header>
      <main>
        <div className='board'>
          {
            board.size > 0 && board.map((row, key) => <div key={key} className='row'> 
              {
                row.map((cell, key) => <div 
                  key={key} 
                  className={`cell ${cell.get('isOpened') ? 'cell-opened' : ''}`} 
                  onClick={() => openCell(cell)}
                  style={cell.get('hasMine')? {backgroundColor: 'red'} : {}}
                > 
                    {cell.get('hasMine') ? '' : cell.get('value') > 0 ? cell.get('value') : ''}
                </div>)
              }
              </div>
            )
          }
        </div>
      </main>
    </div>
  );
}

const mapPropsToState = ({game}) => {
  return {
    game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openCell: (cell) => dispatch(openCell(cell)),
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(App);
