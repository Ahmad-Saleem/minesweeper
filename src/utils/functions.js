import {fromJS} from 'immutable'
import {Cell, LEVEL} from '../containers/Game/models'


export const fillArray = (rows, cols, value = null) => {
    return new Array(rows).fill(value, 0, rows).map(elm => new Array(cols).fill(value, 0, cols))
}

export const generateBoardData = (level = LEVEL.easy) => {
    const filledArray = fillArray(level.rows, level.cols, null);
    
    filledArray.forEach((row, x) => {
        row.forEach((col, y) => {
            filledArray[x][y] = Cell({x,y});
        });
    });

    return fromJS(filledArray);
}

export const setupMines = (board) => {
    const boardJs = board.toJS();
    boardJs.forEach((row, i) => {
        row.forEach((col, j) => {
            if(col.x === col.y) col.hasMine = true;
        })
    });

    return fromJS(boardJs);
}

export const setupNeighbours = () => {

}

