const playPauseButton = document.getElementById('play-pausa');
const progressBar = document.getElementById('progreso');
const audioPlayer = document.getElementById('reproductor-audio');
let isPlaying = false;

// AÃ±adir mÃ¡s canciones segÃºn sea necesario
let canciones = [
  { nombre: 'CanciÃ³n 1', artista: 'Artista 1', archivo: 'cancion1.mp3' },
  { nombre: 'CanciÃ³n 2', artista: 'Artista 2', archivo: 'cancion2.mp3' },
  // Agregar mÃ¡s canciones
];

let cancionActualIndex = 0;

playPauseButton.addEventListener('click', togglePlayPause);

function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseButton.innerHTML = '&#9654;';
    isPlaying = false;
  } else {
    reproducirCancionActual();
  }
}

function reproducirCancionActual() {
  audioPlayer.src = canciones[cancionActualIndex].archivo;
  audioPlayer.play();
  playPauseButton.innerHTML = '&#9646;&#9646;';
  isPlaying = true;
  actualizarInformacionCancion();
}

function reproducirCancionAnterior() {
  cancionActualIndex = (cancionActualIndex - 1 + canciones.length) % canciones.length;
  reproducirCancionActual();
}

function reproducirCancionSiguiente() {
  cancionActualIndex = (cancionActualIndex + 1) % canciones.length;
  reproducirCancionActual();
}

function ajustarProgreso(event) {
  const barraRect = progressBar.getBoundingClientRect();
  const porcentaje = (event.clientX - barraRect.left) / barraRect.width;
  audioPlayer.currentTime = audioPlayer.duration * porcentaje;
}

function actualizarBarraProgreso() {
  const porcentaje = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = porcentaje + '%';
}

function actualizarInformacionCancion() {
  document.getElementById('nombre-cancion').textContent = canciones[cancionActualIndex].nombre;
  document.getElementById('artista').textContent = canciones[cancionActualIndex].artista;
}
