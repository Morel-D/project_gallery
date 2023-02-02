var section = document.querySelectorAll('section');
var back = document.querySelector('#back');


back.addEventListener('click', function(){
    section[0].style.display = 'block';
    section[1].style.display = 'none';
})

// section.forEach(function(item){
    // item.style.display = 'none';
// })

section[0].style.display = 'block';


var location = document.querySelector('#location');


location.addEventListener('click', getApi);


 async function getApi(){
    
    // var card = document.querySelector('#display .card');

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
                console.log(item2);


            })
        })
    }
 }
