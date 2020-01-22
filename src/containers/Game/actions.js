export const GAME_INIT = 'GAME_INIT';

export const gameInit = () => ({
    type: GAME_INIT,
    payload: {}
});


export const CELL_OPEN = 'CELL_OPEN';

export const cellOpen = (cell) => {
        return {
            type: CELL_OPEN,
            payload: cell.update('isOpened', isOpened => true),
        }
}


export const SETUP_MINES = 'SETUP_MINES';
export const setupMinesAction = () => {
    return {
        type: SETUP_MINES,
        payload: {}
    }
}