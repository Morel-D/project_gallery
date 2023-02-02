var fileUpload = document.querySelector('#uploadFile');
// var cardShadow = document.querySelector('.shadow-none');

var cardCoantainer = document.querySelector('#conatiner');
var fileUrl = '';



// cardShadow.style.display = 'none';

fileUpload.addEventListener('change', getFile);


function getFile(item)
{
    item.preventDefault();

    var fileUpload2 = document.querySelector("input[type=file]").files[0];

    var cardShadow = document.createElement('div');

    cardShadow.className = 'shadow-none p-2 mb-2 bg-light rounded';


    
cardShadow.innerHTML += `

<div class="row">
<div class="col col-2">
    <img src="image/File2.png" alt="" class="img-fluid">
</div>
<div class="col">
    <div class="row">
        <div class="col tex-end"><label >Uploading..</label> </div>
    </div>
    <div class="progress">
        <div class="progress-bar bg-danger w3-tiny" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
</div>
</div>

`;

    cardCoantainer.appendChild(cardShadow);



    cardShadow.style.display = 'block';

    
    var resource = new XMLHttpRequest();


    var reader = new FileReader();
    reader.addEventListener('load', function(){
        fileUrl = reader.result;
        
        resource.open('GET', fileUrl);

        resource.addEventListener('progress', function(e){
            var progressBar = document.querySelector('.progress-bar');
            // var prgressText = document.querySelector('#textBar');

            if(e.lengthComputable)
            {
                var percentage = (e.loaded / e.total)*100;

                progressBar.style.width = percentage.toFixed(0)+'%';
                // prgressText.textContent = percentage.toFixed(0)+'%';  
                
                if(progressBar.style.width == '100%')
                {

                           
                    cardShadow.innerHTML = ` 
                    
                    <div class="shadow-none p-1 mb-2 bg-light rounded">
                            <div class="row">
                                <div class="col col-2">
                                    <img src="image/File2.png" alt="" class="img-fluid">
                                </div>
                                <div class="col">
                                    <div class="row">
                                        <div class="col text-start"><label style= 'font-size: 12px;' >${fileUpload2.name}</label></div>
                                        <div class="col text-end"><label>Uploaded</label>  <label for=""><i class="bi bi-check2 text-danger"></i></label></div>
                                    </div>
                                     <label for="">${formatBytes(fileUpload2.size)}</label>
                                </div>
                            </div>
                        </div>`; 


                }
               
                

            }

        })

        resource.send();
    });
    reader.readAsDataURL(this.files[0]);

        
        cardCoantainer.appendChild(cardShadow);

}



function formatBytes(a,b=2){
    if(!+a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));

    return`${parseFloat((a/Math.pow(1024,d)).toFixed(c))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}`
}