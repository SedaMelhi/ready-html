let text = 'Глава II. Лес багов.';
const typingText = document.getElementById('typing-text');
let check = true;
let index = 0;
function typeWriter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80); // Задержка между появлением символов (в миллисекундах)
  } else if (check) {
    check = false;
    let arrow = document.querySelector('.arrow');
    arrow.style.opacity = '1';
  }
}
typeWriter();
