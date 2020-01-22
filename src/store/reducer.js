import { combineReducers } from 'redux'
import gameReducer from '../containers/Game/reducer'

export default combineReducers({
    game: gameReducer,
});
