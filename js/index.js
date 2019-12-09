// Your code goes here
const h1Fade = document.querySelector('h1');
h1Fade.addEventListener('mouseover', (event)=>{
    event.target.style.color = 'darkgrey';
  })
h1Fade.addEventListener('mouseout', (event)=>{
    event.target.style.color = 'black';
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
    document.body.style.color = 'white'
})
