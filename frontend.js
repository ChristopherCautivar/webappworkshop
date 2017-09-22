//something something recieving a request called hello shows these
var hello = function(){
  fetch('/hello')
  .then( res => { return res.json()})
  .then( function(data) {
    console.log(data);
    alet(data.data);
    document.getElementById('example').style.backgroundColor="green";
  })
}
