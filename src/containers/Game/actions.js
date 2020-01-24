export const GAME_INIT = 'GAME_INIT';

export const gameInit = () => ({
    type: GAME_INIT,
    payload: {}
});


export const CELL_OPEN = 'CELL_OPEN';
export const cellOpen = (cell) => {
    return (dispatch, getState) => {

        const {game} = getState();

        if(cell.get('hasMine')){

        }else if(cell.get('value') === 0){
            const neighbours = cell.get('neighbours');
            console.log(neighbours);
        }

        dispatch({
            type: CELL_OPEN,
            payload: cell,
        });
    }
}


export const openCell = (cell) => {

    return (dispatch, getState) => {

        const {game} = getState();
        
        if(game.get('openedCells') === 0) {
            dispatch(setupMinesAction(cell));
        }

        dispatch(cellOpen(cell));
        //dispatch(increaseOpenedCells()); // no more needed
    }
}


export const SETUP_MINES = 'SETUP_MINES';
export const setupMinesAction = (cell) => {
    return {
        type: SETUP_MINES,
        payload: cell
    }
}

export const INCREASE_OPENED_CELLS = 'INCREASE_OPENED_CELLS';
export const increaseOpenedCells = () => ({
    type: INCREASE_OPENED_CELLS,
    payload: null
})
