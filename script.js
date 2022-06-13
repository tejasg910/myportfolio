console.log('this filre');
document.querySelector('.cross').style.display = 'none';

document.querySelector('.ham').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if ( document.querySelector('.sidebar').classList.contains('sidebargo')) {
    document.querySelector('.ham').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none';

    }
    else{
    document.querySelector('.ham').style.display = 'none';
    setTimeout(() => {
      
      document.querySelector('.cross').style.display = 'inline';
    }, 300);


    }



})

document.querySelector('.cross').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    document.querySelector('.cross').style.display = 'none';
    document.querySelector('.ham').style.display = 'inline';
    

})

var i = 0;
var txt = 'I am a developer, I love to drink coffie and Watching videos, I live inHyderabad and I will happy to visit Delhi';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("moreaboutid").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

window.addEventListener('load', ()=>{
    typeWriter();
})