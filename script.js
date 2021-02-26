let audio = document.getElementById('audio');
let audioD = Math.round(audio.duration);    
let playBtn = document.getElementById('playBtn');
let pauseBtn = document.getElementById('pauseBtn');
let progress = document.getElementById( "progress" );
let timer = document.getElementById( "timer" );
let fwrd15 = document.getElementById('fwrd15');
let bckrd15 = document.getElementById('bckrd15');
let bckrd = document.getElementById('bckrd');
let fwrd = document.getElementById('fwrd');
let loop = document.getElementById('loop');
let stop = document.getElementById('stop');
let counter = document.getElementById('counter');
let n = 1;
let n1= 0;
let sp = 0;


const playAudio = () =>{ progressLoop();
    audio.play();
    playBtn.classList.add('hide');pauseBtn.classList.remove('hide');
}

const pauseAudio = () =>{
    audio.pause();
    pauseBtn.classList.add('hide');playBtn.classList.remove('hide');
}

const fwrd15Btn = () => {audio.currentTime+=15}
const bckrd15Btn = () => {audio.currentTime-=15}

const bckrdBtn = () => {if(sp<20){audio.playbackRate += 0.1; counterAdd()}}
const fwrdBtn = () => {if(sp>-9){audio.playbackRate -= 0.1; counterMinus()}}


function counterAdd (){sp+=1;AttXn()}
function counterMinus (){sp-=1;AttXn()}

function AttXn () {
    counter.classList.remove('hide');
     if(sp>0){counter.innerText = '>> x'+sp}
        else{counter.innerText = '<< x'+Math.abs(sp)};
        if(sp==0){counter.classList.add('hide')};}


const showVolume = () => {
if(n == 0){n=1;  volumeBar.classList.add('hide');}
    else {n=0; volumeBar.classList.remove('hide');}
}

const changeVolume = () =>{
    let SongVolume = (volumeBar.value/100) 
    audio.volume = SongVolume
    if (volumeBar.value == 0){volumeBtn.src ='./icons/songIcon/iconfinder_btn_Mute_4698913.png'}
    if (volumeBar.value >= 1 && SongVolume <= 25){volumeBtn.src ='./icons/songIcon/iconfinder_btn_Volume_25_4698928.png'}
    if (volumeBar.value >= 26 && SongVolume <= 50){volumeBtn.src ='./icons/songIcon/iconfinder_btn_Volume_50_4698929.png'}
    if (volumeBar.value >= 51 && SongVolume <= 85){volumeBtn.src ='./icons/songIcon/iconfinder_btn_Volume_75_4698931.png'}
    if (volumeBar.value >= 86 && SongVolume <= 100){volumeBtn.src ='./icons/songIcon/iconfinder_btn_Volume_100_4698930.png'}
}

const stopBtn = () => {
    audio.currentTime = 0;
    audio.pause(); pauseBtn.classList.add('hide');playBtn.classList.remove('hide');
    sp = 0; counter.classList.add('hide'); audio.playbackRate = 1;n1 = 0; 
    audio.removeAttribute('loop'); loop.classList.remove('loopActive')
}

const loopBtn = () => {
    if(n1 == 0){
        n1=1; audio.setAttribute('loop',''); loop.classList.add('loopActive')}
        else {n1 = 0; audio.removeAttribute('loop'); loop.classList.remove('loopActive')}
}

function progressLoop() {
    setInterval(function () {
      progress.value = (Math.round((audio.currentTime / audio.duration) * 100));
      timer.innerHTML = convertTime(audio.currentTime) + " / " + convertTime(audioD);
    });
  }

 

    function convertTime(x){    
      let mins = Math.floor(x / 60);
      let secs = Math.floor(x % 60);
      if (mins < 10) {mins = '0' + String(mins);}
      if (secs < 10) {secs = '0' + String(secs);}
  
      return mins + ':' + secs;
  }
