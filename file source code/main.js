window.onload = () => {

let minutes = 00;    
let seconds = 00;
let tens = 00;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const mainminutes = document.querySelector("#mianminutes");
const mainseconds = document.querySelector("#mainseconds");
const maintens = document.querySelector("#maintens");

const btnstop1 = document.querySelector(".btn-primary");

let Interval = 0;
var i;

function startTimer() {
    tens++;    
    if(tens > 9){
        maintens.innerHTML = tens;
    }

    if(tens >= 99){
        seconds++;
        mainseconds.innerHTML = "0" + seconds;
        tens = 0;
    }

    if(seconds >= 60){
        minutes++;
        mainminutes.innerHTML = "0" + minutes;
        seconds = 0;}
}

startBtn.addEventListener('click', () => {
    clearInterval(Interval);    
    Interval = setInterval(startTimer, 10);
});

selesai1.addEventListener('click', () => {
    mp1.innerHTML=`${minutes}`;
    sp1.innerHTML=`${seconds}`;
    tp1.innerHTML=`${tens}`;
  });

selesai2.addEventListener('click', () => {
    mp2.innerHTML=`${minutes}`;
    sp2.innerHTML=`${seconds}`;
    tp2.innerHTML=`${tens}`;
  });

  selesai3.addEventListener('click', () => {
    mp3.innerHTML=`${minutes}`;
    sp3.innerHTML=`${seconds}`;
    tp3.innerHTML=`${tens}`;
  });

selesai4.addEventListener('click', () => {
    mp4.innerHTML=`${minutes}`;
    sp4.innerHTML=`${seconds}`;
    tp4.innerHTML=`${tens}`;
  });

  selesai5.addEventListener('click', () => {
    mp5.innerHTML=`${minutes}`;
    sp5.innerHTML=`${seconds}`;
    tp5.innerHTML=`${tens}`;
  });

selesai6.addEventListener('click', () => {
    mp6.innerHTML=`${minutes}`;
    sp6.innerHTML=`${seconds}`;
    tp6.innerHTML=`${tens}`;
  });

  selesai7.addEventListener('click', () => {
    mp7.innerHTML=`${minutes}`;
    sp7.innerHTML=`${seconds}`;
    tp7.innerHTML=`${tens}`;
  });

selesai8.addEventListener('click', () => {
    mp8.innerHTML=`${minutes}`;
    sp8.innerHTML=`${seconds}`;
    tp8.innerHTML=`${tens}`;
  });

resetBtn.addEventListener('click', () => {
    clearInterval(Interval);
    document.location.reload(true);
    
});

function clock() {
  var time = new Date(),
  hours = time.getHours(),     
  minutes = time.getMinutes(), 
  seconds = time.getSeconds();   
  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds); 
  function harold(standIn) {
  if (standIn < 10) {
  standIn = '0' + standIn
  }
   return standIn;
  }}
  setInterval(clock, 1000);
}


