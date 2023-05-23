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
            : 'Найдены все! Я вижу ты опытная Леди Баг. Но согласись, эти ошибки смотрелись довольно мило. Однако пора двигаться дальше. Тут будет ребус. ';
        text.classList.add('opacity_none');
      });
      bag.remove();
    }),
  );
});
