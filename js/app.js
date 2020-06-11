var aColumn = null
var aRow = null
var turn = true
var lastColumnPress = null
var lastRowPress = null

function print() {
    if (turn) {
        aRow[lastElement].style.backgroundColor = "#ff6447";
        turn = false
    } else {
        aRow[lastElement].style.backgroundColor = "#ffcc00";
        turn = true
    }
}

function paint() { //I color my row according to the index I get from my function
    if (lastColumnPress === 0) {
        if (column0.includes(lastRowPress)) {
            console.log('Ya existe')
        } else {
            column0.push(lastRowPress)

            console.log(comunColumn)
            lastElement = comunColumn.length - 1
            comunColumn.splice(comunColumn.length - 1)
            console.log(column0)
            print()
        }
    }
}

function obtainIndex() {
    for (var i = 0; i < aColumn.length; i++) {
        aColumn[i].addEventListener('click', ((f) => {
            return function () {
                lastColumnPress = f
                aColumn[f].onclick = paint()
                console.log(lastColumnPress, lastRowPress)
            }
        })(i))
    }
    for (var i = 0; i < aRow.length; i++) {
        aRow[i].addEventListener('click', ((g) => {
            return function () {
                lastRowPress = g
            }
        })(i))
    }
}

window.onload = function () {
    aColumn = document.getElementsByClassName('column')
    aRow = document.getElementsByClassName('row')
    column0 = new this.Array()
    comunColumn = new this.Array()
    comunColumn = [0, 1, 2, 3, 4, 5]
    obtainIndex()
}

