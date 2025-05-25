// Verificador de compatibilidad
function checkCompatibility() {
  const cpuType = document.getElementById('selected-cpu').value;
  const result = document.getElementById('compatibility-result');
  
  if (cpuType === "intel") {
    result.innerHTML = "Recomendamos placas base con socket LGA1700 para Intel 12ª/13ª generación";
    result.style.color = "#3498db";
  } else {
    result.innerHTML = "Recomendamos placas base con socket AM5 para AMD Ryzen 7000";
    result.style.color = "#e74c3c";
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  // Inicializaciones específicas de placa base
});