var sudukoArray = [
  [0, 9, 0, 0, 4, 2, 1, 3, 6],
  [0, 0, 0, 9, 6, 0, 4, 8, 5],
  [0, 0, 0, 5, 8, 1, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 0, 0, 0],
  [5, 1, 7, 2, 0, 0, 9, 0, 0],
  [6, 0, 2, 0, 0, 0, 3, 7, 0],
  [1, 0, 0, 8, 0, 4, 0, 2, 0],
  [7, 0, 6, 0, 0, 0, 8, 1, 0],
  [3, 0, 0, 0, 9, 0, 0, 0, 0]
]

const sudukoConEle = document.getElementById('sudukoCon');
const clickToSolveEle = document.getElementById('clickToSolve');
const paraErrorEle = document.getElementById('paraError');

function createSudoko(sudukoArray) {
  var lengthArray = sudukoArray.length
  for (var i = 0; i< lengthArray; i++) {
    var sudukoRow = document.createElement('tr')
    rowLength = sudukoArray[i].length
    for (var j =0; j < rowLength; j++) {
      var sudukoCol = document.createElement("td")
      
      var inputEle = document.createElement('input')
      inputEle.classList.add("box")
      var valueNum = sudukoArray[i][j] == 0 ? " ": sudukoArray[i][j]
      inputEle.value = valueNum
      
      sudukoCol.appendChild(inputEle)
      sudukoRow.appendChild(sudukoCol)
    }
    sudukoConEle.appendChild(sudukoRow)
  }
}

createSudoko(sudukoArray)


function solve(matrix) {
  for (var i = 0; i <= 8; i++) {
    for (var j = 0; j <= 8; j++) {
      //check for legitimate values
      if (matrix[i][j] != 0) {
        continue;
      }
      for (var k = 1; k <= 9; k++) {
        if (insert(matrix, i, j, k) == true) {
          matrix[i][j] = k;
          b = solve(matrix);
          if (b == true) {
            return true;
          }
          else {
            paraErrorEle.textContent = "U Solved It"
            paraErrorEle.classList.add("heading")
          }
          matrix[i][j] = 0;
        }
      }
      return false;
    }
  }
  return true;

}

function insert(matrix, i, j, k)
  //check column and rows
  {
    for (var a = 0; a <= 8; a++) {
      if (a != i && matrix[a][j] == k) {
        return false;
      }
    }
    for (var a = 0; a <= 8; a++) {
      if (a != j && matrix[i][a] == k) {
        return false;
      }
    }

    //check the 3 by 3 squares
    var y = Math.floor((i / 3)) * 3;
    var x = Math.floor((j / 3)) * 3;
    for (var a = 0; a < 3; a++) {
      for (var b = 0; b < 3; b++) {
        if (a != i && b != j && matrix[y + a][x + b] == k) {
          return false;
        }
      }
    }
    return true;
}

function test() {
  var own_matrix = [];
  for (var i = 0; i < 9*9; i++) {

    own_matrix[i] = (document.form[i].value);
    var matrix = [],
      j, k;

    for (j = 0, k = -1; j < own_matrix.length; j++) {
      if (j % 9 === 0) {
        k++;
        matrix[k] = [];
      }

      matrix[k].push(own_matrix[j]);
    }
  }
  solve(matrix);

  var solved = [];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {


      solved.push(matrix[i][j]);
      //make a one dimensional array from  solved matrix;
    }
  }

  for (var z = 0; z < solved.length; z++) {
    document.form[z].value = solved[z];
    //display the solved sudoku numbers 
  }

}

clickToSolveEle.addEventListener('click', function(event) {
  event.preventDefault()
  test()
})
