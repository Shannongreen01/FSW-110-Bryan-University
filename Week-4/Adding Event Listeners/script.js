// base square styling
var colorBox = document.createElement("div")
colorBox.style.borderStyle = "solid";
colorBox.style.marginTop =  '150px'
colorBox.style.height = '250px'
colorBox.style.width = '250px'
colorBox.style.color = 'white'
document.body.append(colorBox);


//mouse actions
colorBox.addEventListener("mouseover", function() {
colorBox.style.background = "green" 
});

colorBox.addEventListener("mousedown", function() {
colorBox.style.background = "yellow" 
});

colorBox.addEventListener("mouseup", function() {
colorBox.style.background = "blue" 
});

colorBox.addEventListener("dblclick", function() {
colorBox.style.background = "red" 
});

document.body.addEventListener("wheel", function() {
colorBox.style.background = "purple" 
});

// onload option
document.body.addEventListener("onload", onload = function() {
colorBox.style.background = "black" 
});

//key push functions
document.addEventListener("keydown", function(event) {
    var x = event.key;
    if (x === "g") {
        colorBox.style.background = "green"
    }
    else if (x === "o") {
        colorBox.style.background = "orange"
    }
    else if (x === "p") {
        colorBox.style.background = "purple"
    }
    else if (x === "w") {
        colorBox.style.background = "white"
    }
    else if (x === "B") {
        colorBox.style.background = "black" // Had to make blacks action key Uppercase becouse of blue
    }
    else if (x === "b") {
        colorBox.style.background = "blue"
    }
    else if (x === "y") {
        colorBox.style.background = "yellow"
    }
    else if (x === "r") {
        colorBox.style.background = "red"
    }
});
