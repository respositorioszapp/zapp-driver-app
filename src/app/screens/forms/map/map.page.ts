import { Component, OnInit, Input } from '@angular/core';
import { Geolocation } from '@capacitor/core';
import { UiService } from 'src/app/services/ui.service';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';

declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @Input() order: any
  az_arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  distance = ""
  duration = ""
  details = []
  @Input() detail: any
  @Input() history: string

  constructor(private ui: UiService,
    private request: RequestService,
    private auth: AuthService) { }

  async ngOnInit() {
    const loader = await this.ui.loading("Por favor espere...");
    this.details.push(this.detail);
    console.log("Details", this.details);
    this.loadMap(loader);


  }

  loadMap(loader) {

    //obtener usos de la API
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
    //puntos de referencia para agregar
    var waypts = [];
    var markers = [];
    var infos = [];
    //coordenadas de los puntos de ruta
    for (let i = 0; i < this.details.length; i++) {

      let latlng = {
        lat: parseFloat(this.details[i].latitude),
        lng: parseFloat(this.details[i].longitude)
      };
      waypts.push({ location: latlng, stopover: true });
    }
    //creo mapa
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: { lat: waypts[0].location.lat, lng: waypts[0].location.lng }
    });
    //muestro el mapa
    directionsDisplay.setMap(map);
    //ventanas de informacion
    var infoWindow = new google.maps.InfoWindow();
    //coordenadas markers personalizados con ventana de información
    for (let i = 0; i < this.details.length; i++) {

      let latlng = {
        lat: parseFloat(this.details[i].latitude),
        lng: parseFloat(this.details[i].longitude)
      };

      let marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: '../../../assets/imgs/markers/' + this.az_arr[i] + '.png'
      })
      markers.push(marker);
      // agrego la informacion de la dirección
      infos.push(this.details[i].address);

      // google.maps.event.addListener(marker, 'click', (function(marker, i) {
      //   return function() {

      //       infoWindow.setContent(infos[i]);
      //       infoWindow.open(map, marker);
      //   }
      // })(marker, i));
    }

    // pregunto si es ida y vuelta el servicio
    let origin, destination, return_pt;
    let n = (this.details.length - 1);

    if (this.order && this.order.round_trip === true) {
      origin = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
      destination = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
      return_pt = { lat: waypts[n].location.lat, lng: waypts[n].location.lng };
      //punto de retorno en km y min
      this.getDistanceMatrix(return_pt, origin);
    } else {
      origin = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
      destination = { lat: waypts[n].location.lat, lng: waypts[n].location.lng };
      this.getDistanceMatrix(origin, destination);
    }
    // pinto la ruta
    const _this = this;
    directionsService.route({
      origin: origin,
      destination: destination,
      waypoints: waypts,
      travelMode: google.maps.TravelMode.DRIVING
    }, async function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        (await loader).dismiss()
      } else {
        (await loader).dismiss()
        _this.ui.showToast("No se ha podido mostrar el mapa. Verifique su conexión.", () => {
          _this.dismiss()
        })
        console.log('Ha fallat la comunicació amb el mapa a causa de: ' + status);
      }
    });

    //calcular distancia






  }

  getDistanceMatrix(origin, destination, loader?) {
    var service = new google.maps.DistanceMatrixService();
    var _this = this;
    //calculo distancia
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    },
      async function (response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          console.log("Error was: " + status);
        } else {
          try {
            let distance_text = response.rows[0].elements[0].distance.text;
            console.log("Distance Text", distance_text)
            let distance = distance_text.substring(0, distance_text.length - 3).replace(",", ".");

            let duration_text = response.rows[0].elements[0].duration.text;
            console.log("Duration Text", duration_text)
            let duration = duration_text.substring(0, distance_text.length - 4);
            _this.getCalculateDistance(distance_text, duration_text);

          } catch (e) {
            console.log("error", e)
          }

        }
      });
  }

  getCalculateDistance(distance, duration) {
    this.distance = distance;
    this.duration = duration;
  }

  dismiss() {
    this.ui.dismiss()
  }

}
