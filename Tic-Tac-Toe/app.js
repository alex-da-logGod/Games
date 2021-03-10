let boxes = document.querySelectorAll('.box')
let gameField = document.querySelector('.gamefield')
let modalMessage = document.querySelector('.modal-message')
let modal = document.querySelector('.modal')



let result = ''
let turn = 0


boxes.forEach((item) => {
    
    item.addEventListener('click', function(e) {
        turn % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O'
        turn++
        checkWin()
    },
     { once: true})
})

function checkWin() {

     let winCombos = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6] 
 ];
     for ( let i = 0; i < winCombos.length; i++) {
         if (boxes[winCombos[i][0]].innerHTML == 'X' && 
             boxes[winCombos[i][1]].innerHTML == 'X' && 
             boxes[winCombos[i][2]].innerHTML == 'X') {
 
         result = " X's "
             showResult(result)
         } 
         else if (boxes[winCombos[i][0]].innerHTML == 'O' && 
                 boxes[winCombos[i][1]].innerHTML == 'O' && 
                 boxes[winCombos[i][2]].innerHTML == 'O') {
             
         result = " O's "
             showResult(result)
         } 
     }
 }

 function showResult(winner) {
    modalMessage.innerHTML = `${winner} win`
    modal.style.display = 'block'
    gameField.style.display = 'none'
}