
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

