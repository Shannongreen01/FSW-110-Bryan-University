
document.getElementById('Welcome').innerText = 'Welcome to my JS site';
document.getElementById('created').innerText = 'All of this was created with Javascript';

const node = document.createElement('li');
const textnode = document.createTextNode('This');
node.appendChild(textnode);
document.getElementById('list').appendChild(node)

const node2 = document.createElement('li');
const textnode2 = document.createTextNode('is');
node2.appendChild(textnode2);
document.getElementById('list').appendChild(node2)

const node3 = document.createElement('li');
const textnode3 = document.createTextNode('fun');
node3.appendChild(textnode3);
document.getElementById('list').appendChild(node3)