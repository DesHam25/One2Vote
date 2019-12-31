var map, infoWindow;


function initMap() {
     var options = {
          center: { lat: 38.897957, lng: -77.03656 },
          zoom: 10
     };

     map = new google.maps.Map(document.getElementById('map'), options);
     infoWindow = new google.maps.InfoWindow;

     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (p) {
               var position = {
                    lat: p.coords.latitude,
                    lng: p.coords.longitude
               };

               infoWindow.setPosition(position);
               infoWindow.setContent('Your location!');
               infoWindow.open(map);
               map.setCenter(position);
          }, function () {
               handleLocationError('Geolocation service failed', map.getCenter());
          });
     } else {
          handleLocationError('No geolocation available.', map.getCenter());
     }
};

