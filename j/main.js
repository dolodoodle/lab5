
const letsRumble = document.querySelector('.lets-rumble');
const smb = document.querySelector('.smb');
letsRumble.src = "a/lets-get-ready-to-rumble.mp3";
letsRumble.load();

letsRumble.volume = 0.5;

smb.volume = 0.5;


document.getElementById('stop').addEventListener('click', (e)=> {
    letsRumble.pause();
    letsRumble.currentTime = 0;
});


let play = document.getElementById("play");
let pause = document.getElementById("pause");
let fast = document.getElementById("fast");
let slow = document.getElementById("slow");

play.addEventListener('click', (e)=> {
    smb.play()
});
 
pause.addEventListener('click', (e)=> {
    smb.pause()
});

fast.addEventListener('click', (e)=> {
    smb.playbackRate = 2;
});

slow.addEventListener('click', (e)=> {
    smb.playbackRate = .5;
});