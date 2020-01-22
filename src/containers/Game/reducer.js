import { Game } from './models'
import {GAME_INIT, CELL_OPEN, SETUP_MINES} from './actions'
import {generateBoardData, setupMines} from '../../utils/functions'
import { fromJS, Record } from 'immutable';

const initialState = Game({board: generateBoardData()});


export default (state = initialState, action) => {
    switch(action.type){
        case SETUP_MINES: return state.update('board', board => setupMines(board));
        case CELL_OPEN: return state.update('board', board => {
            const {x,y} = action.payload;
            console.log(action.payload);
            const boardJs = board.toJS();
            const cell = boardJs[x][y];
            console.log(cell);
            cell.isOpened = true;
            const record = Record({...cell});
            boardJs[x][y] = record;
            return fromJS(boardJs);
        });
        case GAME_INIT: default: return state;
    }
}