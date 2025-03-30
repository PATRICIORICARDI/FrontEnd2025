// Mapeo de sonidos: cada letra se asocia a un archivo de sonido en la misma carpeta
const soundMapping = {
  A: "./_boom.wav",
  B: "./_clap.wav",
  C: "./_hihat.wav",
  D: "./_kick.wav",
  E: "./_openhat.wav",
  F: "./_ride.wav",
  G: "./_snare.wav",
  H: "./_tink.wav",
  I: "./_tom.wav",
};

// Selecciona todas las teclas
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    // Quita la clase 'selected' de todas las teclas
    keys.forEach((k) => k.classList.remove("selected"));
    // Añade 'selected' únicamente a la tecla clickeada
    key.classList.add("selected");

    // Reproduce el sonido asignado
    playSound(key.dataset.key);
  });
});

function playSound(letter) {
  // Obtén la ruta del archivo de sonido correspondiente a la letra
  const filePath = soundMapping[letter];
  if (filePath) {
    const audio = new Audio(filePath);
    audio.play();
  } else {
    console.warn(`No se encontró sonido para la tecla: ${letter}`);
  }
}
