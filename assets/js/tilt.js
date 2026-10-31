/**
 * ===================================================================
 * 3D TILT PHYSICS & HOLOGRAPHIC GLARE CONTROLLER
 * Smooth 3D card tilt with mouse-tracking specular highlights
 * ===================================================================
 */

export function init3DTilt() {
  const cards = document.querySelectorAll('.glass-panel, .tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      // Limit max tilt angle to 8 degrees for clean agency feel
      const maxAngle = 8;
      const rotateX = -deltaY * maxAngle;
      const rotateY = deltaX * maxAngle;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px)`;
      
      // Update holographic glare position
      const glare = card.querySelector('.hologram-glare');
      if (glare) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle 180px at ${percentX}% ${percentY}%, rgba(0, 212, 255, 0.18), transparent 70%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      const glare = card.querySelector('.hologram-glare');
      if (glare) {
        glare.style.background = 'transparent';
      }
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease-out';
    });
  });
}
