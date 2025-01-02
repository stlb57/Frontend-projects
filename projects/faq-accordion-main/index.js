const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const qna = button.closest('.qna');
    const answer = qna.querySelector('.ans');

    answer.classList.toggle('hidden');
    
    const icon = button.querySelector('img');
    if (answer.classList.contains('hidden')) {
      icon.src = './assets/images/icon-plus.svg';
    } else {
      icon.src = './assets/images/icon-minus.svg';
    }
  });
});

