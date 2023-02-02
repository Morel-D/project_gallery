// let postion = {
//     location: document.querySelector('#location'),
//     latitudes: document.querySelector('#lat'),
//     longitudes: document.querySelector('#long')
// };


// function getCoordinates()
// {
//     section[1].style.display = 'block';
//     section[0].style.display = 'none';

//     try {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     }catch
//     {

//     }
// }



// function showPosition(getLocation)
// {
//     postion.latitudes.innerHTML += "<b>"+ getLocation.coords.latitude +"</b>";
//     postion.longitudes.innerHTML += "<b>"+ getLocation.coords.longitude +"</b>"; 
// }

// function showError(error)
// {
//     let alertBox = {
//         cardBody: document.querySelector('.card-body'),
//         div: document.createElement('div'),
//     };
//     switch(error)
//        {
//         case error.PERMISSION_DENIED:
//             alertBox.div.className = 'alert alert-danger d-none';
//             alertBox.cardBody.appendChild(alertBox.div);

//        }
// }



// 00f16641d5284a65887180156220909

// b8904925b9644e28b07180343220909
// https://api.weatherapi.com/v1/current.json?key=b8904925b9644e28b07180343220909&q=cameroon&aqi=no




var section = document.querySelectorAll('section');
var back = document.querySelector('#back');
 var loc = document.querySelector('#location');

 

back.addEventListener('click', function(){
    section[0].style.display = 'block';
    section[1].style.display = 'none';
})

section.forEach(function(item){
    item.style.display = 'none';
})

section[0].style.display = 'block';




loc.addEventListener('click', getApi);

 async function getApi(){
    section[0].style.display = 'none';
section[1].style.display = 'block';


    var card = document.querySelector('#display .card');
    var cardBody = document.querySelector('#display .card-body');
    var cardFooter = document.querySelector('#display .card-footer');

     const resource = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cameroon?unitGroup=metric&key=PYV7PRBW292VVTZPWT2UWQHMX&contentType=json');

    if(resource.status !== 200)
    {
        throw new Error('Something went wrong')
    }else {
        var jsonData = await resource.json();
        //console.log(jsonData.days);
        var date = jsonData.days;

        Array.from(date).forEach(function(item){
            var hour = item.hours;
            Array.from(hour).forEach(function(item2){

            

                cardBody.innerHTML = `

            <div class="container text-center">
                <img src="image/Asset2.png">
                <h2>${item2.temp}<sup>o</sup>C</h2>
                <p class="lead">${item2.conditions}</p>
                <p>Cameroon</p>
             </div>`;


             cardFooter.innerHTML = `
                
               <div class="row text-center">
               <div class="col">${item2.feelslike} <p >feelsLike</p></div>
               <div class="col">${item2.humidity} <p>Humidity</p></div>
               </div>
             `;

                
            
                card.appendChild(cardBody);
                card.appendChild(cardFooter);

            })
        })
    }
 }

