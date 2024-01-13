let ct1=0;
let ct2=0;
let car1=document.getElementById('car1');
let car2=document.getElementById('car2');
let left=document.getElementById('l');
let right=document.getElementById('r');
let end=document.getElementById('end');
let score=document.getElementById("score");
let random;
let mainscore=0;
let speedtime=750;
let crashaudio= new Audio();
crashaudio.src="crash.mp3";
let runaudio= new Audio();
runaudio.src="run.mp3";
car1.addEventListener("animationiteration",()=>{
   random=Math.floor(Math.random()*2);
  mainscore++;
  score.innerText=mainscore;
 
  if(random==0)
  {
   ct1=0;
   car1.style.left="22.5vw";
   car1.src="car1.png";
  }
 else if(random==1)
  {
   car1.style.left="47vw";
   ct1=1;
   car1.src="car3.png";
  }
  if (mainscore>30) {
 
  car1.style.animationDuration="1s";
  speedtime=500;
  }
else if(mainscore>15){
    
  car1.style.animationDuration="1.25s";
  speedtime=650;
  }
   runaudio.play();

  setTimeout(stop,speedtime);

})
end.addEventListener("click",restart);
left.addEventListener("click",()=>{
  car2.style.left="24vw";
  ct2=0;
})
right.addEventListener("click",()=>{
  car2.style.left="48vw";
  ct2=1;
  
})



function stop() {
console.log("break");
 if(ct1==ct2) {
 crashaudio.play();
 runaudio.pause();
 end.style.display="block";
 car1.style.display="none";
 car2.style.display="none";
 
 }
  else{
    clearTimeout(stop);
  }
}
function restart() {
 end.style.display="none";
 car1.style.display="block";
 car2.style.display="block";
 mainscore=0;
 score.innerText=mainscore;
 car1.style.animationDuration="1.5s";
 speedtime=750;
}