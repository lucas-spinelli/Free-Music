const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');

audioPlayer.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = percentage + '%';
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = '&#9208;'; // Cambiar el Ã­cono a pausa
    } else {
        audioPlayer.pause();
        playButton.innerHTML = '&#9654;'; // Cambiar el Ã­cono a reproducir
    }
}

function playPrevious() {
    // LÃ³gica para reproducir la canciÃ³n anterior
}

function playNext() {
    // LÃ³gica para reproducir la siguiente canciÃ³n
  }
