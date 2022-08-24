import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { OtherDocumentsPage } from 'src/app/screens/forms/other-documents/other-documents.page';
import { RealtimeService } from 'src/app/services/realtime.service';
import { Subscription } from 'rxjs';
import { NetworkStatusService } from '../../../services/network-status.service';
import { CameraPhoto, Capacitor } from '@capacitor/core';



@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
  img1: any
  img2: any
  img3: any
  img4: any
  imgs: any[] = [{
    id: 15,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Cédula frontal",
  },
  {
    id: 16,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Cedula trasera",
  },
  {
    id: 17,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Tarjeta de propiedad frontal",
  },
  {
    id: 18,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Tarjeta de propiedad trasera",
  },
  {
    id: 19,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Licencia de conduccion frontal",
  }
    , {
    id: 20,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Licencia de conduccion trasera",
  },
  {
    id: 26,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Soat"
  },
  {
    id: 27,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Tecnomecanica",
  },
  {
    id: 28,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Foto del vehiculo frontal",
  },
  {
    id: 29,
    url: "assets/imgs/img-default.jpg",
    format: "",
    document_type: "Foto del vehiculo trasera",
  },]
  others = [
    {
      id: 32,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Recibo Servicio público",
    },
    {
      id: 33,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Hoja de vida",
    }
  ]
  documents_verified = false
  titles: ['Cédula', 'Tarjeta de propiedad', 'Licencia de conducción', 'Soat', 'Tecnomecánica', 'Vehículo']
  subscription: Subscription
  currentDocuments: any[]
  constructor(private photo: PhotoService,
    private auth: AuthService,
    private request: RequestService,
    private ui: UiService,
    private router: Router,
    private loadingController: LoadingController,
    private realtime: RealtimeService,
    private network: NetworkStatusService,) { }

  filter(array: any[], start, end) {
    return array.filter((d, i) => i >= start && i <= end);
  }

  getDocumentsComplete() {
    const res = Math.abs(Number(this.auth.vehicles.year) - new Date().getFullYear());
    if (res > 2)
      return this.imgs.every(i => i.url && i.url != "assets/imgs/img-default.jpg")
    else {
      const ings = this.imgs.filter(i => i.id != 27);
      return ings.every(i => i.url && i.url != "assets/imgs/img-default.jpg")
    }
  }

  async ngOnInit() {


  }

  async ionViewWillEnter() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.imgs = [{
      id: 15,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Cédula frontal",
    },
    {
      id: 16,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Cedula trasera",
    },
    {
      id: 17,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Tarjeta de propiedad frontal",
    },
    {
      id: 18,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Tarjeta de propiedad trasera",
    },
    {
      id: 19,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Licencia de conduccion frontal",
    }
      , {
      id: 20,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Licencia de conduccion trasera",
    },
    {
      id: 26,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Soat"
    },
    {
      id: 27,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Tecnomecanica",
    },
    {
      id: 28,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Foto del vehiculo frontal",
    },
    {
      id: 29,
      url: "assets/imgs/img-default.jpg",
      format: "",
      document_type: "Foto del vehiculo trasera",
    },]
    if (this.network.getNetworkStatus().connected) {
      const loader = await this.loadingController.create({ message: "Por favor espere..." });
      await loader.present();
      this.request.get(`driver/documents/${this.auth.user.id}`)
        .subscribe(async (res: any) => {
          const documents = res.data.documents;
          console.log("Documents", documents)
          this.currentDocuments = documents;
          localStorage.setItem("currentDocuments", JSON.stringify(this.currentDocuments));
          this.imgs = this.imgs.map(img => {
            const id: any[] = documents.filter(d => {
              return d["document_type_id "] == img.id;
            })
            const other = documents.filter(d => {
              return d["document_type_id "] == 32 || d["document_type_id "] == 33;
            })
            this.others = other;
            if (id.length > 0) {
              console.log("Id", id)
              const photo = id[id.length - 1].url;
              const document_id = id[id.length - 1].document_id;
              return { ...img, url: photo, document_id }
            }
            return img
          });
          (await loader).dismiss();
        }, async (err: any) => {
          (await loader).dismiss();
        })
      this.request.get(`driver/documents_verified/${this.auth.user.id}`).subscribe(res => {
        this.documents_verified = true;
      }, err => {
        this.documents_verified = false;
      })
    } else {
      this.ui.showToast("Verifique su conexión")
    }
  }

  back() {
    this.router.navigate(['/tabs/profile'])
  }

  getDocumentsAlreadyFullFill() {
    const res = Math.abs(Number(this.auth.vehicles.year) - new Date().getFullYear());
    if (res <= 2) {
      const images = this.imgs.filter(i => i.id != 27);
      return images.filter(i => i.url == "assets/imgs/img-default.jpg").length
    }
    return (this.imgs
      .filter(i => i.url == "assets/imgs/img-default.jpg").length)
  }

  async takePhoto(item) {
    try {
      if (this.network.getNetworkStatus().connected) {

        await (await this.photo.selectImageSource());
        this.subscription = this.photo.imageSubject.subscribe(async (image: CameraPhoto) => {
          if (Object.keys(image).length > 0) {
            const loading = await this.ui.loading("Por favor espere...");
            console.log("Item", item)

            const current_photo = item.url == "assets/imgs/img-default.jpg";
            const current_photo_url = item.url;
            item.url = image.dataUrl;
            item.format = image.format;
            item.loading = "yes";
            const url = !current_photo ? `driver/update_documents/${item.document_id}` : `driver/documents/${this.auth.user.id}/${item.id}`;
            const dat = new Date().getTime();
            const name_file1 = `${dat}_${this.auth.user.id}.${item.format}`;
            const blob_image = this.photo.dataUrlToBlob(item.url);
            const image_to_upload = this.photo.getFileImage(item.url, name_file1, item.format);
            let data = new FormData();
            
            if (image_to_upload instanceof File) {

              console.log("Image", JSON.stringify(image_to_upload))
              data.append('photo', blob_image);
              console.log(" Form Data", data)
              this.request.post(url, data, false, {
                enctype: 'multipart/form-data'
              })
                .subscribe(async (res: any) => {
                  (await loading).dismiss();
                  this.subscription.unsubscribe();
                  console.log("Res", res)
                  item.loading = undefined;
                  console.log("Este es el res", res)
                  if (!item.document_id) {
                    item.document_id = res.data.id;
                  }
                  if (!this.currentDocuments.find(d => d.id == item.id)) {
                    this.currentDocuments.push(item);
                    localStorage.setItem("currentDocuments", JSON.stringify(this.currentDocuments))
                  }
                  if (this.getDocumentsComplete()) {
                    const documents_profile = this.currentDocuments.find(d => d["document_type_id "] == 21);
                    if (documents_profile) {
                      if (!this.documents_verified) {
                        this.realtime.getStatus().update({
                          verified: this.auth.user.verified,
                          documents: 1
                        })
                        this.ui.presentAlert({
                          mode: 'ios',
                          header: "Ha completado su registro exitosamente",
                          buttons: [
                            {
                              text: 'Aceptar',
                              cssClass: 'secondary',
                              handler: () => {
                                this.router.navigate(['/tabs/home']);
                                console.log('cerrar');
                              }
                            }
                          ]
                        });
                      }
                    } else {
                      this.ui.presentAlert({
                        mode: 'ios',
                        header: "Ha completado los registros del vehiculo, falta la foto de perfil",
                        buttons: [
                          {
                            text: 'Aceptar',
                            cssClass: 'secondary',
                            handler: () => {
                              this.router.navigate(['/tabs/profile']);
                              console.log('cerrar');
                            }
                          }
                        ]
                      });
                    }
                  }

                },
                  async (err: any) => {
                    (await loading).dismiss();
                    this.subscription.unsubscribe();

                    item.loading = undefined;
                    item.url = current_photo_url;
                    console.log("Error", err)
                    // this.ui.showToast("Archivo" + (image_to_upload && image_to_upload != null) ? image_to_upload.name : 'No existe')
                    try {
                      if (err.status == 400) {
                        let message = err.error ? err.error.messages ? err.error.messages : 'Hubo un error y no hay message' : "Bad Request";
                        message + "<br> " + JSON.stringify(err)
                        this.ui.presentAlert({
                          mode: 'ios',
                          header: "Hubo un error",
                          message,
                          buttons: [
                            {
                              text: 'Aceptar',
                              cssClass: 'secondary',
                              handler: () => {
                              }
                            }
                          ]
                        });
                        return;
                      }
                      if (err.status == 500) {
                        this.ui.presentAlert({
                          mode: 'ios',
                          header: "Hubo un error",
                          message: "En el servidor",
                          buttons: [
                            {
                              text: 'Aceptar',
                              cssClass: 'secondary',
                              handler: () => {
                              }
                            }
                          ]
                        });
                        return;
                      }

                      this.ui.presentAlert({
                        mode: 'ios',
                        header: "Hubo un error no es el error",
                        message: JSON.stringify(err),
                        buttons: [
                          {
                            text: 'Aceptar',
                            cssClass: 'secondary',
                            handler: () => {
                            }
                          }
                        ]
                      });
                    } catch (e) {
                      this.ui.presentAlert({
                        mode: 'ios',
                        header: "Hubo un error de código",
                        message: e,
                        buttons: [
                          {
                            text: 'Aceptar',
                            cssClass: 'secondary',
                            handler: () => {
                            }
                          }
                        ]
                      });
                    }




                  })
            } else {
              this.ui.showToast("Debe ser un archivo");
            }
          }
        })
      } else {
        this.ui.showToast("Verifique su conexión")
      }
    } catch (err) {
      console.log("Error", err)
    }

  }

  getOtherSuccesfull() {
    return this.others.length == 2;
  }

  async updateImage(item) {
    if (this.network.getNetworkStatus().connected) {
      const modal = await this.ui.presentModal(OtherDocumentsPage, { img: item, others: this.others })
      const m = await modal.onDidDismiss();

      this.ionViewWillEnter();
    } else {
      this.ui.showToast("Verifique su conexión");
    }

  }

  async getFile() {
    if (this.network.getNetworkStatus().connected) {
      const modal = await this.ui.presentModal(OtherDocumentsPage, { documents: this.imgs, others: this.others })
      const m = await modal.onDidDismiss();

      this.ionViewWillEnter();
    } else {
      this.ui.showToast("Verifique su conexión");
    }

  }

}
