import {fromJS, List} from 'immutable'
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

export const setupMines = (board, level, firstOpenedCell) => {
    const {rows, cols, mines} = level;
    const minedBoard = board.withMutations(grid => {
        let i = 0;
        //console.log(firstOpenedCell);
        while(i < mines){
            let x = Math.floor(Math.random() * rows);
            let y = Math.floor(Math.random() * cols);
            //console.log({x,y});
            if(
                firstOpenedCell.get('x') !== x && 
                firstOpenedCell.get('y') !== y &&
                grid.getIn([x,y, 'hasMine']) === false){

                    grid.setIn([x, y,'hasMine'], true);
                    i++;    
            }
            
        }
    });

    const fullBoard = setupNeighbours(minedBoard);
    return fullBoard;
}

export const setupNeighbours = (board) => {
    return board.withMutations(grid => {
        grid.forEach((row, i) => {
            row.forEach((col, j) => {
                
                const neighbours = [
                    getNeighbor(grid, i, j-1),
                    getNeighbor(grid, i-1, j-1),
                    getNeighbor(grid, i-1, j),
                    getNeighbor(grid, i-1, j+1),
                    getNeighbor(grid, i, j+1),
                    getNeighbor(grid, i+1, j+1),
                    getNeighbor(grid, i+1, j),
                    getNeighbor(grid, i+1, j-1),
                ].filter(neighbour => neighbour && neighbour != null);
                //console.log({i,j}, neighbours)
                const value = neighbours.filter(neighbour => neighbour && neighbour.get('hasMine')).length;
                
                grid.setIn([i,j, 'value'], value);

                const neighboursPos = neighbours.map(neighbour => [neighbour.get('x'), neighbour.get('y')]);
                grid.update([i,j, 'neighbours'], neighbours => List.of(neighboursPos)); // @HERE
            });
        })
    });
}

const getNeighbor = (grid, i, j) => {

    if(i<0 || j<0) return null;
    
    const row = grid.get(i);

    if(!row) return null;

    const cell = row.get(j);

    if(!cell) return null;

    return cell;
}

