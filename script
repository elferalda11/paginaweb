function setActiveLink(clickedLink) {
  // Obtine los links del menu de navegacion
  const navLinks = document.querySelectorAll('.main-nav a');

  // Elimina la clase active de todos
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Lo añade al que se le ha hecho clic
  clickedLink.classList.add('active');
  // Cambiar el link del iframe

  // Obtener el iframe por el nombre contenido-frame
  const iframe = document.getElementsByName('contenido-frame')[0]; // [0] because getElementsByName returns a collection

  // Obtener el href del link clickeado
  const linkHref = clickedLink.getAttribute('id');

  switch (linkHref) {
    case 'inicio.html':
      iframe.src = 'inicio.html';
      break;
    case 'sobre.html':
      iframe.src = 'sobre.html';
      break;
    case 'componentes.html': // Note: This matches your HTML for "Componentes"
      iframe.src = 'componentes.html';
      break;
    case 'faq.html':
      iframe.src = 'faq.html';
      break;
    case 'contacto.html':
      iframe.src = 'contacto.html';
      break;
    default:
      // Fallback for any links not explicitly handled
      iframe.src = 'error.html'; // Or a default page
      console.warn('Unhandled link href:', linkHref);
  }
}