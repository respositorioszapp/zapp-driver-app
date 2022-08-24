import { Component, OnInit } from '@angular/core';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { format, add, startOfWeek } from 'date-fns'
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { Capacitor, FilesystemDirectory, Plugins } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';

import { UiService } from 'src/app/services/ui.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
const { Filesystem, Storage } = Plugins;
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { PhotoService } from 'src/app/services/photo.service';
import { MimeTypes } from 'src/app/enums/mime-types.enum';
import { writeFile } from 'capacitor-blob-writer'

@Component({
  selector: 'app-liquidation',
  templateUrl: './liquidation.page.html',
  styleUrls: ['./liquidation.page.scss'],
})
export class LiquidationPage implements OnInit {

  urlDownload: string
  max

  min_date
  max_date

  constructor(private transfer: FileTransfer,
    private file: File,
    private auth: AuthService,
    private http: HttpClient,
    private ui: UiService,
    private iab: InAppBrowser,
    private fileOpener: FileOpener,
    private photo: PhotoService
  ) { }



  ngOnInit() {
  }


  ionViewWillEnter() {
    // this.min_date = this.formatDated(y);
    // console.log("Fecha min", this.min_date)

    // this.max_date = this.formatDated(maxf);
    const today = new Date();
    //This method is for get the first day of a week
    const firstDay = startOfWeek(today);
    this.min_date = this.formatDated(firstDay);
    this.max_date = this.formatDated(today);
  }

  formatDated(date) {
    let d = new Date(date),
      day = '' + d.getDate(),
      month = '' + (d.getMonth() + 1),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    console.log("Fecha", [year, month, day].join('-'))
    return [year, month, day].join('-');
  }

  async download() {

    // Download a file:

    //exports_to_excel/liquidation_of_orders_driver?driver_id=6&start_date=2020/12/20&end_date=2020/12/22
    const url = environment.BASEURL + "exports_to_excel/liquidation_of_orders_of_driver?driver_id=" + this.auth.user.id
      + "&start_date=" + this.min_date.split("T")[0]+"T00:00:00" + "&end_date=" + this.max_date.split("T")[0] + "T23:59:00";
    const loader = await this.ui.loading("Por favor espere...")
    this.http.get(url, { responseType: 'blob' }).subscribe(async res => {
      
      try {
        console.log("File", res)
        const file_name = "Liquidacion" + new Date().getTime() + ".xlsx";
        // const base64 = await this.photo.blobToDataUrl(res) as string;
        (await loader).dismiss()
        //Save File
        // const savedFile = await Filesystem.writeFile({
        //   path: file_name,
        //   data: base64,
        //   directory: FilesystemDirectory.Documents
        // })
        const { uri } = await writeFile({
          path: file_name,
          directory: FilesystemDirectory.Data,
      
          // data must be a Blob (creating a Blob which wraps other data types
          // is trivial)
          data: res,
      
          // create intermediate directories if they don't already exist
          // default: false
          recursive: true,
      
          // fallback to Filesystem.writeFile instead of throwing an error
          // (you may also specify a unary callback, which takes an Error and returns
          // a boolean)
          // default: true
          fallback: (err) => {
            return err != undefined
          }
        })

        console.log("Saved File", uri)
        //Save the file url to show it
        const path = uri;
        //Set the mime type for excel
        const mimeType = MimeTypes.Excel.toString();


        if (Capacitor.platform !== 'web') {
          this.fileOpener.open(path, mimeType)
            .then(() => { console.log("File is opened") })
            .catch((err) => { console.log("Error opening file", err) })
        }
      } catch (e) {
        (await loader).dismiss()
        this.ui.showToast("Error", e)
      }
      this.ui.showToast("Descargado")

    }, async err => {
      (await loader).dismiss()
      this.ui.showToast("El mensajero no tiene liquidación en este rango");
    });




  }





}
