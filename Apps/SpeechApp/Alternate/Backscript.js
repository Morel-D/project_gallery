
 window.SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;


 const recognition = new SpeechRecognition();
 recognition.interimResults = true;
 
 var text = document.querySelector('#text');
 var card = document.querySelector('#card2');
 
 recognition.addEventListener('result', function(e){
     // console.log(e.results);
     const transcript = Array.from(e.results)
     .map(result => result[0])
     .map(result => result.transcript)
     .join('')
 
     text.textContent = transcript
 
     if(e.results[0].isFinal){
         text = document.createElement('label');
         card.appendChild(text);
     }
 
     console.log(transcript)
 });
 
 recognition.addEventListener('end', recognition.start);
 
 recognition.start();