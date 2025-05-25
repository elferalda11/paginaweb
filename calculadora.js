// Calculadora de presupuesto
function calculateBuild() {
  const budget = parseInt(document.getElementById('budget').value);
  const recommendation = document.getElementById('recommendation');
  
  let cpu, gpu, ram, storage;
  
  if (budget < 500) {
    cpu = "AMD Ryzen 5 5600G (con gráficos integrados)";
    gpu = "Integrada";
    ram = "16GB DDR4 3200MHz";
    storage = "512GB SSD";
  } else if (budget < 800) {
    cpu = "Intel Core i5-12400F";
    gpu = "NVIDIA RTX 3060 / AMD RX 6600";
    ram = "16GB DDR4 3200MHz";
    storage = "1TB NVMe SSD";
  } else if (budget < 1200) {
    cpu = "AMD Ryzen 7 5800X";
    gpu = "NVIDIA RTX 3070 / AMD RX 6800";
    ram = "32GB DDR4 3600MHz";
    storage = "1TB NVMe SSD + 2TB HDD";
  } else {
    cpu = "Intel Core i7-13700K / AMD Ryzen 9 7900X";
    gpu = "NVIDIA RTX 4080 / AMD RX 7900 XT";
    ram = "32GB DDR5 6000MHz";
    storage = "2TB NVMe SSD Gen4";
  }
  
  recommendation.innerHTML = `
    <h4>Recomendación para €${budget}:</h4>
    <ul>
      <li><strong>CPU:</strong> ${cpu}</li>
      <li><strong>GPU:</strong> ${gpu}</li>
      <li><strong>RAM:</strong> ${ram}</li>
      <li><strong>Almacenamiento:</strong> ${storage}</li>
    </ul>
  `;
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  // Puedes añadir inicializaciones comunes aquí
});