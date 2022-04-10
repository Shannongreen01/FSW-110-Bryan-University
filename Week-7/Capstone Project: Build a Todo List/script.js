var form= document.getElementById("myForm");
var input1= form.elements["name"];
var input2= form.elements["email"];
var input3= form.elements["phone"];
var input4= form.elements["address"];
var input5= form.elements["issue"];
var myList= document.getElementById("myList");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var listItem= document.createElement("h3");
    var listName= document.createElement("h3");
    var listEmail= document.createElement("h3");
    var listPhone= document.createElement("h3");
    var listAddress= document.createElement("h3");
    var listIssue= document.createElement("h3");
    var clearButton= document.createElement("button"); 
    listName.textContent= input1.value;
    listEmail.textContent= input2.value;
    listPhone.textContent= input3.value;
    listAddress.textContent= input4.value;
    listIssue.textContent= input5.value;
    clearButton.textContent= "Cancel";
    myList.appendChild(listItem);
    listItem.appendChild(listName);
    listItem.appendChild(listEmail);
    listItem.appendChild(listPhone);
    listItem.appendChild(listAddress);
    listItem.appendChild(listIssue);
    listItem.appendChild(clearButton);

    // refresh input boxes upon submission
    input1.value= "";
    input2.value= "";
    input3.value= "";

    // remove list item after button click
    clearButton.addEventListener("click", function(){
        clearButton.parentNode.remove();    
    });

});