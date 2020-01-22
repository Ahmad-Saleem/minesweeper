import { Game } from './models'
import {GAME_INIT, CELL_OPEN, SETUP_MINES} from './actions'
import {generateBoardData, setupMines} from '../../utils/functions'

const initialState = Game({board: generateBoardData()});


export default (state = initialState, action) => {
    switch(action.type){
        case SETUP_MINES: return state.update('board', board => setupMines(board));
        case CELL_OPEN: return state;
        case GAME_INIT: default: return state;
    }
}