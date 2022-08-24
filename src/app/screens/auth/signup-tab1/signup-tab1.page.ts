import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { City } from 'src/app/interfaces/City';
import { FormBuilder, Validators } from '@angular/forms';
import { ComparePassword } from 'src/app/validators/passwod.validator';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { NetworkStatusService } from 'src/app/services/network-status.service';

@Component({
  selector: 'app-signup-tab1',
  templateUrl: './signup-tab1.page.html',
  styleUrls: ['./signup-tab1.page.scss'],
})
export class SignupTab1Page implements OnInit {
  view = false
  view_confirm = false
  cities = [];
  city: any = {};
  types = []
  type: any = {
    id: "",
    name: ""
  }
  /**
   * dni_type_id: information.typeId,
          dni: information.identification,
   */
  personal_information = this.fb.group({
    names: ['', Validators.required],
    lastnames: ['', Validators.required],
    address: ['', Validators.required],
    dni_type_id: [10, Validators.required],
    dni: ['', Validators.required],
    city: [4, Validators.required],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')],],
    email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    password_confirm: ['', Validators.required],
  },
    {
      validators: ComparePassword("password", "password_confirm")
    }
  );
  constructor(private requestService: RequestService,
    private fb: FormBuilder, private router: Router, private ui: UiService, private network: NetworkStatusService) {
    let person: any = {}
    if (localStorage.getItem("personal_information")) {
      person = JSON.parse(localStorage.getItem("personal_information"));
      console.log("City id", person.city.id)
      this.personal_information
        .setValue({
          names: person.names,
          lastnames: person.lastnames,
          address: person.address,
          city: person.city.id,
          phone: person.phone,
          email: person.email,
          password: person.password,
          password_confirm: person.password_confirm,
          dni: person.dni ? person.dni : '',
          dni_type_id: person.dni_type_id ? person.dni_type_id : 10
        });
    }
  }

  getSelected(item) {
    return item.id == this.controls.city.value;
  }

  setView(){
    this.view = !this.view;
  }

  setViewConfirm(){
    this.view_confirm = !this.view_confirm;
  }

  async ngOnInit() {
    if (this.network.getNetworkStatus().connected) {
      const loader = await this.ui.loading("Por favor espere...");
      this.requestService.get('indexcities')
        .subscribe(async (res: any) => {

          this.cities = res.data;
          this.city = this.cities.find(c => c.id == this.controls.city.value);
          this.controls.city.valueChanges.subscribe((res => {
            console.log("Change city", res)
            this.city = this.cities.find(c => c.id == res);
            console.log("Change city", this.city)
          }))
          this.requestService.get('list/attributes?parameter_id=4').subscribe(async (res: any) => {

            (await loader).dismiss();
            this.types = res.data;
            this.type = this.types.find(t => t.id == 10)
            if (localStorage.getItem("personal_information")) {
              const person = JSON.parse(localStorage.getItem("personal_information"));
              this.type = this.types.find(t => t.id == person.dni_type_id)
            }
            this.controls.dni_type_id.valueChanges.subscribe(res => {
              this.type = this.types.find(t => t.id == res)
            })
          }, async (err: any) => {
            (await loader).dismiss();
          })

        }, err => {
          this.requestService.get('list/attributes?parameter_id=4').subscribe(async (res: any) => {

            (await loader).dismiss();
            this.types = res.data;
            this.type = this.types.find(t => t.id == 10)
            if (localStorage.getItem("personal_information")) {
              const person = JSON.parse(localStorage.getItem("personal_information"));
              this.type = this.types.find(t => t.id == person.dni_type_id)
            }
            this.controls.dni_type_id.valueChanges.subscribe(res => {
              this.type = this.types.find(t => t.id == res)
            })
          }, async (err: any) => {
            (await loader).dismiss();
          })
        })

    }else{
      this.ui.showToast("Verifica tu conexión")
    }

  }



  get controls() {
    return this.personal_information.controls;
  }

  async next() {
    const obj = {
      ...this.personal_information.value,
    }
    obj.city = this.city;
    if (this.personal_information.valid) {
      localStorage.setItem("personal_information", JSON.stringify(obj));
      this.router.navigate(["/signup/tab2"])
    }
  }

}
