// serach bar
function search(element)
{
    const records = document.querySelector('#search').value;

    let endpoint = `/search/${records}`;

    // console.log(endpoint)

     fetch('records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ info: element.value })
     }).then(res => res.json())
         .then(data => {
             let record = data.record;

             
             
            //  console.log(record.innerHTML);
             if (record.length < 1)
             {
                return console.log("Sorry we cannot find it");   
             }
             
             record.filter((item => {
                 records.innerHTML =
                     `
                    <td scope="row" class=""> <input type="checkbox" class="mx-3"> </td>
                    <td>${item.fullName}</td>
                    <td>${item.dateOfBirth}</td>
                    <td>${item.age}</td>
                    <td>${item.residence}</td>
                    <td>${item.gender}</td>
                    <td>${item.proffession}</td>
                    <td>${item.email}
                        <input type="hidden" id="id" value="/Record/<%= info._id %>">
                        <input type="hidden" id="editId" value="/<%= info._id %>">
                    </td>
                    <td>
                        <a id="delBtn" href="/"><i class="bi bi-trash text-danger"></i></a>
                        <a href="/records/Record/<%= item._id %>" class="mx-3"><i class="bi bi-eye text-warning"></i></a>
                        <a href="/<%= info._id %>" id="editRecords" data-toggle="modal" data-target="#modelId3"><i class="bi bi-pencil text-primary"></i></a>
                        
                    </td>
                     
                     
                     `;
             }))
    })
 }
