var url = "http://localhost:3000/view";
var id = "view";

async function generator(url, id) {
    var request = await new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
view(data, request, id);

}

request.send()
  }

  function view(data, request, id){
      if(id == "view"){
    if (request.status >= 200 && request.status < 400) {
         data.forEach((query) => {
          console.log(request.status);
          var div = document.createElement("tr");
            var mainContainer = document.getElementById(id);
            div.innerHTML = "<td>"+query.id+"</td><td><input id='name"+query.id+"' placeholder='"+query.name+"' value='"+query.name+"'/></td><td><input id='genre"+query.id+"' placeholder='"+query.genre+"' value='"+query.genre+"'/></td><td><input id='releasedate"+query.id+"' placeholder='"+query.releasedate+"' value='"+query.releasedate+"'/></td><td><input id='agelimit"+query.id+"' placeholder='"+query.agelimit+"' value='"+query.agelimit+"'/></td><td><input id='runningtime"+query.id+"' placeholder='"+query.runningtime+"' value='"+query.runningtime+"'/></td>"+"<button onclick = 'deleterecord("+query.id+")' type = 'submit' value='Submit'>Delete</button>"+"<button onclick = 'update("+query.id+")'>Update</button>" ;
         mainContainer.appendChild(div)
        })
      } else {
        console.log('error')
      }}
  }

async function generate_html(){
await generator(url, id);
}

function deleterecord(id){
  navigator.sendBeacon('http://localhost:3000/deleterecord/'+ id);
  console.log(id);
}
function update(id){
    const data = id + ";"+ document.getElementById("name"+id).value + ";"+ document.getElementById("genre"+id).value + ";"+ document.getElementById("releasedate"+id).value+ ";"+ document.getElementById("agelimit"+id).value+ ";"+ document.getElementById("runningtime"+id).value;
  
  navigator.sendBeacon('http://localhost:3000/update/'+ data);
  console.log(data);
}

generate_html();