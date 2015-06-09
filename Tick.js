    var keys = document.querySelectorAll('div.box');
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click',runGame);
}

var turnNum = 1;
function runGame() {
    if (turnNum % 2 === 0) {
        turnNum++;
            this.innerHTML = "O";
        }
    
    else {
        turnNum++;
        this.innerHTML = "X";
    }
    
    if (turnNum === 10) {
        alert("Cat's game");
    }


    // This is not neccisary anymore.
    /*function winCheck() {
    var sq1 = document.getElementById('box0');
    var sq2 = document.getElementById('box1');
    var sq3 = document.getElementById('box2');
    var sq4 = document.getElementById('box3');
    var sq5 = document.getElementById('box4');
    var sq6 = document.getElementById('box5');
    var sq7 = document.getElementById('box7');
    var sq8 = document.getElementById('box8');
    var sq9 = document.getElementById('box9');
    */

    if (keys[0].innerHTML === keys[1].innerHTML && keys[1].innerHTML === keys[2].innerHTML && key[0].innerHTML.length === 1) {
        alert("Someone wins");
    }
    else if(keys[3].innerHTML === keys[4].innerHTML && keys[4].innerHTML === keys[5].innerHTML && key[4].innerHTML.length === 1) {
        alert("Someone wins");
    }
    else if(keys[6].innerHTML === keys[7].innerHTML && keys[7].innerHTML === keys[8].innerHTML && key[7].innerHTML.length === 1 ){
        alert("Someone wins");
    }
    else if(keys[1].innerHTML === keys[2].innerHTML && keys[2].innerHTML === keys[3].innerHTML && key[2].innerHTML.length === 1){
        alert("Someone wins");
    }
    else if(keys[2].innerHTML === keys[3].innerHTML && keys[3].innerHTML === keys[4].innerHTML && key[3].innerHTML.length === 1){
        alert("Someone wins");
    }
}