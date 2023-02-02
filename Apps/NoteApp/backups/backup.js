var forms = document.forms['inputForm'];
var addBtn = document.querySelector('#btnAdd');

addBtn.addEventListener('click', function(item){
	// item.preventDefault();

var titleForm = forms.querySelector('#title').value;
var titleBio = forms.querySelector('#bio').value;
var newCardGroup = document.querySelector('.card-group');
var divPadding = document.querySelector('#bgn');

// Create the elements
var cardDiv = document.createElement('div');
var cardBodyDiv = document.createElement('div');
var title = document.createElement('h5'); 
var text = document.createElement('p');
var cardFooter = document.createElement('div');
var small = document.createElement('small');  



// assign classNames

cardDiv.className = 'card';
cardBodyDiv.className = 'card-body';
title.className = 'card-title';
text.className = 'card-text';
cardFooter.className = 'card-footer';
small.className = 'text-muted';

title.textContent = titleForm;
text.textContent = titleBio;
newCardGroup.cloneNode(true);


// append
divPadding.appendChild(newCardGroup);
newCardGroup.appendChild(cardDiv);
cardDiv.appendChild(cardBodyDiv);
cardBodyDiv.appendChild(title);
cardBodyDiv.appendChild(text);
cardDiv.appendChild(cardFooter);
// cardFooter.appendChild(small);



	forms.querySelector('#title').value = '';
	forms.querySelector('#bio').value = '';	

});








var btnAdd = document.querySelector('#btnAdd');

btnAdd.addEventListener('click', function(item){

	const date = new Date();


	var title = document.forms['inputForm'].querySelector('input').value;
	var description = document.forms['inputForm'].querySelector('textarea').value;
	var card = document.querySelector('#note');


	var rows = document.querySelector('#row');

	var cardClone = card.cloneNode(true);
	var topic = document.querySelector('h3').textContent = title;
	var bio = document.querySelector('#textArea').textContent = description;
	var dat = document.querySelector('#date').textContent = date.getDay()+'-'+date.getMonth()+','+date.getHours()+':'+date.getMinutes();

	rows.appendChild(cardClone);
	cardClone.appendChild(topic);
	cardClone.appendChild(bio);


	forms['inputForm'].querySelector('input').value = '';
	forms['inputForm'].querySelector('textarea').value = '';

});


//const date = new Date();
//const time = date.toLocaleTimeString();
//const time = date.toDateString();
// console.log(date.getHours()+":"+date.getMinutes());
// console.log(date.getDay()+":"+date.getMonth());
// console.log(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());


