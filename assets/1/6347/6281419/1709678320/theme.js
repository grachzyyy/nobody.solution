(() => {
  document.addEventListener('readystatechange', () => {
      if (document.readyState == 'interactive') {
        if (document.querySelector('label[for="client_contact_name"]')) {
          document.querySelector('label[for="client_contact_name"]').innerHTML = 'Ваше ФИО';          
        }
      }
  });
})();

Solutions = {};
Solutions.limit = ['567767165', '567767413', '567767433'];
