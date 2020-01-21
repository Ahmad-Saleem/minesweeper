
export const GAME_INIT = 'GAME_INIT';

export const gameInit = (board) => ({
    type: GAME_INIT,
    payload: board
});