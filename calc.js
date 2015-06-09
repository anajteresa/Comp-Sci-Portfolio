var button = document.getElementById("submitButton");

button.addEventListener("click", doMath);



function doMath() {
if  (document.getElementById("DropdownMenu1").value == "+"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) + parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

    }
else if  (document.getElementById("DropdownMenu1").value == "-"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) - parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;
}
else if  (document.getElementById("DropdownMenu1").value == "x"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) * parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;
}
else if  (document.getElementById("DropdownMenu1").value == "÷"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) / parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;
}
  
else if  (document.getElementById("DropdownMenu1").value == "%"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) % parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;
}

else if  (document.getElementById("DropdownMenu1").value == "^"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) ^ parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;
}






}