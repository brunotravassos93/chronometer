function clock() {
  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;
  
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000); // JS recebe em ms, precisamos multiplicar por 1000.
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }
  
  function startTimer() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }
  
  document.addEventListener('click', function(e) {
    const el = e.target;
  
    if(el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.classList.remove('pausado');
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
    if(el.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(timer);
    }
    if(el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer); // Garante que não sejam criados dois timers.
      startTimer();
    }
  
  })
}
clock();
