import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NetworkStatusService } from 'src/app/services/network-status.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {
  cities = [];
  city: any = {};
  types = []
  type: any = {
    id: "",
    name: ""
  }
  //[{ value: '', disabled: true }, Validators.required]
  personal_information = this.fb.group({
    dni_type_id: [10, Validators.required],
    dni: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    address: ['', Validators.required],
    city: [4,],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')],],
    email: ['', [Validators.required, Validators.email]],
  }
  );
  objectChange = false
  constructor(private requestService: RequestService,
    private fb: FormBuilder, private router: Router, private ui: UiService,
    private auth: AuthService,
    private network: NetworkStatusService) { }

  async ngOnInit() {

  }

  async ionViewWillEnter() {
    const {
      dni_type_id,
      dni,
      address,
      city_id,
      email,
      first_name,
      last_name,
      phone,
    } = this.auth.person;
    this.personal_information.setValue({
      dni_type_id: dni_type_id ? dni_type_id : 10,
      dni: dni ? dni : '',
      address,
      first_name,
      city: city_id ? city_id : 4,
      email,
      last_name,
      phone
    })
    if (this.network.getNetworkStatus().connected) {
      const loader = await this.ui.loading("Por favor espere...");
      this.requestService.get('indexcities')
        .subscribe(async (res: any) => {

          this.cities = res.data;
          const obj = {
            dni_type_id: dni_type_id ? dni_type_id : 10,
            dni: dni ? dni : '',
            address,
            city: city_id,
            email,
            first_name,
            last_name,
            phone
          }
          this.city = this.cities.find(c => c.id == city_id);
          this.controls.city.valueChanges.subscribe((res => {
            console.log("Change city", res)
            this.city = this.cities.find(c => c.id == res);
            console.log("Change city", this.city)
          }))
          this.personal_information.valueChanges.subscribe(res => {
            console.log("Objeto", obj)
            console.log("Res", res)

            const y = Object.keys(obj).find(key => {
              return obj[key] != res[key]
            })
            if (y) {
              this.objectChange = true;
            } else {
              this.objectChange = false;
            }

          });
          this.requestService.get('list/attributes?parameter_id=4').subscribe(async (res: any) => {

            (await loader).dismiss();
            this.types = res.data;
            const id = this.auth.person.dni_type_id ? this.auth.person.dni_type_id : 10
            this.type = this.types.find(t => t.id == id)
            this.controls.dni_type_id.valueChanges.subscribe(res => {
              this.type = this.types.find(t => t.id == res)
            })
          }, async (err: any) => {
            (await loader).dismiss();
          })
        }, async err => {
          (await loader).dismiss();
        })
    } else {
      this.ui.showToast("Verifique su conexión")
    }

  }

  get controls() {
    return this.personal_information.controls;
  }

  getSelected() {

  }

  back() {
    this.router.navigate(['/tabs/profile'])
  }

  async update() {
    if (this.objectChange) {
      if (this.personal_information.valid) {
        if (this.network.getNetworkStatus().connected) {
          const loader = await this.ui.loading("Por favor espere...");

          const {
            dni_type_id,
            dni,
            first_name,
            last_name,
            address,
            phone,
            email,
            city_id,
          } = this.personal_information.value;
          const obj = {
            dni_type_id,
            dni,
            user_id: this.auth.user.id,
            role_id: 5,
            first_name,
            last_name,
            address,
            phone,
            email,
            city_id: this.city.id,
            country: "CO",
            state_id: this.city.state_id,
            transport_type_id: this.auth.vehicles.transport_type_id,
            model: this.auth.vehicles.model,
            brand: this.auth.vehicles.brand,
            color: this.auth.vehicles.color,
            plate: this.auth.vehicles.plate,
            year: this.auth.vehicles.year,
          }
          console.log("Obj", obj)
          this.requestService.post('driver/update_driver', obj)
            .subscribe(async (res: any) => {
              (await loader).dismiss()
              this.auth.setPerson({
                dni_type_id,
                dni,
                first_name,
                last_name,
                address,
                phone,
                email,
                city_id: this.city.id,
                country: "CO",
                state_id: this.city.state_id,

              })
              this.ui.showToast("Usuario actualizado exitosamente", () => {
                this.router.navigate(['/tabs/profile'])
              })
            }, async (err: any) => {
              (await loader).dismiss()
              console.log(err);
              this.ui.showToast(err.error.messages[0]);

            })
        }else{
          this.ui.showToast("Verifique su conexión")
        }
      }

    } else {
      this.ui.showToast("Debe cambiar alguno de los campos");
    }
  }

}
