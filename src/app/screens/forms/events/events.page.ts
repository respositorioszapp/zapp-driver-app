import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { PhotoService } from 'src/app/services/photo.service';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Geolocation } from '@capacitor/core';
import { Router } from '@angular/router';
import { MapPage } from '../map/map.page';
import { ImagePage } from '../image/image.page';
import { IonContent } from '@ionic/angular';
import { NetworkStatusService } from 'src/app/services/network-status.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  @Input() order: any
  @ViewChild(IonContent, { read: IonContent, static: false }) myContent: IonContent;
  @Input() longitude: any
  @Input() latitude: any
  personal_information = this.fb.group({
    comment: ['', Validators.required],
  },
  );
  image: any = {
    url: "assets/imgs/img-default.jpg",
    format: "",

  }

  events: any[] = []
  constructor(private ui: UiService,
    private photo: PhotoService,
    private auth: AuthService,
    private request: RequestService,
    private fb: FormBuilder,
    private router: Router,
    private network: NetworkStatusService
  ) { }

  get controls() {
    return this.personal_information.controls;
  }

  ionViewWillEnter() {
    if (this.network.getNetworkStatus().connected) {
      const loader = this.ui.loading("Por favor espere...");
      this.request
        .get(`driver/events_per_driver/${this.order.id}/${this.auth.user.id}`)
        .subscribe(async (res: any) => {
          (await loader).dismiss();
          this.events = res.data;
          this.events = this.events.map(e => {
            return { ...e, sending: true }
          })
          console.log("Events", res.data);
          this.scrollToBottom();
        }, async (err: any) => {
          (await loader).dismiss();
          await this.ui.presentAlert({
            mode: 'ios',
            header: 'No se ha podido cargar las eventualidades',
            buttons: [
              {
                text: 'Aceptar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {

                }
              },
            ]
          })
          console.log("Error", err)
        }
        )
    } else {
      this.ui.showToast("Verifique su conexión", () => {
        this.dismiss();
      })
    }
  }

  ngOnInit() {

  }

  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

  async scrollToBottom(): Promise<void> {
    try {
      console.log("Scrolling...")
      await this.myContent.scrollToBottom(100);
    } catch (err) { }
  }

  viewMap(detail) {
    const modal = this.ui.presentModal(MapPage, { detail });
  }

  viewImage(image) {
    const modal = this.ui.presentModal(ImagePage, { image });
  }

  dismiss() {
    this.ui.dismiss()
  }



  async save() {
    const { comment } = this.personal_information.value;
    const data = new FormData();
    const detail = this.order.details.find(d => d.status == 24)
    data.append("order_detail_id", detail.id)
    data.append("latitude", this.latitude.toString())
    data.append("longitude", this.longitude.toString())
    data.append("description", comment)
    if (this.image.url != "assets/imgs/img-default.jpg") {
      const dat = new Date().getTime();
      await this.ui.presentAlert({
        mode: 'ios',
        header: 'Imagen',
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
            }
          },
        ]
      })
      const name_file1 = `${dat}_${this.auth.user.id}.${this.image.format}`;
      const blob_image = this.photo.dataUrlToBlob(this.image.url);
      const image_to_upload = this.photo.getFileImage(this.image.url, name_file1, this.image.format);
      data.append('photo', blob_image);
    }
    data.append("user_id", this.auth.user.id.toString())
    const loader = this.ui.loading("Por favor espere...");
    this.request.post('driver/register_event', data)
      .subscribe(async (res: any) => {
        (await loader).dismiss();
        this.ui.showToast("Eventualidad registrada", () => {
          this.dismiss()
        })

      }, async (err: any) => {
        console.log("Error", err)
        this.ui.showToast("Ha ocurrido un error")
      })
  }



}
