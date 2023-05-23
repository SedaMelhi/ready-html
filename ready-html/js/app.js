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
            : '';
        text.classList.add('opacity_none');
      });

      if (count === 4) {
        window.scrollTo(0, 0);
        const link = document.createElement('a');
        link.addEventListener('click', () => {
          window.scrollTo(0, 2000);
          console.log(1215165);
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
});
