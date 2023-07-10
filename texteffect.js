const text=document.querySelector('.text');
const input=document.querySelector('.speed');


let speed=input.value;


const anime="My name is shahbaz khan,i am not telling you";



input.addEventListener('input',(e)=>{
  speed=e.target.value;
})



let index=0;


function writeText(){
  text.innerHTML=anime.slice(0,index);
  index++;
  if(index>anime.length){
    index=0;
  }

  setInterval(writeText,speed);
}


writeText();

