
let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');
let bt3 = document.getElementById('bt3');
let bt4 = document.getElementById('bt3');
let bt5 = document.getElementById('bt3');
let bt6 = document.getElementById('bt3');

let id = document.getElementById('id');
let name = document.getElementById('name');
let age = document.getElementById('age');
let passwd = document.getElementById('passwd');

bt1.onclick = function(){
    fetch('http://127.0.0.1/user/getAllUser',{
        method: 'GET'
    })
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => document.querySelector("#table").innerHTML = getAllUser(data));
}

bt3.onclick = function(){
    var str = {"id":id.value,"name":name.value,age:age.value,passwd:passwd.value}
        console.log(JSON.stringify(str))
    fetch('http://127.0.0.1/user/addUser',{
        headers: {'Content-Type': 'application/json',},
        method: 'POST',
        body:JSON.stringify(str)
    }).then(response => response.json())
    .then(data => document.querySelector("#table").innerHTML = returnUser(data));
}

function getAllUser(json) {
	let rows = ""
  	rows += `
      <tr>
      	<td>${"code:"}</td>
      	<td>${json.code}</td>
        </tr>
        <tr>
        <td>${"msg:"}</td>
      	<td>${json.msg}</td>
        </tr>
        <tr>
        <td>${"data:"}</td>
      	<td>${"id"}</td>
      	<td>${"name"}</td>
      	<td>${"age"}</td>
      	<td>${"passwd"}</td>
        </tr>
    `
    for(const js of json.data) {
        rows += `
            <tr>
             <td>${""}</td>
      	     <td>${js.id}</td>
      	     <td>${js.name}</td>
      	     <td>${js.age}</td>
      	     <td>${js.passwd}</td>
            </tr>
        `
    }
    return `<table>${rows}</table>`;
}

function returnUser(json) {
	let rows = ""
  	rows += `
      <tr>
      	<td>${"code:"}</td>
      	<td>${json.code}</td>
        </tr>
        <tr>
        <td>${"msg:"}</td>
      	<td>${json.msg}</td>
        </tr>
        <tr>
        <td>${"data:"}</td>
      	<td>${"id"}</td>
      	<td>${"name"}</td>
      	<td>${"age"}</td>
      	<td>${"passwd"}</td>
        </tr>
    `
    const js = json.data
        rows += `
            <tr>
             <td>${""}</td>
      	     <td>${js.id}</td>
      	     <td>${js.name}</td>
      	     <td>${js.age}</td>
      	     <td>${js.passwd}</td>
            </tr>
        `
    return `<table>${rows}</table>`;
}






