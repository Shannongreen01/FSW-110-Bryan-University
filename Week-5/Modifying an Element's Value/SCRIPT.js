document.body.style.textAlign = "center";
document.body.style.border = "solid";
document.body.style.paddingTop= "1px";
document.body.style.paddingRight= "10px";
document.body.style.paddingBottom= "10px";
document.body.style.paddingLeft= "10px";

const div = document.querySelector('div');

div.style.height = '245px';
div.style.width = '200px';
div.style.border = '2px solid black';
div.style.marginTop= "7px";
div.style.paddingBottom= "2px";
div.style.marginLeft= "-2px";
div.style.marginRight= "-1px";
div.style.backgroundColor = 'orange';


window.addEventListener("load", function() {
    document.body.style.height = '258px';
    document.body.style.width = '200px';
  }, false);

var form = document.getElementById("formInfo");
var submitIt = document.getElementById("submit");

function newAlert() {

    var fullName = form.elements["fullName"].value;
    var email = form.elements["email"].value;
    var phone = form.elements["phone"].value;
    

    alert ("Full Name: " + fullName + "\nEmail: " + email + "\nPhone Number: " + phone);

    form.reset();
};



submitIt.addEventListener("click", newAlert);