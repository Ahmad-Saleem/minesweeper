import {List, Record} from 'immutable'

const LEVEL = {
    easy: {name: 'easy', rows: 10, cols: 10, mins: 10},
    meduim: {name: 'medium', rows: 20, cols: 20, mins: 20},
    hard: {name: 'hard', rows: 30, cols: 30, mins: 30},
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