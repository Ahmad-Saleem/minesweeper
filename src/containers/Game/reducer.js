import { Game } from './models'
import {GAME_INIT, CELL_OPEN, SETUP_MINES, INCREASE_OPENED_CELLS} from './actions'
import {generateBoardData, setupMines} from '../../utils/functions'


const initialState = Game({board: generateBoardData()});

export default (state = initialState, action) => {
    
    switch(action.type){
        case SETUP_MINES: return state
            .update('board', board => 
                setupMines(board, state.get('level'), action.payload)
            );
        case CELL_OPEN: return state
            .setIn(['board', action.payload.x, action.payload.y, 'isOpened'], true)
            .update('openedCells', openedCells => ++openedCells);
        case INCREASE_OPENED_CELLS: return state.set('openedCells', state.get('openedCells') + 1);
        case GAME_INIT: return initialState;
        default: return state;
    }
}