var forms = document.forms['inputForm'];
var addBtn = document.querySelector('#btnAdd');



addBtn.addEventListener('click', function(item){
	// item.preventDefault();
	var titleForm = forms.querySelector('#title').value;
    var titleBio = forms.querySelector('#bio').value;

    // target the card that will be clonned
	var cloneCard = document.querySelector('#note');

	// target the clonning effect tob true
	var cardClone = cloneCard.cloneNode(true);
	var titleCard = cloneCard.querySelector('h5').textContent = titleForm;
	var textCard = cloneCard.querySelector('p').textContent = titleBio;


	var divCont = document.querySelector('#bgn');


// target the group card where the card will be clonned
	var groupCard = document.querySelector('.card-group');



var cardLength = document.querySelectorAll('.card-group .card');

if(cardLength.length <= 3){

	var space = document.createElement('br');
	var newCardGroup = document.createElement('div');
	newCardGroup.className = 'card-group d-flex gap-5';


	divCont.appendChild(space);
	divCont.appendChild(newCardGroup);
	newCardGroup.appendChild(cardClone);

	
}else {

		// pine the card to the gorup card
	groupCard.appendChild(cardClone);

}


	forms.querySelector('#title').value = '';
	forms.querySelector('#bio').value = '';	

});
