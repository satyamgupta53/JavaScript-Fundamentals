const mainBody = document.body;

/* Finding the HTML elements */
const box1 = document.getElementById('box-1');
const boxs = document.getElementsByClassName('box-card');
const divs = document.getElementsByTagName('div');
const random = document.querySelectorAll('.container .box-card') // returns a node list

const eventHandler = () => {
    console.log("I am getting used !");
}

/* Event Listener */
const box2 = document.getElementById('box-2');
box2.addEventListener('click', (event) => {
    console.log("Box 2 was clicked : ", event);
});