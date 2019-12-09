// Your code goes here
const h1Fade = document.querySelector('h1');
h1Fade.addEventListener('mouseover', (event)=>{
    event.target.style.color = 'black';
  })
h1Fade.addEventListener('mouseout', (event)=>{
    event.target.style.color = 'darkgrey';
})
addEventListener('keydown', (event) => {
    if (event.keyCode == 55)
      alert('My favorite number!')
  })
//   addEventListener("keyup", function(event) {
//     if (event.keyCode == 68)
//       document.body.style.background = "";
//   });
// addEventListener('wheel', (event) =>{
//     event.preventDefault();
// })

// const headerBar = document.getElementsByTagName('header');
const darkMode = addEventListener('touchstart', (event) =>{
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'darkgrey'
    h1Fade.style.color = 'black'
})

const zoomText = document.querySelector('h2');
zoomText.addEventListener('dblclick', (event) =>{
    event.target.style.fontSize = '5rem';
});

const loadScreen = document.querySelectorAll('p');
    alert ('Welcome to FunBus!');

const zoomImgs = document.querySelector('.intro');
zoomImgs.addEventListener("click", (event) => {
        // event.target.style.width = '125%'
        event.target.style.borderBottomWidth = '10px'
    });
