function sendPost(){
    const data = document.getElementById("name").value+";"+document.getElementById("genre").value+";"+document.getElementById("releasedate").value+";"+document.getElementById("agelimit").value+";"+document.getElementById("runningtime").value;
    console.log(data);
      navigator.sendBeacon('http:localhost:3000/savedetails/'+ data);
      console.log(data);
    }