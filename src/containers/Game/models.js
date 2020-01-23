import {List, Record} from 'immutable'

const LEVEL = {
    easy: {name: 'easy', rows: 10, cols: 10, mines: 10},
    meduim: {name: 'medium', rows: 20, cols: 20, mines: 20},
    hard: {name: 'hard', rows: 30, cols: 30, mines: 30},
};

const GAME_STATE = {
    init: {name: 'init'},
    inprogress: {name: 'init'},
    win: {name: 'win'},
    lost: {name: 'lost'},
}

const Cell = Record({
    x: -1,
    y: -1,
    hasMine: false,
    isOpened: false,
    isFlaged: false,
    value: 0,
    neghbours: List(),
});

const Game = Record({
    board: List(),
    level: LEVEL.easy,
    flaggedCells: 0,
    openedCells: 0,
    state: GAME_STATE.init,
});


export {
    LEVEL,
    Cell,
    GAME_STATE,
    Game,
}