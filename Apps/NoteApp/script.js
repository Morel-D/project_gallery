var forms = document.forms['inputForm'];
var addBtn = document.querySelector('#btnAdd');
var num = 0;


/// Add the notes in the.. 
addBtn.addEventListener('click', function(item){
	// item.preventDefault();
	var date = new Date();

var titleForm = forms.querySelector('input').value;
var titleBio = forms.querySelector('textarea').value;
var row = document.querySelector('.row');


// creating elments 

var divCol = document.createElement('div');
var divCard = document.createElement('div');
var divCont = document.createElement('div');
var title = document.createElement('h3');
var text = document.createElement('p');
var divRow2 = document.createElement('div');
var divCol1 = document.createElement('div');
var divCol2 = document.createElement('div');
var icon1 = document.createElement('i');
var icon2 = document.createElement('i');
var hr = document.createElement('hr');

var small_p = document.createElement('p')




// assigning classes 

divCol.className = 'col-sm-4';
divCol.id = 'note';
divCard.className = 'card';
divCont.className = 'container text-start p-3 overflow-auto';
divCont.style.height = '165px';
title.textContent = titleForm;
text.textContent = titleBio;
text.id = "textArea";
divRow2.className = 'row p-2 mx-4';
divCol1.className = 'col text-start text-secondary';
divCol1.id = 'time';
divCol1.innerHTML = date.getDate()+'-'+date.getMonth()+' <i>'+date.getHours()+':'+date.getMinutes()+'</i>';
divCol2.className = 'col text-end text-secondary';
icon1.className = 'bi bi-trash text-danger mx-1';
icon1.id = 'delete';
icon2.className = 'bi bi-pen text-warning';
icon2.setAttribute("type", "button");
icon2.dataset.bsToggle = 'modal';
icon2.dataset.bsTarget = '#exampleModal1';
icon2.id = 'edit';


small_p.className = 'text-center';
small_p.id = 'noteId';
small_p.style.display = 'none';
++num;
small_p.textContent = num;


// apending 

row.appendChild(divCol);
divCol.appendChild(divCard);
divCard.appendChild(divCont);
divCont.appendChild(title);
divCont.appendChild(text);
divCard.appendChild(divRow2);
divRow2.appendChild(hr);
divRow2.appendChild(divCol1);
divRow2.appendChild(small_p)
divCol1.appendChild(icon1);
divRow2.appendChild(divCol2);
divCol2.appendChild(icon1);
divCol2.appendChild(icon2);



	forms.querySelector('input').value = '';
	forms.querySelector('textarea').value = '';	

});






// var deleteBtn = document.querySelector('#delete');
var deleteBtn = document.querySelector('.row');

deleteBtn.addEventListener('click', function(item2){
	if (item2.target.id == 'delete') 
	{
		
		var deleteCar = item2.target.parentElement.parentElement.parentElement.parentElement;
		deleteCar.parentNode.removeChild(deleteCar);

	}
});



// editing the note

var editBtn = document.querySelector('.row');
var forms2 = document.forms['inputForm2'];


editBtn.addEventListener('click', function(item3){

	if (item3.target.id == 'edit') 
	{


	var tagEdit = item3.target.parentElement.parentElement.parentElement.parentElement;	
	var date = new Date();

	var editDate = tagEdit.querySelector('#time');
	var h3 = tagEdit.querySelector('h3');
	var p = tagEdit.querySelector('#textArea');
	var cardId = tagEdit.querySelector('#noteId');

	var titleForm = forms2.querySelector('input');
    var titleBio = forms2.querySelector('textarea');
    var formId = forms2.querySelector('#id');

    titleForm.value = h3.textContent;
    titleBio.value = p.textContent;
    formId.value = cardId.textContent;


    var upload = document.querySelector('#btnEdit');

    upload.addEventListener('click', function(item4){

    	if(formId.value == cardId.textContent){
    		    h3.textContent = titleForm.value;
    		    p.textContent = titleBio.value;
    		   editDate.innerHTML = date.getDate()+'-'+date.getMonth()+' <i>'+date.getHours()+':'+date.getMinutes()+'</i>';
    	}
    	 

    	
    });

	}


	// else {
	// 	console.log('No hello world');
	// }


})