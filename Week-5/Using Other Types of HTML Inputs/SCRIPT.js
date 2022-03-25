document.body.style.textAlign = "center";
document.body.style.border = "solid";
document.body.style.paddingTop= "1px";
document.body.style.paddingRight= "10px";
document.body.style.paddingBottom= "10px";
document.body.style.paddingLeft= "10px";

const div = document.querySelector('div');

div.style.height = '485px';
div.style.width = '200px';
div.style.border = '2px solid black';
div.style.marginTop= "7px";
div.style.paddingBottom= "2px";
div.style.marginLeft= "-2px";
div.style.marginRight= "-1px";
div.style.backgroundColor = 'orange';


window.addEventListener("load", function() {
    document.body.style.height = '520px';
    document.body.style.width = '200px';
  }, false);

var form = document.getElementById("formInfo");
var submitIt = document.getElementById("submit");

function newAlert() {

    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var radio1 = form.elements["radio1"].value;
    var option2 = form.elements["option2"].value;
    var option3 = [];

    if (form.elements["vegetarian"].checked) {
        option3.push(document.getElementById("vegetarian").value);
    }
    if (form.elements["dairyFree"].checked) {
        option3.push(document.getElementById("dairyFree").value);
    }
    if (form.elements["glutenFree"].checked) {
        option3.push(document.getElementById("glutenFree").value);
    }


    alert ("FirstName: " + firstName + "\nlastName: " + lastName + "\nage: " + age + "\nHave you ever shoped with us?: " + radio1 + "\nHow likely are you to recommend this product to a friend?: " + option2 + "\nDietary Restrictions?: " + option3);

    form.reset();
};



submitIt.addEventListener("click", newAlert);