
const toggleButton = document.getElementById('toggleButton');
const status = document.getElementById('status');
const body = document.getElementById('body');
const bulb = document.getElementById('bulb');

toggleButton.addEventListener('click', () => {
  if (bulb.classList.contains('off')) {
    bulb.classList.remove('off');
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Turn Off';
    status.textContent = 'Status: On';
  } else {
    bulb.classList.add('off');
    body.classList.remove('dark-mode');
    toggleButton.textContent = 'Turn On';
    status.textContent = 'Status: Off';
  }
});
