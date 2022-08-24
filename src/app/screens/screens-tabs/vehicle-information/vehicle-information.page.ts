import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { AuthService } from 'src/app/services/auth.service';
import { CommonAtrributesService } from 'src/app/services/common-atrributes.service';
import { LoadingController } from '@ionic/angular';
import { NetworkStatusService } from 'src/app/services/network-status.service';

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.page.html',
  styleUrls: ['./vehicle-information.page.scss'],
})
export class VehicleInformationPage implements OnInit {
  transport_types = []
  personal_information: any = {

  }
  transport_type: any = {}
  vehicle_information = this.fb.group({
    transport_type_id: ['', Validators.required],
    plate: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    brand: ['', Validators.required],
    model: ['', [Validators.required]],
    year: [2020, [Validators.required]],
    color: ['', [Validators.required]],
  })
  objectChange = false
  constructor(private fb: FormBuilder,
    private request: RequestService,
    private router: Router,
    private ui: UiService,
    private auth: AuthService,
    public common: CommonAtrributesService,
    private loadingController: LoadingController,
    private network: NetworkStatusService) { }

  async ngOnInit() {

  }

  async ionViewWillEnter() {
    if (this.network.getNetworkStatus().connected) {
      const loader = await this.loadingController.create({ message: "Por favor espere..." });
      await loader.present();
      this.request.get('list/attributes?parameter_id=2')
        .subscribe(async (res: any) => {
          this.transport_types = res.data;
          if (this.auth.vehicles) {
            let {
              brand,
              color,
              model,
              plate,
              transport_type_id,
              year
            } = this.auth.vehicles;
            this.transport_type = this.transport_types.find(t => t.name == transport_type_id || t.id == transport_type_id);
            transport_type_id = this.transport_type.id;
            this.vehicle_information.setValue({
              brand,
              color,
              model,
              plate,
              transport_type_id: this.transport_type.id,
              year: Number(year)
            })
            const obj = {
              brand,
              color,
              model,
              plate,
              transport_type_id,
              year
            }
            this.vehicle_information.valueChanges.subscribe(res => {
              const y = Object.keys(obj).find(key => {
                return obj[key] != res[key]
              })
              if (y) {
                this.objectChange = true;
              } else {
                this.objectChange = false;
              }

            });
          } else {
            this.objectChange = true;
          }

          this.controls.transport_type_id.valueChanges.subscribe(res => {
            this.transport_type = this.transport_types.find(t => t.id == res);
          });

          (await loader).dismiss();
        }, async (error: any) => {
          (await loader).dismiss();
          console.log("Error", error);
        })
    }else{
      this.ui.showToast("Verifique su conexión");
    }
  }

  get controls() {
    return this.vehicle_information.controls;
  }

  plateOnChange() {
    let plate: string = this.vehicle_information.value.plate;
    plate = plate.toUpperCase();
    if (plate.length > 6) {
      plate = plate.substring(0, 5)
    }
    this.controls.plate.setValue(plate);
  }

  back() {
    this.router.navigate(['/tabs/profile'])
  }

  save() {
    if (this.objectChange) {
      if (this.vehicle_information.valid) {
        if (this.network.getNetworkStatus().connected) {
          this.ui.loading("Por favor espere...");
          const {
            brand,
            color,
            model,
            plate,
            transport_type_id,
            year
          } = this.vehicle_information.value;
          const obj = {
            user_id: this.auth.user.id,
            role_id: 5,
            dni_type_id: this.auth.person.dni_type_id,
            dni: this.auth.person.dni,
            first_name: this.auth.person.first_name,
            last_name: this.auth.person.last_name,
            address: this.auth.person.address,
            phone: this.auth.person.phone,
            email: this.auth.person.email,
            city_id: this.auth.person.city_id,
            country: "CO",
            state_id: this.auth.person.state_id,
            transport_type_id,
            model,
            brand,
            color,
            plate,
            year
          }
          console.log("Obj", obj)
          this.request.post('driver/update_driver', obj)
            .subscribe((res: any) => {
              this.ui.loadingDissmiss()
              this.auth.setVehicles({
                transport_type_id,
                model,
                brand,
                color,
                plate,
                year
              })
              this.ui.showToast("Usuario actualizado exitosamente", () => {
                this.router.navigate(['/tabs/profile'])
              }
              )
            }, (err: any) => {
              this.ui.loadingDissmiss();
              console.log(err);
              this.ui.showToast(err.error.messages[0]);

            })
        } else {
          this.ui.showToast("Verifique su conexión")
        }
      }
    } else {
      this.ui.showToast("Debe cambiar alguno de los campos");
    }

  }
}
