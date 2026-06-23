// dev1 - Validación formulario
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (!name || !email || !message) {
    alert('Por favor, completa todos los campos.');
    return;
  }
  const response = await fetch('/send-email', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `name=${name}&email=${email}&message=${message}`
  });
  const result = await response.json();
  alert(result.message);
});

// dev2 - Carrusel
let currentIndex = 0;
const images = document.querySelectorAll('#carousel img');

document.getElementById('next').addEventListener('click', () => {
  images[currentIndex].classList.add('hidden');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.remove('hidden');
});

document.getElementById('prev').addEventListener('click', () => {
  images[currentIndex].classList.add('hidden');
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.remove('hidden');
});