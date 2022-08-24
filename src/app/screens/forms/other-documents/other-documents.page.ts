import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Validators, FormBuilder } from '@angular/forms';
import { PhotoService } from 'src/app/services/photo.service';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';

import { NetworkStatusService } from 'src/app/services/network-status.service';

@Component({
  selector: 'app-other-documents',
  templateUrl: './other-documents.page.html',
  styleUrls: ['./other-documents.page.scss'],
})
export class OtherDocumentsPage implements OnInit {
  @Input() documents: any[]
  document: any = {
    id: "",
    name: ""
  }

  @Input() others: any[]

  @Input() img: any


  document_information = this.fb.group({
    document_type: ['', Validators.required],
  },
  );
  other_documents: any[] = []
  constructor(private ui: UiService, private fb: FormBuilder,
    private photo: PhotoService,
    private auth: AuthService,
    private request: RequestService,
    private network: NetworkStatusService
  ) { }

  async ngOnInit() {
    if (this.img) {
      this.document_information.setValue({
        document_type: this.img["document_type_id "]
      })
    } else {
      if (this.network.getNetworkStatus().connected) {
        const loader = await this.ui.loading("Por favor espere...");
        this.request.get('list/attributes?parameter_id=8').subscribe(async (res: any) => {
          this.documents = res.data;
          (await loader).dismiss();
        }, async err => {
          (await loader).dismiss();
        })
      } else {
        this.ui.showToast("Verifique su conexión")
      }
    }


  }

  dismiss() {
    this.ui.dismiss()
  }

  async takePhoto() {
    try {
      if (this.network.getNetworkStatus().connected) {
        await (await this.photo.selectImageSource());
        this.photo.imageSubject.subscribe(image => {
          const url = `driver/documents/${this.auth.user.id}/32`;
          const dat = new Date().getTime();
          const name_file1 = `${dat}_${this.auth.user.id}.${image.format}`;
          const blob_image = this.photo.dataUrlToBlob(image.url);
          const image_to_upload = this.photo.getFileImage(image.url, name_file1, image.format);
          let data = new FormData();
          data.append('photo', blob_image);
          this.request.post(url, data).subscribe(async (res: any) => {
            console.log("Este es el res", res)
            this.ui.showToast("Documento subido", () => {
              this.dismiss();
            })
          },
            async (err: any) => {
              if(err.status == 400){
                const error = JSON.stringify(err.error);
                const message = err.error.messages ? err.error.messages[0].length == 1 ? err.error.messages :err.error.messages[0] : 'No hay mensaje'
                await this.ui.presentAlert({
                  mode: 'ios',
                  header: message,
                  buttons: [
                    {
                      text: 'Aceptar',
                      handler: () => { }
  
                    }
                  ]
                })
              }
              
            })
        })
      } else {
        this.ui.showToast("Verifique su conexión")
      }


    } catch (err) {
      console.log("Error", err)
    }

  }

  async getFile() {
    if (this.document_information.valid) {
      const { document_type } = this.document_information.value
      if (this.network.getNetworkStatus().connected) {
        await (await this.photo.selectImageSource());
        this.photo.imageSubject.subscribe(async (image) => {
          if (this.img) {
            this.img.url = image.dataUrl;
          }
          const url = this.img ? `driver/update_documents/${this.img.document_id}` : `driver/documents/${this.auth.user.id}/${document_type}`;
          let data = new FormData();
          const dat = new Date().getTime();
          const name_file1 = `${dat}_${this.auth.user.id}.${image.format}`;
          const blob_image = this.photo.dataUrlToBlob(image.dataUrl);
          const image_to_upload = this.photo.getFileImage(image.dataUrl, name_file1, image.format);
          data.append('photo', blob_image);
          const loader = await this.ui.loading("Por favor espere...");
          this.request.post(url, data).subscribe(async (res: any) => {
            (await loader).dismiss()
            if (this.img) {
              const find = this.others.findIndex(o => o.document_id == this.img);
              if (find != -1) {
                this.others[find] = this.img;
              }
            } else {
              this.others.push({
                url: image.dataUrl,
              })
            }
            await this.ui.presentAlert({
              mode: 'ios',
              header: '¡Archivo subido con éxito!',
              buttons: [
                {
                  text: 'Aceptar',
                  handler: () => { }
                }
              ]
            })
          }, async (err: any) => {
            (await loader).dismiss()
            if(err.status == 400){
              const error = JSON.stringify(err.error);
              const message = err.error.messages ? err.error.messages[0].length == 1 ? err.error.messages :err.error.messages[0] : 'No hay mensaje'
              await this.ui.presentAlert({
                mode: 'ios',
                header: message,
                buttons: [
                  {
                    text: 'Aceptar',
                    handler: () => { }

                  }
                ]
              })
            }
            console.log("Err", err)
          })
        })
      }else{
        this.ui.showToast("Verifique su conexión");  
      }
    }else{
      this.ui.showToast("Debe escoger un tipo de documento");
    }
  }

}
