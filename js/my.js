var getJSON = function(url) {
return new Promise(function(resolve, reject) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status == 200) {
      resolve(xhr.response);
    } else {
      reject(status);
    }
  };
  xhr.send();
});
};



getJSON('./json/fr.json').then(function(data) {
  for (var i = 0; i < data.length; i++) {
    document.getElementById('result').innerHTML += "<div style='bloc'";
    result.innerText += ' ' + data[i].prenom;
    document.getElementById('result').innerHTML += '<br>';
    for (var i2 = 0; i2 < data[i].taches.length; i2++) {
      result.innerText += ' ' + data[i].taches[i2].tache;
      result.innerText += ' ' + data[i].taches[i2].date;
      result.innerText += ' ' + data[i].taches[i2].datefin;
      var stat = "Non fait";
      if(data[i].taches[i2].status!=0)
      { stat = "Fait"; }
      result.innerText += ' ' + stat;
      document.getElementById('result').innerHTML += '<br>';
    }
    document.getElementById('result').innerHTML += "</div>";
    document.getElementById('result').innerHTML += '<br>';
  }

}, function(status) {
alert('Le fichier JSON est introuvable.');
});
