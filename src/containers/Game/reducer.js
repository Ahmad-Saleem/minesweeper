import { Game } from './models'
import {GAME_INIT} from './actions'
import {generateBoardData} from '../../utils/functions'

export default (state = Game(), action) => {
    switch(action.type){
        case GAME_INIT: default: return Game({board: generateBoardData()});
    }
}