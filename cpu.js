// Comparador de CPUs
function compareCPUs() {
  const cpu1 = document.getElementById('cpu1').value;
  const cpu2 = document.getElementById('cpu2').value;
  const result = document.getElementById('cpu-comparison-result');
  
  if (!cpu1 || !cpu2) return;
  
  // Datos de ejemplo
  const cpuData = {
    "i5-13600K": { cores: 14, threads: 20, freq: "3.5-5.1GHz", price: "€320" },
    "r7-5800X": { cores: 8, threads: 16, freq: "3.8-4.7GHz", price: "€280" },
    "i9-13900K": { cores: 24, threads: 32, freq: "3.0-5.8GHz", price: "€650" },
    "r9-7950X": { cores: 16, threads: 32, freq: "4.5-5.7GHz", price: "€700" }
  };
  
  const cpu1Data = cpuData[cpu1];
  const cpu2Data = cpuData[cpu2];
  
  result.innerHTML = `
    <table>
      <tr>
        <th>Especificación</th>
        <th>${cpu1}</th>
        <th>${cpu2}</th>
      </tr>
      <tr>
        <td>Núcleos/Hilos</td>
        <td>${cpu1Data.cores}/${cpu1Data.threads}</td>
        <td>${cpu2Data.cores}/${cpu2Data.threads}</td>
      </tr>
      <tr>
        <td>Frecuencia</td>
        <td>${cpu1Data.freq}</td>
        <td>${cpu2Data.freq}</td>
      </tr>
      <tr>
        <td>Precio estimado</td>
        <td>${cpu1Data.price}</td>
        <td>${cpu2Data.price}</td>
      </tr>
    </table>
  `;
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  // Inicializaciones específicas de CPU
});