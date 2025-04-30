document.addEventListener('DOMContentLoaded', function() {
          const loginForm = document.getElementById('loginForm');
          const messageDiv = document.getElementById('message');

          loginForm.addEventListener('submit', function(event) {
              event.preventDefault(); // Prevent form refresh

              const email = document.getElementById('username').value.trim();
              const password = document.getElementById('password').value.trim();

              if (email === 'admin@gmail.com' && password === '123') {
                  messageDiv.textContent = 'Jūs esat veiksmīgi pieslēdzies!';
                  messageDiv.style.color = 'green';
              } else {
                  messageDiv.textContent = 'Nepareizs e-pasts vai parole!';
                  messageDiv.style.color = 'red';
              }
          });
      });