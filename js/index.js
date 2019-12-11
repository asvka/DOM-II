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
addEventListener("keyup", function(event) {
    if (event.keyCode == 80)
      document.body.style.background = "pink";
  });

const navBar = document.querySelectorAll('a');
navBar.forEach(a =>{
    a.addEventListener('click', e =>{
        e.preventDefault();
    })
})

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

const loadScreen = addEventListener('load', ()=>{
    alert ('Welcome to FunBus!');
})

const divClick = document.querySelectorAll('div');
divClick.forEach(d => {
    d.addEventListener('click', e => {
        e.target.style.backgroundColor = 'pink';
        // e.preventDefault()
    })
    })

const buttonClick = document.querySelectorAll('.btn');
for (let i = 0; i < buttonClick.length; i++) {
    var buttonArr = buttonClick[i];
    buttonArr.addEventListener('click', e =>{
        e.target.style.backgroundColor = ['red', 'lightgreen', 'purple', 'orange'][Math.floor(Math.random() * 4)]
        event.stopPropagation();

})
}

const rotateImg = document.getElementsByTagName('img');
for (var i = 0; i < rotateImg.length; i++){
    var imgArr = rotateImg[i];
    window.addEventListener('resize', (event) =>{
        imgArr.style.transform = 'rotate(180deg)'
    })
}

const footBar = document.querySelector('.footer');

const scrollThing = addEventListener('scroll',(event)=>{
        footBar.style.backgroundColor = 'pink'
    });

// const selectThing = addEventListener('select', (event)=>{
//     event.target.style.backgroundcolor = 'pink'
// });

const images = document.querySelectorAll("img");
    images.forEach(image => {
    image.addEventListener('click', e => {
        e.target.style.border = '3px solid pink';
        // e.preventDefault()
    })
    })
