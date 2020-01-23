export const GAME_INIT = 'GAME_INIT';

export const gameInit = () => ({
    type: GAME_INIT,
    payload: {}
});


export const CELL_OPEN = 'CELL_OPEN';
export const cellOpen = (cell) => ({
    type: CELL_OPEN,
    payload: cell,
});

export const openCell = (cell) => {

    return (dispatch, getState) => {

        const {game} = getState();
        
        if(game.get('openedCells') === 0) {
            dispatch(setupMinesAction());
        }

        dispatch(cellOpen(cell));
        //dispatch(increaseOpenedCells());
    }
}


export const SETUP_MINES = 'SETUP_MINES';
export const setupMinesAction = () => {
    return {
        type: SETUP_MINES,
        payload: {}
    }
}

export const INCREASE_OPENED_CELLS = 'INCREASE_OPENED_CELLS';
export const increaseOpenedCells = () => ({
    type: INCREASE_OPENED_CELLS,
    payload: null
})
