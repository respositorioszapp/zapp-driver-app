import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Geolocation } from '@capacitor/core';
import { EventsPage } from '../events/events.page';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';
declare var google: any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @Input() detail: any
  az_arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  distance = ""
  duration = ""
  currentLocation: any = {

  }
  address_array: any[] = []
  constructor(private ui: UiService,private request: RequestService,private auth: AuthService) { }

  async ngOnInit() {
    const loader = this.ui.loading("Por favor espere...");
    const coordinates = await Geolocation.getCurrentPosition();
    const {
      latitude,
      longitude
    } = coordinates.coords;
    this.currentLocation = {
      latitude,
      longitude
    }
    this.address_array.push(this.currentLocation)
    this.address_array.push(this.detail)
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
    for (let i = 0; i < this.address_array.length; i++) {

      let latlng = {
        lat: parseFloat(this.address_array[i].latitude),
        lng: parseFloat(this.address_array[i].longitude)
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
    for (let i = 0; i < this.address_array.length; i++) {

      let latlng = {
        lat: parseFloat(this.address_array[i].latitude),
        lng: parseFloat(this.address_array[i].longitude)
      };

      let marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: '../../../assets/imgs/markers/' + this.az_arr[i] + '.png'
      })
      markers.push(marker);
      // agrego la informacion de la dirección
      infos.push(this.address_array[i].address);

      // google.maps.event.addListener(marker, 'click', (function(marker, i) {
      //   return function() {

      //       infoWindow.setContent(infos[i]);
      //       infoWindow.open(map, marker);
      //   }
      // })(marker, i));
    }

    // pregunto si es ida y vuelta el servicio
    let origin, destination, return_pt;
    let n = (this.address_array.length - 1);

    if (this.detail.round_trip === true) {
      origin = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
      destination = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
      return_pt = { lat: waypts[n].location.lat, lng: waypts[n].location.lng };
      //punto de retorno en km y min
      this.getDistanceMatrix(return_pt, origin);
    } else {
      origin = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
      destination = { lat: waypts[n].location.lat, lng: waypts[n].location.lng };
      this.getDistanceMatrix(origin, origin);
    }
    // pinto la ruta
    directionsService.route({
      origin: origin,
      destination: destination,
      waypoints: waypts,
      travelMode: google.maps.TravelMode.DRIVING
    }, async function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        
      } else {
        console.log('Ha fallat la comunicació amb el mapa a causa de: ' + status);
      }
    });

    //calcular distancia
    for (let i = 0; i < waypts.length; i++) {
      let a = null, b = null;
      if (i < (waypts.length - 1)) {
        a = { lat: waypts[i].location.lat, lng: waypts[i].location.lng };
      }
      let j = i + 1;
      if (j <= (waypts.length - 1)) {
        b = { lat: waypts[j].location.lat, lng: waypts[j].location.lng };
      }
      if (a != null && b != null) {
        this.getDistanceMatrix(a, b,loader);
      }
    }



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
     async  function (response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          console.log("Error was: " + status);
        } else {
          let distance_text = response.rows[0].elements[0].distance.text;
          console.log("Distance Text",distance_text)
          let distance = distance_text.substring(0, distance_text.length - 3).replace(",", ".");

          let duration_text = response.rows[0].elements[0].duration.text;
          console.log("Duration Text",duration_text)
          let duration = duration_text.substring(0, distance_text.length - 4);
          _this.getCalculateDistance(distance_text, duration_text);
          (await loader).dismiss();
        }
      });
  }

  getCalculateDistance(distance, duration) {
    this.distance = distance ;
    this.duration = duration;
  }

  registerEvent(){
    this.ui.presentModal(EventsPage, {detail :this.detail})
  }

  async endDetail(){
    const loader = this.ui.loading("Por favor espere...");
    const coordinates = await Geolocation.getCurrentPosition();
    const {
      latitude,
      longitude
    } = coordinates.coords;
    const data = new FormData();
    data.append("order_detail_id", this.detail.id)
    data.append("latitude", latitude.toString())
    data.append("longitude", longitude.toString())
    data.append("description", "Finalización Detalle")
    data.append("user_id", this.auth.user.id.toString())
    this.request.post("driver/end_order_detail",data)
    .subscribe(async (res:any) =>{
      (await loader).dismiss();
      this.detail.status =25;
      this.ui.showToast("Servicio finalizado.", () => {
        this.dismiss()
      })
    }, async (err:any) =>{
      console.log("Error", err);
      (await loader).dismiss();
      this.ui.showToast("Ha ocurrido un error")
    })
  }

  dismiss() {
    this.ui.dismiss()
  }

}
