window.addEventListener('load', () => {
  document.querySelector('.load').remove();
  document.querySelector('.content').classList.remove('hidden');
  window.addEventListener('scroll', (e) => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`); // Update method
  });
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
  });
  let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio');

  soundButton.addEventListener('click', (e) => {
    soundButton.classList.toggle('paused');
    audio.paused ? audio.play() : audio.pause();
  });

  window.onfocus = function () {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play();
  };

  window.onblur = function () {
    audio.pause();
  };
  const bags = document.querySelectorAll('.small');
  const texts = document.querySelectorAll('.opacity');
  let count = 0;
  bags.forEach((bag) =>
    bag.addEventListener('click', () => {
      count++;
      texts.forEach((text) => {
        text.innerHTML =
          count == 1
            ? 'Первый найден!'
            : count == 2
            ? 'Второй найден!'
            : count == 3
            ? 'Третий найден!'
            : '';
        text.classList.add('opacity_none');
      });
      if (count === 1) {
        soundButton.classList.toggle('paused');
        audio.paused ? audio.play() : audio.pause();
      }
      if (count === 4) {
        window.scrollTo(0, 0);
        const link = document.createElement('a');
        link.addEventListener('click', () => {
          window.scrollTo(0, 2000);
          document.querySelector('.next').remove();
          document.querySelector('.last').classList.remove('hidden');
          document.querySelector('.main-article__header').remove();
          document.querySelector('.main-article__paragraph').remove();
          setTimeout(typeWriter, 1500);
        });
        document.querySelector(
          '.next',
        ).innerHTML = `Я вижу ты опытная Леди Баг, ты нашла все баги!. Но согласись, эти ошибки смотрелись довольно мило. Однако пора двигаться дальше. Тут будет `;
        link.innerText = 'ребус. Жми';
        document.querySelector('.next').append(link);

        setTimeout(() => {
          texts[0].classList.remove('opacity_none');
          texts[1].classList.remove('opacity_none');
          document.querySelector('.next').classList.add('next_show');
        }, 500);
      }
      bag.remove();
    }),
  );
  let title = '... ..- .--. . .-. -.-. --- -.. .';
  const typingText = document.getElementById('typing-text');
  let index = 0;

  function typeWriter() {
    if (index < title.length) {
      typingText.textContent += title.charAt(index);
      index++;
      setTimeout(typeWriter, 200); // Задержка между появлением символов (в миллисекундах)
    }
  }
  const btn = document.querySelector('.btn');
  const input = document.querySelector('.code');
  btn.addEventListener('click', () => {
    if (input.value.toLowerCase() == 'SUPERCODE'.toLowerCase()) {
      typingText.innerText = 'Бурные овации победителю!!!';
      const p = document.querySelector('.finish');
      p.innerHTML =
        'Поздравляю, мой друг! Ты дошёл до самого конца. Теперь у тебя есть шанс выиграть наш приз на митапе 25.05.2023 в офисе ExpoVision. Для этого тебе нужно отправить в директ нашего <a href="https://www.instagram.com/expovisioned/">инстаграма</a> своё ФИО и кодовое слово: ExpoBug. На митапе мы объявим список тех, кто смог дойти до самого конца, и вручим приз первому финалисту. Ждём тебя на мероприятие: Леди Баг и Супер Код.';
      document.querySelector('.main-article__content').innerHTML += `
      <img src="../media/93Fi.gif" alt="" class="conf2" />
<img src="../media/93Fi.gif" alt="" class="conf1" />`;
    } else {
      input.value = '';
    }
  });
});
