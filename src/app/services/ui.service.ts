import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController, ModalController, ActionSheetController } from '@ionic/angular';
import { AlertOptions, Filesystem, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private loader;
  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
    private callNumber: CallNumber,
    private actionSheetCtrl: ActionSheetController
  ) { }

  async loading(message, duration?) {
    const loader = await this.loadingController.create({
      mode: 'ios',
      message,
      //Set the maximum duration to load the current loader
      duration:duration || 10000
    });
    
    //Finish the loader no matter if it not finish the operation
    setTimeout(async ()=>{
      (loader).dismiss();
    },10000);
    await loader.present();
    return loader;
  }

  async loadingDissmiss() {
    (await this.loader).dismiss();
  }

  call(number: string) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(async err => {
        await this.presentAlert({
          mode: 'ios',
          header: 'No se ha podido iniciar la llamada',
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
      });
  }

  async presentActionSheet(header, buttons) {


    // Only allow file selection inside a browser


    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      header,
      buttons
    });

    await actionSheet.present();
    return actionSheet;
  }

  async presentAlert(opttion: any) {
    const alert = await this.alertController.create({...opttion,mode:'ios'});

    await alert.present();
    return alert;
  }

  async presentModal(component, properties?, cssClass = 'my-custom-class') {
    const modal = await this.modalController.create({
      component,
      cssClass,
      componentProps: properties

    });
    await modal.present();
    return modal;
  }



  dismiss(obj?) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      obj
    });
  }

  async showToast(message, action?) {
    const toast = await this.toastController.create({ message, duration: 3000, position: 'bottom', },);
    toast.present();
    if (action) {
      toast.onDidDismiss().then(() => {
        action()
      })
    }
  }

  async fileRead() {
    let contents = await Filesystem.readFile({
      path: 'secrets/text.txt',
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8
    });
    console.log(contents);
  }

}
