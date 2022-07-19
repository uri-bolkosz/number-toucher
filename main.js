'use strict'
var gmat = []
var rightNum

function creatboard(size) {

    var newMat = []
    for (var i = 0; i < (size); i++) {
        newMat.push([])
        for (var j = 0; j < (size); j++) {
            newMat[i][j] = generateUniqueRandom((size * size))

        }
    }
    haveIt = []
    return newMat
}



function startGame() {
    var size = prompt('enter game board size 4-8')
    if(size>8||size<4)
    {
        alert('error')
        return 0 
    }
    clearboard()
    gmat = creatboard(size)
    renderBoard(gmat)
}



function renderBoard(board) {
    console.table(board)

    var strHTML = ''
    for (var i = 0; i < board.length; i++) {

        strHTML += '<tr>\n'

        for (var j = 0; j < board[i].length; j++) {
            var strClass = board[i][j]
            strHTML += `
                \t<td 
                    class="${strClass}"
                    data-i="${i}" data-j="${j}"
                    onclick="cellClicked(this,${i}, ${j})">
                        ${board[i][j]}
                </td>\n
            `
        }
        strHTML += '</tr>\n'
    }
    var elTable = document.querySelector('.board')
    elTable.innerHTML = strHTML
}






var haveIt = [];
function generateUniqueRandom(maxNr) {
    //Generate random number
    var random = (Math.floor(Math.random() * maxNr) + 1).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if (haveIt.length < maxNr) {
            //Recursively generate number
            return generateUniqueRandom(maxNr);
        } else {
            console.log('No more numbers available.')
            return false;
        }
    }
}




function cellClicked(ev, cellI, cellJ) {
    
    if (parseInt(ev.innerHTML) === rightNum) {
        gmat[cellI][cellJ] = ''
        ev.innerHTML = ''
        rightNum += 1
        if(rightNum===parseInt(gmat.length*gmat.length+1))
        {
        clearboard()
        }
    }
    else
        console.log('wrong number');

}


function clearboard()
{
    rightNum = 1
    gmat = []
    
}