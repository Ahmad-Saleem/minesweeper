export const GAME_INIT = 'GAME_INIT';

export const gameInit = () => ({
    type: GAME_INIT,
    payload: {}
});


export const CELL_OPEN = 'CELL_OPEN';
export const cellOpen = (cell) => {
    return (dispatch, getState) => {

        const {game} = getState();

        dispatch({
            type: CELL_OPEN,
            payload: cell,
        });

        if(cell.get('hasMine')){
            alert('looooose');
            return;
        }else if(cell.get('value') === 0 && !cell.get('isOpened')){

            const neighbours = cell.get('neghbours');
            //console.log(neighbours)
            neighbours.forEach(neighbourPos => {
                const neighbour = game.getIn(['board', ...neighbourPos]);
                if(!neighbour.get('hasMine')){
                    //console.log(neighbour);
                    dispatch(cellOpen(neighbour));
                }
            });
            //console.log(neighbours);
        }
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
