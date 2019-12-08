// Your code goes here
const h1Fade = document.querySelector('h1');
h1Fade.addEventListener('mouseover', (event)=>{
    event.target.style.color = 'darkgrey';
  })
h1Fade.addEventListener('mouseout', (event)=>{
    event.target.style.color = 'black';
})