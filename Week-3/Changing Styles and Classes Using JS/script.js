// H2 list & Style:


var names = ["I", "Like", "Learning", "New", "Things"];

var i;

for (i = 0; i < names.length; i++) {
    var h2 = document.createElement("h2")
    
    h2.textContent = names[i]
    h2.style.fontSize = "20px";
    h2.style.fontWeight = "lighter";
    h2.style.fontFamily = "sans-serif"
    h2.style.color = "cornflowerblue";
    h2.classList.add("border");
    document.body.append(h2)

}