export const GAME_INIT = 'GAME_INIT';

export const gameInit = () => ({
    type: GAME_INIT,
    payload: {}
});


export const CELL_OPEN = 'CELL_OPEN';

export const cellOpen = (cell) => {

    return (dispatch, getState) => {

        const state = getState();
        console.log(state)
        if(state.game.get('openedCells') === 0) dispatch(setupMinesAction());

        dispatch({
            type: CELL_OPEN,
            payload: cell.update('isOpened', isOpened => true),
        });
    }
}


export const SETUP_MINES = 'SETUP_MINES';
export const setupMinesAction = () => {
    return {
        type: SETUP_MINES,
        payload: {}
    }
}