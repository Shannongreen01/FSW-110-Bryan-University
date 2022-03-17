
document.body.style.textAlign = "center";
document.body.style.border ="solid";
document.body.style.width = "25%";
document.body.style.height = "50%";
document.body.style.marginLeft = "25%"
document.body.style.Color = "gray";

let header = document.createElement("h1");
header.textContent = "My JavaScript Calculator";
header.style.fontSize = "40px";
header.style.padding = "5px";
header.style.color = "black";
document.body.appendChild(header);

// Add
let addition = document.createElement("h2");
addition.textContent = "Addition";
document.body.appendChild(addition);

let div = document.createElement("div");
div.setAttribute("id", "additionarea");
document.body.appendChild(div);


let Box1 = document.createElement("input");
Box1.setAttribute("type", "text");
Box1.setAttribute("id", "answer1");
Box1.style.background = "gray";
Box1.style.border = "solid";
Box1.style.padding = "5px";
Box1.style.fontSize = "18px";
Box1.style.marginBottom = "30px";
Box1.style.width = "70px";
document.getElementById("additionarea").appendChild(Box1);

let add = document.createElement("span");
add.textContent = "+";
add.style.fontSize = "25px";
add.style.padding = "25px";
add.style.color = "black";
document.getElementById("additionarea").appendChild(add);

let Box2 = document.createElement("input");
Box2.setAttribute("type", "text");
Box2.setAttribute("id", "answer2");
Box2.style.background = "gray";
Box2.style.border = "solid";
Box2.style.padding = "5px";
Box2.style.fontSize = "18px";
Box2.style.marginBottom = "30px";
Box2.style.width = "70px";
document.getElementById("additionarea").appendChild(Box2);

let equal1 = document.createElement("button");
equal1.textContent = "=";
equal1.style.fontSize = "20px";
equal1.style.border = "solid";
equal1.style.color = "red";
equal1.style.marginLeft = "15px";
equal1.style.marginRight = "20px";
document.getElementById("additionarea").appendChild(equal1);

equal1.addEventListener("click", function() {

let num1 = document.getElementById("answer1").value;
let num2 = document.getElementById("answer2").value;
let eql1 = Number(num1) + Number(num2);
let response1 = document.createElement("span");
response1.textContent = eql1;
response1.style.fontSize = "24px";
response1.style.marginLeft = "15px";
document.getElementById("additionarea").appendChild(response1);
});


// subtraction
let subtraction = document.createElement("h2");
subtraction.textContent = "Subtraction";
document.body.appendChild(subtraction);

let div2 = document.createElement("div");
div2.setAttribute("id", "Subtractionarea");
document.body.appendChild(div2);


let Box3 = document.createElement("input");
Box3.setAttribute("type", "text");
Box3.setAttribute("id", "answer3");
Box3.style.background = "gray";
Box3.style.border = "solid";
Box3.style.padding = "5px";
Box3.style.fontSize = "18px";
Box3.style.marginBottom = "30px";
Box3.style.width = "70px";
document.getElementById("Subtractionarea").appendChild(Box3);


let sub = document.createElement("span");
sub.textContent = "-";
sub.style.fontSize = "25px";
sub.style.padding = "25px";
sub.style.color = "black";
document.getElementById("Subtractionarea").appendChild(sub);

let Box4 = document.createElement("input");
Box4.setAttribute("type", "text");
Box4.setAttribute("id", "answer4");
Box4.style.background = "gray";
Box4.style.border = "solid";
Box4.style.padding = "5px";
Box4.style.fontSize = "18px";
Box4.style.marginBottom = "30px";
Box4.style.width = "70px";
document.getElementById("Subtractionarea").appendChild(Box4);

let equal2 = document.createElement("button");
equal2.textContent = "=";
equal2.style.fontSize = "20px";
equal2.style.border = "solid";
equal2.style.marginLeft = "15px";
equal2.style.marginRight = "20px";
equal2.style.color = "blue";
document.getElementById("Subtractionarea").appendChild(equal2);

equal2.addEventListener("click", function() {

let num3 = document.getElementById("answer3").value;
let num4 = document.getElementById("answer4").value;
let eql2 = Number(num3) - Number(num4);
let response2 = document.createElement("span");
response2.textContent = eql2;
response2.style.fontSize = "24px";
response2.style.marginLeft = "15px";
document.getElementById("Subtractionarea").appendChild(response2);
});

//Multiply

let Multiplication = document.createElement("h2");
Multiplication.textContent = "Multiplication";
document.body.appendChild(Multiplication);

let div3 = document.createElement("div");
div3.setAttribute("id", "Multiplicationarea");
document.body.appendChild(div3);


let Box5 = document.createElement("input");
Box5.setAttribute("type", "text");
Box5.setAttribute("id", "answer5");
Box5.style.background = "gray";
Box5.style.border = "solid";
Box5.style.padding = "5px";
Box5.style.fontSize = "18px";
Box5.style.marginBottom = "30px";
Box5.style.width = "70px";
document.getElementById("Multiplicationarea").appendChild(Box5);

let mul = document.createElement("span");
mul.textContent = "*";
mul.style.fontSize = "25px";
mul.style.padding = "25px";
mul.style.color = "black";
document.getElementById("Multiplicationarea").appendChild(mul);

let Box6 = document.createElement("input");
Box6.setAttribute("type", "text");
Box6.setAttribute("id", "answer6");
Box6.style.background = "gray";
Box6.style.border = "solid";
Box6.style.padding = "5px";
Box6.style.fontSize = "18px";
Box6.style.marginBottom = "30px";
Box6.style.width = "70px";
document.getElementById("Multiplicationarea").appendChild(Box6);

let equal3 = document.createElement("button");
equal3.textContent = "=";
equal3.style.fontSize = "20px";
equal3.style.border = "solid";
equal3.style.marginLeft = "15px";
equal3.style.marginRight = "20px";
equal3.style.color = "purple";
document.getElementById("Multiplicationarea").appendChild(equal3);

equal3.addEventListener("click", function() {

let num5 = document.getElementById("answer5").value;
let num6 = document.getElementById("answer6").value;
let eql3 = Number(num5) * Number(num6);
let response3 = document.createElement("span");
response3.textContent = eql3;
response3.style.fontSize = "24px";
response3.style.marginLeft = "15px";
document.getElementById("Multiplicationarea").appendChild(response3);
});

//Division

let Division = document.createElement("h2");
Division.textContent = "Division";
document.body.appendChild(Division);

let div4 = document.createElement("div");
div4.setAttribute("id", "Divisionarea");
document.body.appendChild(div4);


let Box7 = document.createElement("input");
Box7.setAttribute("type", "text");
Box7.setAttribute("id", "answer7");
Box7.style.background = "gray";
Box7.style.border = "solid";
Box7.style.padding = "5px";
Box7.style.fontSize = "18px";
Box7.style.marginBottom = "30px";
Box7.style.width = "70px";
document.getElementById("Divisionarea").appendChild(Box7);

let divis = document.createElement("span");
divis.textContent = "/";
divis.style.fontSize = "25px";
divis.style.padding = "25px";
divis.style.color = "black";
document.getElementById("Divisionarea").appendChild(divis);

let Box8 = document.createElement("input");
Box8.setAttribute("type", "text");
Box8.setAttribute("id", "answer8");
Box8.style.background = "gray";
Box8.style.border = "solid";
Box8.style.padding = "5px";
Box8.style.fontSize = "18px";
Box8.style.marginBottom = "30px";
Box8.style.width = "70px";
document.getElementById("Divisionarea").appendChild(Box8);

let equal4 = document.createElement("button");
equal4.textContent = "=";
equal4.style.fontSize = "20px";
equal4.style.border = "solid";
equal4.style.marginLeft = "15px";
equal4.style.marginRight = "20px";
equal4.style.color = "green";
document.getElementById("Divisionarea").appendChild(equal4);

equal4.addEventListener("click", function() {

let num7 = document.getElementById("answer7").value;
let num8 = document.getElementById("answer8").value;
let eql4 = Number(num7) / Number(num8);
let response4 = document.createElement("span");
response4.textContent = eql4;
response4.style.fontSize = "24px";
response4.style.marginLeft = "15px";
document.getElementById("Divisionarea").appendChild(response4);
});
