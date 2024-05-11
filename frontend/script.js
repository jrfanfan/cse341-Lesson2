// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch('/data');
  let text = "";
  text = `<table>`
  text += `<tr>`
  text +=`<th>Firstname</th>`
  text +=`<th>Lastname</th>`
  text +=`<th>Email</th>`
  text +=`<th>ID</th>`
  text +=`</tr>`
  for (let i = 0; i < data.length; i++) {
    text += `<tr>`
    text += `<td>` + data[i].firstname  
    text += `</td>` 
    text += `<td>` + data[i].lastname  
    text += `</td>` 
    text += `<td>` + data[i].email 
    text += `</td>` 
    text += `<td>` + data[i].idnumber 
    text += `</td>`     
    text += `</tr>`  
  }
  text += `</table>`
  document.getElementById("data1").innerHTML= text;
  
}

const updateData = async () => {
  const data = await apiFetch('/data');
  let text = "";
  text = `<table>`
  text += `<tr>`
  text +=`<th>Firstname</th>`
  text +=`<th>Lastname</th>`
  text +=`<th>Email</th>`
  text +=`<th>ID</th>`
  text +=`<th></th>`
  text +=`</tr>`
  for (let i = 0; i < data.length; i++) {
    text += `<tr>`
    text += `<td>` + data[i].firstname  
    text += `</td>` 
    text += `<td>` + data[i].lastname
    text += `</td>` 
    text += `<td>` + data[i].email 
    text += `</td>` 
    text += `<td>` + data[i].idnumber 
    text += `</td>` 
    text += `<td><a href="/update.html">Update</a></td>`   
    text += `</tr>`  
  }
  text += `</table>`
  document.getElementById("data2").innerHTML= text;
  
}


const deleteData = async () => {
  const data = await apiFetch('/data');
  let text = "";
  text = `<table>`
  text += `<tr>`
  text +=`<th>Firstname</th>`
  text +=`<th>Lastname</th>`
  text +=`<th>Email</th>`
  text +=`<th>ID</th>`
  text +=`<th></th>`
  text +=`</tr>`
  for (let i = 0; i < data.length; i++) {
    text += `<tr>`
    text += `<td id="fname">` + data[i].firstname  
    text += `</td>` 
    text += `<td>` + data[i].lastname
    text += `</td>` 
    text += `<td>` + data[i].email 
    text += `</td>` 
    text += `<td>` + data[i].idnumber
    text += `</td>` 
    text += `<td><a href="/datadel/${data[i]._id}">delete</a></td>`
    text += `</tr>`  
  }
  text += `</table>`
  document.getElementById("data2").innerHTML= text;
}


// reset my form
function submit_form() {
  document.form1.submit();
  document.form1.reset(); 
  }



    



