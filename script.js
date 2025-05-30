
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('form');
  const popup = document.getElementById('popupMsg');
  const popupContent = document.querySelector('.popup-content');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const button = document.getElementById('submitBtn');
  const bgMusic = document.getElementById('bg-music');
  const scrollSound = new Audio('scroll-open.mp3');

  setTimeout(() => {
    bgMusic.play().catch(e => {
      console.log("Autoplay blocked, waiting for user interaction");
      document.addEventListener("click", () => {
        bgMusic.play();
      }, { once: true });
    });
  }, 3000);

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const allChecked = [...checkboxes].every(c => c.checked);
      button.disabled = !allChecked;
      button.classList.toggle('enabled', allChecked);
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    popup.classList.add('active');
    popupContent.classList.remove('hidden');
    bgMusic.volume = 0.1;
    scrollSound.play();
  });

  document.querySelector('.popup .close').addEventListener('click', function() {
    popup.classList.remove('active');
    bgMusic.volume = 1;
  });
});
