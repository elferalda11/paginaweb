<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Guía de Construcción de PCs</title>
    <link rel="stylesheet" href="estilos.css">
    <script src="pcs_script.js"></script>
  </head>
  <body>
<div class="flexible-container">
  <img src="causatechlogo.png" alt="Logo de Causa Tech" class="logo-img">
  <h1 class="site-title">Causa Tech — Guía de Construcción de PCs</h1>
</div>
    <nav class="main-nav">
      <ul>
        <li><a id="inicio.html" class="active" onclick="setActiveLink(this)">Inicio</a></li>
        <li><a id="calculadora.html" onclick="setActiveLink(this)">Calculadora</a></li>
        <li><a id="componentes.html" onclick="setActiveLink(this)">Componentes</a></li>
        <li><a id="guia.html" onclick="setActiveLink(this)">Guia paso a paso</a></li>
      </ul>
    </nav>
    <main>
      <iframe src="inicio.html" name="contenido-frame" style="width:100%; height:80vh; border:none;"></iframe>
    </main>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>CausaTech</h3>
          <p>Tu guía definitiva para construir y optimizar tu PC.</p>
          <div class="social-icons">
            <a href="#" class="social-icon"><img src="icons/facebook.svg" alt="Facebook"></a>
            <a href="#" class="social-icon"><img src="icons/twitter.svg" alt="Twitter"></a>
            <a href="#" class="social-icon"><img src="icons/instagram.svg" alt="Instagram"></a>
            <a href="#" class="social-icon"><img src="icons/youtube.svg" alt="YouTube"></a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Contacto</h3>
          <table class="contact-info">
            <tr>
              <th><i class="icon">📧</i> info@causatech.com</th>
              <th><i class="icon">📱</i> +34 123 456 789</th>
              <th><i class="icon">📍</i> Madrid, España</th>
            </tr>
          </table>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2023 CausaTech. Todos los derechos reservados. | <a href="privacidad.html">Política de Privacidad</a> | <a href="terminos.html">Términos de Servicio</a></p>
      </div>
    </footer>
  </body>
</html>
