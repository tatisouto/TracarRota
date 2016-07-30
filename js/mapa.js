function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: -23.5705005, lng: -46.6451979}
  });


  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('Origem').addEventListener('change', onChangeHandler);
  document.getElementById('Destino').addEventListener('change', onChangeHandler);
}

function CalcularRota(){

  calculateAndDisplayRoute(directionsService, directionsDisplay);
};

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  
    directionsService.route({
      origin: document.getElementById('Origem').value,
      destination: document.getElementById('Destino').value,
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }

  });
}