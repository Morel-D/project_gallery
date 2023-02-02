 // Delete records

//  const deleteBtn = document.querySelector('#delBtn');

//  deleteBtn.addEventListener('click', (element) => {
     
//      const endpoint = document.querySelector('#id').value;


//      fetch(endpoint, {
//          method: 'DELETE'
//      }).then(resource => {
//          console.log(resource.json());
//      })
//      .catch((error) => { console.log(error); })
//  })



 // Edit Record

//  const edit = document.querySelector('#editRecords');
 
//  edit.addEventListener('click', (element) => {
//      const recordID = document.querySelector('#editId').value;

//      console.log(recordID);
//  })



// serach bar
function search(element)
{
    
    let searchBar = document.querySelector('#search');

    fetch('search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ info : element.value })
    }).then(res => res.json())
        .then(data => {
            let info = data.info;
            // What to do next ??? 
    })
    
    
}





