console.log("page loaded...");

let requestSpan = document.querySelector("#requests");
let connectionSpan = document.querySelector("#connections");
let userName = document.querySelector("#username");


function accept(id){
    let element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function deny(id){
    let element = document.querySelector(id);
    element.remove
    requestSpan.innerText--;
}


function edit(){
    userName.innerText = "Dana Moe"
}








































// let requestSpan = document.querySelector("#requests");
// let connectionSpan = document.querySelector("#connections");
// let userName = document.querySelector("#username");

// function accept(id){
//     let element = document.querySelector(id);
//     element.remove();
//     requestSpan.innerText--;
//     connectionSpan.innerText++;

// }

// function ignore(id){
//     let element = document.querySelector(id);
//     element.remove();
//     requestSpan.innerText--;

// }


// function edit(){
//     userName.innerText = "Dane Moe"
// }










