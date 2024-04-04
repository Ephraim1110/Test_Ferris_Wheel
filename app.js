document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const tournerXButton = document.getElementById('tournerXButton'); 
  
    function sendPOSTRequest(url) {
      fetch(url, {
        method: 'POST',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la requête.');
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Erreur:', error.message);
      });
    }
  
    startButton.addEventListener('click', function() {
      sendPOSTRequest('http://34.91.249.112:8480/ferris-wheel/actions/start');
      console.log('start');
    });
  
    stopButton.addEventListener('click', function() {
      sendPOSTRequest('http://34.91.249.112:8480/ferris-wheel/actions/stop');
      console.log('stop');
    });
  
    tournerXButton.addEventListener('click', function() {
      const tournerXTemps = prompt('Entrez le nombre de secondes pour faire tourner la roue :');
      if (tournerXTemps) {
        sendPOSTRequest('http://34.91.249.112:8480/ferris-wheel/actions/start');
  
        setTimeout(() => {
          sendPOSTRequest('http://34.91.249.112:8480/ferris-wheel/actions/stop');
        }, tournerXTemps * 1000); 
        console.log('Il vient de tourner pendant ' + tournerXTemps + 's');
      }
    });
  });
  