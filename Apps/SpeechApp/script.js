// Speech to voice 

var check = document.querySelector('#Checkbox');

check.addEventListener('click', function(item){
	var speech = document.querySelector('#speech');
	if(check.checked == true){

		speech.textContent = 'Speech On....';

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
           
           	text.value = transcript
           
           	// if(e.results[0].isFinal){
           		// text = document.createElement('p');
           		// card.appendChild(text);
           	// }
           
           	console.log(transcript)
           });
           
           recognition.addEventListener('end', recognition.start);
           
           recognition.start();

	}else if(check.checked == false)  {
		speech.textContent = 'Speech Off';
		// SpeechRecognition.stop();
	}


});








// Word to speech
function openTab(tabs) {
var pane = document.querySelectorAll('.pane');
var pane2 = document.querySelectorAll('.btn');


pane.forEach(function(item){
	item.style.display = 'none';
});


// pane2.forEach(function(item){
// 	item.style.color = '#d63384';
// });

document.getElementById(tabs).style.display = 'block';

}


// all informations about the voice (the text etc..)
var msg = new SpeechSynthesisUtterance();

// where our voices will be dumped
let voices = [];

var voiceDrop = document.querySelector('[name ="voice"]');
var texts = document.querySelector('[name ="text"]');
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');

	msg.text = texts.value;

// Add the varouis langauges in the option textfeild
	speechSynthesis.addEventListener('voiceschanged', function(){
	   voices = this.getVoices();
	   voiceDrop.innerHTML = voices
	   .map(voice => `<option value ="${voice.name}">${voice.name} (${voice.lang}) </option>`)
	   .join('');
   
   });


// start over function
   function toggle(startOver = true){
	speechSynthesis.cancel()
	if(startOver){
		speechSynthesis.speak(msg);
	}
}


// For the voice display
	 voiceDrop.addEventListener('change', function(){
	msg.voice = voices.find(voice => voice.name === this.value);
	toggle();
});


// Change the text feild language
texts.addEventListener('change', function(){
	// console.log(this.name, this.value);
	msg[this.name] = this.value;
	toggle();
})


// click btn to start the voice
start.addEventListener('click', function(){
	toggle();
});

// click btn to stop the voice
stop.addEventListener('click', function(){
	speechSynthesis.cancel();
})


