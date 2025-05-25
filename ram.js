// Calculadora de RAM
function calculateRam() {
  const usage = document.getElementById('ram-usage').value;
  const recommendation = document.getElementById('ram-recommendation');
  
  let ram, note;
  
  switch(usage) {
    case "basic":
      ram = "8GB";
      note = "Suficiente para navegación web y aplicaciones de oficina";
      break;
    case "gaming":
      ram = "16GB";
      note = "Ideal para la mayoría de juegos actuales";
      break;
    case "video":
      ram = "32GB";
      note = "Recomendado para edición de video 1080p/4K";
      break;
    case "3d":
      ram = "64GB+";
      note = "Necesario para modelado 3D y renders complejos";
      break;
  }
  
  recommendation.innerHTML = `
    <p><strong>Recomendación:</strong> ${ram}</p>
    <p>${note}</p>
  `;
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  calculateRam();
});