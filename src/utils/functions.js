import {fromJS} from 'immutable'
import {Cell, LEVEL} from '../containers/Game/models'


export const fillArray = (rows, cols, value = null) => {
    return new Array(rows).fill(new Array(cols).fill(value, 0, cols-1), 0, rows-1);
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

