var gMap;
var i = 0;

var favoritePlaces = [
  {content:"Chicago, Illinois",lat:41.878113,lng:-87.629799},
  {content:"New York, New York",lat:40.7128,lng:-74.0060},
  {content:"Las Vegas, Nevada",lat:36.1699,lng:-115.1398}, 
  {content:"Montgomery, Alabama",lat:32.3792,lng:-86.3077}, 
  {content:"Orange County, California",lat:33.7175,lng:-117.8311},
]

function initApplication() {
  console.log('Map Mania v2.0 - Starting!');
  alert("Read the hint, or don't, and search for the first clue. After the first clue is found, the hint for the second location is shown, and so on. If you can't find the locations then click the cheat button and the locations will be found for you and you'll automatically win, cheater. Otherwise, get up to 5 points total and become a winner.");
}

function myFunction() {
  alert("Read the hint, or don't, and search for the first clue. After the first clue is found, the hint for the second location is shown, and so on. If you can't find the locations then click the cheat button and the locations will be found for you and you'll automatically win, cheater. Otherwise, get up to 5 points total and become a winner.");
}


function initMap() {
  // Create a new map and assign it to gMap
  gMap = new google.maps.Map(document.getElementById('myMapID'), {
      center: {lat: 31.037576, lng: -102.100145}, zoom: 4});
      google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });
  }

  function initScore(score) {
    if (score == 5){
      document.getElementById("score-id").value = "*score: 5*";
    } else if (score == 1){
    document.getElementById("score-id").value = "score: 1";
    } else if (score == 2){
      document.getElementById("score-id").value = "score: 2";
    } else if (score == 3){
      document.getElementById("score-id").value = "score: 3";
    } else if (score == 4){
      document.getElementById("score-id").value = "score: 4";
    }
  }

  function initHint(hint) {
    if (hint == 1){
      document.getElementById("hint-id").value = "second hint: hey there delilah";
    } else if (hint == 2) {
      document.getElementById("hint-id").value = "third hint: what happens in, stays in";
    } else if (hint == 3) {
      document.getElementById("hint-id").value = "fourth hint: sweet home, where the skies are so blue";
    } else if (hint == 4) {
      document.getElementById("hint-id").value = "fifth hint: here I come, right back where I started from";
    } else if (hint == 5) {
      document.getElementById("hint-id").value = "no more hints, you win!! :-)";
    }
  }

  function initCheat(){
    for(let j=0; j<5; j++){
      var marker = new google.maps.Marker({position:{lat:(favoritePlaces[i].lat),lng:(favoritePlaces[i].lng)}, map:gMap,});
      marker.setIcon('http://maps.google.com/mapfiles/ms/micons/pink-pushpin.png');
      var infoWindow = new google.maps.InfoWindow({content:favoritePlaces[i].content});
      marker.addListener('click', function() {infoWindow.open(gMap,marker);});
      i++;
    }
    initScore(5);
    initHint(5);
  }


function updateGame() {
  //console.log('function UpdateGame() google-maps-step-03!');
  var zoomLevel = gMap.getZoom();
  var inBounds = false;
  var score = 0;
  var hint = "Home";

  //console.log(favoritePlaces[0]);

  if (gMap.getBounds().contains(favoritePlaces[i])&&zoomLevel==8) {
    var marker = new google.maps.Marker({position:{lat:(favoritePlaces[i].lat),lng:(favoritePlaces[i].lng)}, map:gMap,});
    marker.setIcon('http://maps.google.com/mapfiles/ms/micons/pink-pushpin.png');
    var infoWindow = new google.maps.InfoWindow({content:favoritePlaces[i].content});
    marker.addListener('click', function() {infoWindow.open(gMap,marker);});
    i++;
    initScore(i);
    initHint(i)
    //console.log(i);
  }  
}
