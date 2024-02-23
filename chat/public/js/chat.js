const form = document.querySelector('form');
const input = document.querySelector('#m');
const messages = document.querySelector('#messages');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    // Implement logic to send messages using Socket.IO or other method
    input.value = '';
  }
});
