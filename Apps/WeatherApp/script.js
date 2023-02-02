var section = document.querySelectorAll('section');
 var loc = document.querySelector('#location');
 var load = document.querySelector('#loader');


 var card = document.querySelector('#display .card');
 var cardBody = document.querySelector('#display .card-body');
 var cardFooter = document.querySelector('#display .card-footer');



section.forEach(function(item){
    item.style.display = 'none';
})

section[0].style.display = 'block';




loc.addEventListener('click', getApi);




 async function getApi(){



load.style.display ='block';

section[0].style.display = 'none';
section[1].style.display = 'block';




    var country = document.querySelector('input').value;

     const resource = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country}?unitGroup=metric&key=PYV7PRBW292VVTZPWT2UWQHMX&contentType=json`);

    if(resource.status !== 200)
    {
        
        var h4 = document.createElement('h4');
        h4.style.color = '#6610f2';
        h4.className = 'text-center';
        h4.innerHTML = 'Coordinate for "'+country+'" are no where to be found <br> <i class="bi bi-emoji-frown" style="color: #6610f2;"></i>';

        cardBody.appendChild(h4);

        load.style.display ='none';

        throw new Error('Something went wrong');

        

    }else {
        var jsonData = await resource.json();
        console.log(jsonData);
        var date = jsonData.days;

        Array.from(date).forEach(function(item){
            var hour = item.hours;
            Array.from(hour).forEach(function(item2){

            

                cardBody.innerHTML = `

            <div class="container text-center">
                <img src="image/Asset2.png">
                <h2>${item2.temp}<sup>o</sup>C</h2>
                <p class="lead">${item2.conditions}</p>
                <p class = 'text-secondary'>${jsonData.description}</p>
                <p>${country}, ${jsonData.timezone}</p>
             </div>`;


             cardFooter.innerHTML = `
                
               <div class="row text-center">
               <div class="col"><i class="bi bi-thermometer" style="color: #6610f2;"></i> ${item2.feelslike} <p style="color: #6610f2;">feelsLike</p></div>
               <div class="col"><i class="bi bi-droplet-fill" style="color: #6610f2;"></i> ${item2.humidity} <p style="color: #6610f2;">Humidity</p></div>
               </div>
             `;

                
            
                card.appendChild(cardBody);
                card.appendChild(cardFooter);

            })
        })

        load.style.display ='none';
    }
 }



  
var back = document.querySelector('#back');

back.addEventListener('click', function(){
    section[0].style.display = 'block';
    section[1].style.display = 'none';

    document.querySelector('input').value = '';

    cardBody.replaceChildren(load, load);
    cardFooter.replaceChildren();
})
