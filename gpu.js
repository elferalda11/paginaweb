// Selector de GPU
function recommendGPU(resolution) {
  const recommendation = document.getElementById('gpu-recommendation');
  let gpu, note;
  
  switch(resolution) {
    case "1080p":
      gpu = "NVIDIA RTX 3060 / AMD RX 6600";
      note = "Excelente rendimiento en 1080p Ultra a más de 60 FPS";
      break;
    case "1440p":
      gpu = "NVIDIA RTX 3070 / AMD RX 6800";
      note = "Rendimiento óptimo para 1440p en ajustes altos";
      break;
    case "4k":
      gpu = "NVIDIA RTX 4080 / AMD RX 7900 XT";
      note = "Capacidad para 4K a 60+ FPS en la mayoría de juegos";
      break;
  }
  
  recommendation.innerHTML = `
    <h4>Para gaming en ${resolution}:</h4>
    <p><strong>Recomendación:</strong> ${gpu}</p>
    <p>${note}</p>
  `;
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  // Inicializaciones específicas de GPU
});