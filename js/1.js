let text = 'Глава I. Тёмная тема. Становление тру кодера.';
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
    arrow.addEventListener('click', () => {
      document.querySelector('.first').classList.add('run');
      setTimeout(() => (document.querySelector('.first').style.display = 'none'), 1000);
      setTimeout(
        () =>
          (document.querySelector('.kvest').innerHTML = ` <div class="two two_show">
  <h2>Ищи подсказку во тьме. Действуй быстрее! <br /></h2>
  <p>
    Как программист ищущий свой небольшой баг в тысячах строк кода, так и ты проявила свою
    зоркость кошки, найдя первую подсказку в этой всепоглощающей тьме! А теперь нажми
    ctrl+A или с телефона "выделить всё" (если ещё не выделил) и реши спрятанный ребус.
  </p>
  <ul>
    <li>РЕБУС: </li>
    <li>- https://sedamelhi.github.io/ready-html/</li>
    <li>- ON: s</li>
    <li>- PO: a</li>
    <li>- IS: l</li>
    <li>- I: ey</li>
    <li>- EX: l</li>
    <li>- V: v</li>
  </ul>
</div>`),
        1200,
      );
    });
  }
}

typeWriter();
