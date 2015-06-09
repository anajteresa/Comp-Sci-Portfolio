var character = document.getElementById("character");


document.onkeydown = function(e) {
    e = e || window.event
    switch (e.keyCode) {
        case 38:
            if(parseInt(character.style.top) > 0)character.style.top = parseInt(character.style.top) - 5 +"px";
            break; 
        case 40:
            character.style.top = parseInt(character.style.top) + 5 +"px";
            break;
        case 37:
            character.style.left = parseInt(character.style.left) - 5 +"px";
            break;
        case 39:
            character.style.left = parseInt(character.style.left) + 5 +"px";
            break;
    }
}