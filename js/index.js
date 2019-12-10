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
addEventListener('wheel', (event) =>{
    alert('It must be nice to have a mouse-wheel...');
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

const buttonClick = document.querySelectorAll('.btn');
for (let i = 0; i < buttonClick.length; i++) {
    var buttonArr = buttonClick[i];
    buttonArr.addEventListener('click', (event)=>{
        event.target.style.backgroundColor = 'pink';
    })
}

const rotateImg = document.getElementsByTagName('img');

// resizeImg.forEach((resizeImg, i)=>{
//     window.addEventListener('resize',(event)=>{
//         event.target.style.transform = 'rotate(180deg)'
//     })
// });

for (var i = 0; i < rotateImg.length; i++){
    var imgArr = rotateImg[i];
    window.addEventListener('resize', (event) =>{
        imgArr.style.transform = 'rotate(180deg)'
    })
}

const footBar = document.querySelector('.footer');

const scrollThing = addEventListener('scroll',(event)=>{
        footBar.style.backgroundColor = 'pink'
    })
;
