
/*===========================create element===============================================

var p = document.createElement("p");

p.textContent ="hej";

var main = document.querySelector(".main");

main.appendChild(p);

*/

/*
var p = document.createElement("p");

p.textContent = "hej detta funkar";

var divText = document.querySelector("#no-text");

divText.appendChild(p);


var main = document.querySelector("main");

var remove = document.querySelectorAll(".remove-me");

for (var i =0; i<remove.length; i++){

    main.removeChild(remove[i]);
}

*/

function onClick(e){
    console.log(button.textContent);
}

var button = document.querySelector("button");
button.addEventListener("click", onClick);

function inputChange(i){
    button.textContent = input.value;
}

var input = document.querySelector("input");
input.addEventListener("input", inputChange)

