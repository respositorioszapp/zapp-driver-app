import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { RequestService } from 'src/app/services/request.service';
import { PhotoService } from 'src/app/services/photo.service';
import { RealtimeService } from 'src/app/services/realtime.service';
import { Router } from '@angular/router';
import { NetworkStatusService } from 'src/app/services/network-status.service';
import { DaysService } from 'src/app/services/days.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  image = "assets/imgs/avatar.svg"
  document_id
  currentDOcuments: any[]
  score = 0
  travels = 0
  antiquity = "0 días"
  level = {
    level_id: 1,
    level_name:  "BRONCE"
  }
  
  constructor(public auth: AuthService,
    private ui: UiService,
    private request: RequestService,
    private photo: PhotoService,
    private realtime: RealtimeService,
    private router: Router,
    private network: NetworkStatusService,
    private days : DaysService) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.image = "assets/imgs/avatar.svg"
    if (localStorage.getItem("currentDocuments")) {
      this.currentDOcuments = JSON.parse(localStorage.getItem("currentDocuments"));

    }
    if (this.network.getNetworkStatus().connected) {
      const loader = await this.ui.loading("Por favor espere...");
      this.request.get(`driver/documents/${this.auth.user.id}`)
        .subscribe(async (res: any) => {
          const documents = res.data.documents;

          const photo: any[] = documents.filter(d => d["document_type_id "] == 21)
          if (photo.length > 0) {
            this.image = photo[photo.length - 1].url;
            this.document_id = photo[photo.length - 1].document_id

            const obj = {
              id: photo[photo.length - 1].id,
              document_id: photo[photo.length - 1].document_id,
              "document_type ": photo[photo.length - 1]["document_type "],
              "document_type_id ": photo[photo.length - 1]["document_type_id "],
              url: this.image
            }
            if(!this.currentDOcuments){
              this.currentDOcuments = [];
            }
            if (!this.currentDOcuments.find(d => d.id == obj.id)) {
              this.currentDOcuments.push(obj);
            }
            // if (localStorage.getItem("currentDocuments")) {
            //   if (!this.currentDOcuments.find(d => d.id == obj.id)) {
            //     this.currentDOcuments.push(obj);
            //   }
            // }

          }
          (await loader).dismiss()
        }, async (err: any) => {
          console.log("Error", err);
          (await loader).dismiss()
        })
      this.request.get(`driver/show_driver/${this.auth.user.id}`)
      .subscribe((res : any) => {
        console.log("Data", res.data)
        this.score = res.data.score;
        this.travels = res.data.total_services
        this.level = {
          level_id : res.data.level_id,
          level_name : res.data.level_id == 0? "SIN NIVEL": res.data.level_name
        }
        this.auth.user.level_id= this.level.level_id;
        this.auth.setUser(this.auth.user);
        this.antiquity = this.days.formatDays((res.data.seniority_of_delivery));
        console.log("Antiguedad", this.antiquity)
        console.log("Antiguedad fecha",this.days.formatDaysWithDate(res.data.first_order_date))
      })
    } else {
      this.ui.showToast("Verifique su conexión")
    }
  }

  async logOut() {
    await this.ui.presentAlert({
      mode: 'ios',
      header: '¿Está seguro de cerrar la sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sí',
          handler: () => { this.auth.logOut() }

        }
      ]
    })
  }

  goToPolicies(){
    this.router.navigateByUrl("https://zapplogistica.com/politicas/")
    // location.href = "https://zapplogistica.com/politicas/"
  }

  async takePhoto() {
    try {
      if (this.network.getNetworkStatus().connected) {
        const image = await (await this.photo.selectImageSource())
        this.photo.imageSubject.subscribe(async (image) => {
          if (Object.keys(image).length > 0) {
            const current_photo = this.image == "assets/imgs/avatar.svg"
            const current_photo_url = this.image;
            this.image = image.dataUrl;
            const url = !current_photo ? `driver/update_documents/${this.document_id}` : `driver/documents/${this.auth.user.id}/21`;
            const dat = new Date().getTime();
            const name_file1 = `${dat}_${this.auth.user.id}.${image.format}`;
            const blob_image = this.photo.dataUrlToBlob(image.dataUrl);
            const image_to_upload = this.photo.getFileImage(image.dataUrl, name_file1, image.format);
            let data = new FormData();
            data.append('photo', blob_image);
            const loader = await this.ui.loading("Por favor espere...");
            this.request.post(url, data).subscribe(async (res: any) => {
              (await loader).dismiss();
              this.auth.person.photo = res.data.url;
              this.auth.setPerson(this.auth.person);
              const obj = {
                "document_type ": "Foto del conductor",
                "document_type_id ": 21,
                url: this.image
              }
              const v = this.currentDOcuments.find(d => d["document_type_id "] == 21);
              const current_length = this.currentDOcuments.length;
              if (!v) {
                this.currentDOcuments.push(obj);
              } else {
                const index = this.currentDOcuments.findIndex(d => d == v);
                if (index != -1) {
                  this.currentDOcuments[index].url = this.image;
                }
              }
              if (this.auth.user.verified == 0) {
                const res = Math.abs(Number(this.auth.vehicles.year) - new Date().getFullYear());
                if (localStorage.getItem("currentDocuments")) {
                  let length = res <= 2 ? 10 : 9;
                  const min_length = res <= 2 ? 11 : 10
                  console.log("Length", this.currentDOcuments.length)
                  if (this.currentDOcuments.length >= length) {

                    if (current_length < min_length) {
                      this.realtime.getStatus().update({
                        verified: this.auth.user.verified,
                        documents: 1
                      });
                      await this.ui.presentAlert({
                        mode: 'ios',
                        header: '¡Ha completado su registro!',
                        buttons: [
                          {
                            text: 'Aceptar',
                            handler: () => { this.router.navigate(['tabs/home']) }

                          }
                        ]
                      })
                    } else {

                    }
                  } else {
                    await this.ui.presentAlert({
                      mode: 'ios',
                      header: 'Por favor complete sus documentos',
                      buttons: [
                        {
                          text: 'Aceptar',
                          handler: () => { this.router.navigate(['tabs/documents']) }

                        }
                      ]
                    })
                  }
                }
              }


              console.log("Este es el res", res)
            },
              async (err: any) => {
                (await loader).dismiss();
                this.image = current_photo_url;
                this.ui.showToast("No se pudo subir la imagen")
                console.log("Error", err)
              })
          }
        })
      } else {
        this.ui.showToast("Verifique su conexión")
      }
    } catch (e) {
      console.log("Error", e)
    }
  }

}
