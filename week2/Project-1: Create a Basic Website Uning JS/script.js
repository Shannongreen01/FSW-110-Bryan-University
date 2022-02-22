
//Begining of my navbar with links
const navbar = document.createElement("navbar")
document.body.append(navbar)

const a = document.createElement("a")
const b = document.createElement("a")
const c = document.createElement("a")

a.textContent = "Google  "
b.textContent = "Yahoo  "
c.textContent = "Bing"

a.id = "google"
b.id = "yahoo"
c.id = 'bing'

google = a.href = "https://www.google.com"
yahoo = b.href = "https://www.yahoo.com"
bing = c.href = "https://www.bing.com"

navbar.append(a)
navbar.append(b)
navbar.append(c)
//end of navbar with links



//header
const header = document.createElement("H1");
header.innerText = "This is my header";
document.body.append(header);


//paragraph
const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.append(para);


// begining of my ordered list
var h2 = document.createElement("h2")
h2.textContent = "This is my list"
document.body.append(h2)

var ol = document.createElement("ol")
document.body.append(ol)

var li = document.createElement("li")
li.textContent = "Item "
ol.append(li)

var li = document.createElement("li")
li.textContent = "Item "
ol.append(li)

var li = document.createElement("li")
li.textContent = "Item "
ol.append(li)

