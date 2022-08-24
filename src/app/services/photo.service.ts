import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

import { Subject, BehaviorSubject } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';
import { UiService } from './ui.service';
const { FilePicker } = Plugins;

const { Camera } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  imageSubject: BehaviorSubject<any> = new BehaviorSubject<any>({})
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private ui: UiService) { }

  async takePicture(source: CameraSource) {
    try {
      localStorage.setItem("takingPhoto", "yes")
      const image = await Camera.getPhoto({
        quality: 60,
        allowEditing: false,
        correctOrientation: true,
        promptLabelPhoto: 'Elegir de la galería',
        promptLabelPicture: 'Tomar foto',
        resultType: CameraResultType.DataUrl,
        source

      });


      this.imageSubject.next(image);
      localStorage.removeItem("takingPhoto");
      this.imageSubject.complete();
      this.imageSubject = new BehaviorSubject<any>({})
    } catch (e) {
      console.log("Error", e);
      localStorage.removeItem("takingPhoto");
      this.imageSubject.complete();
      this.imageSubject = new BehaviorSubject<any>({})
    }

  }

  async selectImageSource() {
    const buttons = [
      {
        text: 'Tomar foto',
        icon: 'camera',
        handler: () => {
          this.takePicture(CameraSource.Camera);
        }
      },
      {
        text: 'Elegir galeria',
        icon: 'image',
        handler: () => {
          this.takePicture(CameraSource.Photos);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.imageSubject.complete();
          this.imageSubject = new BehaviorSubject<any>({})
        }
      }
    ];

    // Only allow file selection inside a browser


    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      header: 'Escoger',
      buttons
    });
    await actionSheet.present();
  }



  dataUrlToBlob(dataUrl): Blob {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  blobToDataUrl(blob:Blob){
    return new Promise((resolve, reject) => {
      const reader= new FileReader;
      reader.onerror= reject;
      reader.onload = ()=>{
        resolve(reader.result)
      };
      reader.readAsDataURL(blob);
    })
  }

  getFileImage(dataUrl, name, format, useFormat?) {
    const type = useFormat ? format : `image/${format}`;
    console.log("Type", type)
    const options: FilePropertyBag = {
      type,
    };
    return new File([this.dataUrlToBlob(dataUrl)], name, { type });
  }

  getFileImageByBlob(blob, name, format, useFormat?) {
    const type = useFormat ? format : `image/${format}`;
    console.log("Type", type)
    const options: FilePropertyBag = {
      type
    };
    return new File([blob], name, options);
  }
}
