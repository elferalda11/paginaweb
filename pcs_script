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
    case 'calculadora.html':
      iframe.src = 'calculadora.html';
      break;
    case 'componentes.html':
      iframe.src = 'componentes.html';
      break;
    case 'guia.html':
      iframe.src = 'guia.html';
      break;
    default:
      // Fallback for any links not explicitly handled
      iframe.src = 'error.html'; // Or a default page
      console.warn('Unhandled link href:', linkHref);
  }
}