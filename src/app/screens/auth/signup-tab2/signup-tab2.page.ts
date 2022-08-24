import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { CommonAtrributesService } from 'src/app/services/common-atrributes.service';
import { NetworkStatusService } from 'src/app/services/network-status.service';


@Component({
  selector: 'app-signup-tab2',
  templateUrl: './signup-tab2.page.html',
  styleUrls: ['./signup-tab2.page.scss'],
})
export class SignupTab2Page implements OnInit {
  transport_types = []
  personal_information: any = {

  }
  transpot_type: any = {}
  vehicle_information = this.fb.group({
    vehicle_type: ['', Validators.required],
    plate: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    brand: ['', Validators.required],
    model: ['', [Validators.required,]],
    color: ['', [Validators.required]],
    year: [new Date().getFullYear(), [Validators.required]],
    terms: [false, [Validators.requiredTrue]]
  })
  constructor(private fb: FormBuilder,
    private request: RequestService,
    private router: Router,
    private ui: UiService,
    public common: CommonAtrributesService,
    private network: NetworkStatusService
  ) {


  }

  plateOnChange() {
    let plate: string = this.vehicle_information.value.plate;
    plate = plate.toUpperCase();
    if (plate.length > 6) {
      plate = plate.substring(0, 6)
    }
    this.controls.plate.setValue(plate);
  }

  async ngOnInit() {
    

    if (localStorage.getItem("personal_information")) {
      this.personal_information = JSON.parse(localStorage.getItem("personal_information"));
    }

    if (this.network.getNetworkStatus().connected) {
      const loader = await this.ui.loading("Por favor espere...");
      this.request.get('list/attributes?parameter_id=2')
        .subscribe(async (res: any) => {
          this.transport_types = res.data;
          if (localStorage.getItem("vehicle_information")) {

            const vehicle = JSON.parse(localStorage.getItem("vehicle_information"));

            this.vehicle_information.setValue({
              vehicle_type: vehicle.vehicle_type,
              plate: vehicle.plate,
              brand: vehicle.brand,
              model: vehicle.model,
              color: vehicle.color,
              year: new Date().getFullYear(),
              terms: false
            })
            this.transpot_type = this.transport_types.find(t => t.id == vehicle.vehicle_type);
            this.controls.vehicle_type.valueChanges.subscribe(res => {
              this.transpot_type = this.transport_types.find(t => t.id == res);
            })
          }
          (await loader).dismiss()
        },
          async (err: any) => {
            console.log("Error", err);
            (await loader).dismiss()
          })
    } else {
      this.ui.showToast("Verifique su conexión");
    }
  }

  get controls() {
    return this.vehicle_information.controls;
  }

  async save() {
    if (this.vehicle_information.valid) {

      this.personal_information = {
        ...this.personal_information,
        ...this.vehicle_information.value
      }
      this.personal_information.plate = this.personal_information.plate.toUpperCase()
      console.log(this.personal_information);
      localStorage.setItem("vehicle_information", JSON.stringify(this.vehicle_information.value));
      if (this.network.getNetworkStatus().connected) {
        const loader = await this.ui.loading("Por favor espere...");
        const obj = {
          dni: this.personal_information.dni,
          dni_type_id: this.personal_information.dni_type_id,
          role_id: 5,
          first_name: this.personal_information.names,
          last_name: this.personal_information.lastnames,
          address: this.personal_information.address,
          phone: this.personal_information.phone,
          email: this.personal_information.email,
          city_id: this.personal_information.city.id,
          country: "CO",
          state_id: this.personal_information.city.state_id,
          password: this.personal_information.password,
          password_confirmation: this.personal_information.password_confirm,
          transport_type_id: this.personal_information.vehicle_type,
          model: this.personal_information.model,
          brand: this.personal_information.brand,
          color: this.personal_information.color,
          plate: this.personal_information.plate,
          year: this.vehicle_information.value.year
        }
        console.log("Obj", obj)

        this.request.post('driver/create_driver', obj)
          .subscribe(async (res: any) => {
            (await loader).dismiss();
            localStorage.removeItem("personal_information")
            localStorage.removeItem("vehicle_information")
            this.ui.showToast("Usuario creado exitosamente", () => {
              this.router.navigate(['/login'])
            })
          }, async (err: any) => {
            (await loader).dismiss();
            console.log(err);
            if(err.status == 400){
              if(err.error){
                if(err.error.messages){
                  this.ui.showToast(err.error.messages[0]);
                }
                return;
              }
            }
            this.ui.showToast("Ha ocurrido un error en el servidor");


            
          })
      } else {
        this.ui.showToast("Verifique su conexión");
      }
    } else {
      if (this.controls.terms.invalid) {
        await this.ui.presentAlert({
          mode: 'ios',
          header: 'Debe aceptar los términos y condiciones',
          buttons: [
            {
              text: 'Aceptar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {

              }
            }
          ]
        })
      }
    }

  }

}
