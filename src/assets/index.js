import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay()
]});

const playButton = document.querySelector('#playButton');
const muteButton = document.querySelector('#muteButton');
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();