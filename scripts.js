// Script para regresar a la página anterior
document.getElementById("backButton").addEventListener("click", function() {
    window.history.back();
});

const img = document.getElementById('zoomable-image');
  let scale = 1; // Escala inicial
  const maxScale = 10; // Escala máxima
  const minScale = 1; // Escala mínima
  let posX = 0; // Posición horizontal inicial
  let posY = 0; // Posición vertical inicial
  let isDragging = false;
  let startX, startY;

  // Control del zoom con la rueda del ratón
  img.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomStep = 0.1;
    scale += e.deltaY < 0 ? zoomStep : -zoomStep;
    scale = Math.min(maxScale, Math.max(minScale, scale));
    img.style.transform = `scale(${scale}) translate(${posX}px, ${posY}px)`;
  });

  // Inicia el arrastre
  img.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    img.style.cursor = 'grabbing';
  });

  // Maneja el movimiento durante el arrastre
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;
    posX += dx / scale;
    posY += dy / scale;
    img.style.transform = `scale(${scale}) translate(${posX}px, ${posY}px)`;
  });

  // Termina el arrastre
  window.addEventListener('mouseup', () => {
    isDragging = false;
    img.style.cursor = 'grab';
  });
