import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Geolocation } from '@capacitor/core';
import { UiService } from 'src/app/services/ui.service';
import { RequestService } from 'src/app/services/request.service';
import { AuthService } from 'src/app/services/auth.service';
import { PhotoService } from 'src/app/services/photo.service';
import { NetworkStatusService } from 'src/app/services/network-status.service';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() order: any
  @Input() events: any
  @Input() longitude: any
  @Input() latitude: any
  @Output() eventsUpdate = new EventEmitter();
  @Output() scroll = new EventEmitter()
  comment_data: FormGroup = new FormGroup({
    comment: new FormControl('', [Validators.required]),
  });
  details
  sending = ''
  constructor(private ui: UiService,
    private request: RequestService,
    private auth: AuthService,
    private photo: PhotoService,
    private network: NetworkStatusService) { }

  ngOnInit() {
    console.log("Detail", this.order)
  }

  async uploadPhoto() {
    try {
      if (this.network.getNetworkStatus().connected) {
        await (await this.photo.selectImageSource());
        this.photo.imageSubject.subscribe(async (image) => {
          if (Object.keys(image).length > 0) {
            const dat = new Date().getTime();
            const name_file1 = `${dat}_${this.auth.user.id}.${image.format}`;
            const blob_image = this.photo.dataUrlToBlob(image.dataUrl);
            const image_to_upload = this.photo.getFileImage(image.dataUrl, name_file1, image.format);
            const item = this.order.details.find(d => d.status != 25);
            const id = item.id;
            this.events.push({
              order_detail_id: id,
              description: "Foto " + item.address,
              photo: image.dataUrl,
              sending: false
            })
            this.updateEvents();
            this.scroll.emit();
            this.sending = 'yes';
            const { comment } = this.comment_data.value;
            const data = new FormData();
            const latitude = localStorage.getItem("latitude");
            const longitude = localStorage.getItem("longitude")

            data.append("order_detail_id", id);
            data.append("latitude", latitude.toString())
            data.append("longitude", longitude.toString())
            data.append("description", "Foto " + item.address)
            data.append("user_id", this.auth.user.id.toString())
            data.append('photo', blob_image);
            this.request.post('driver/register_event', data)
              .subscribe(async (res: any) => {
                this.events[this.events.length - 1].sending = true;
                this.updateEvents();
                this.sending = undefined;
              }, async (err: any) => {
                this.events.pop();
                this.updateEvents();
                await this.ui.presentAlert({
                  mode: 'ios',
                  header: 'No se ha podido subir la imagen',
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
                this.sending = undefined;

              })
          }

        })
      } else {
        this.ui.showToast("Verifique su conexión");
      }

    } catch (err) {
      await this.ui.presentAlert({
        mode: 'ios',
        header: 'No se ha podido subir la imagen',
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
  }


  get controls() {
    return this.comment_data.controls;
  }

  updateEvents() {
    this.eventsUpdate.emit(this.events);
  }

  async save() {
    if (this.network.getNetworkStatus().connected) {
      const id = this.order.details.find(d => d.status != 25).id;
      const { comment } = this.comment_data.value;
      this.events.push({
        order_detail_id: id,
        description: comment,
        sending: false
      });


      this.comment_data.reset();
      this.sending = 'yes';

      this.updateEvents();
      this.scroll.emit();
      // const coordinates = await Geolocation.getCurrentPosition();
      // const {
      //   latitude,
      //   longitude
      // } = coordinates.coords;

      const data = new FormData();
      const latitude = localStorage.getItem("latitude");
      const longitude = localStorage.getItem("longitude")


      data.append("order_detail_id", id);
      data.append("latitude", latitude.toString())
      data.append("longitude", longitude.toString())
      data.append("description", comment)
      data.append("user_id", this.auth.user.id.toString())

      this.request.post('driver/register_event', data)
        .subscribe(async (res: any) => {
          this.events[this.events.length - 1].sending = true;
          this.updateEvents();
          this.scroll.emit();
          this.comment_data.reset();
          this.sending = undefined;
        }, async (err: any) => {
          console.log("Error", err)
          this.events.pop();
          this.updateEvents();
          this.sending = undefined;
          this.ui.showToast("No se ha podido enviar el comentario")
        })
    }else{
      this.ui.showToast("Verifique su conexión")
    }
  }

}
