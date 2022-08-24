import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { NetworkStatusService } from 'src/app/services/network-status.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email_data: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private ui: UiService,
    private auth: AuthService,
    private router: Router,
    private request: RequestService,
    private network: NetworkStatusService
  ) { }

  ngOnInit() {
  }

  async sendEMail() {
    if (this.email_data.valid) {
      if (this.network.getNetworkStatus().connected) {
        const loader = await this.ui.loading("Por favor espere...");
        this.request.post('restore_password', this.email_data.value)
          .subscribe(async (res: any) => {
            (await loader).dismiss()
            this.ui.showToast("Contraseña restablecida. Verifique su correo", () => {
              this.router.navigate(['/login'])
            })
          }, async (error: any) => {
            (await loader).dismiss()
            this.ui.showToast("Ha ocurrido un error al intentar restablecer la contraseña.")
            console.log(error)
          })
      } else {
        this.ui.showToast("Verifique su conexión");
      }
    }
  }

  get controls() {
    return this.email_data.controls;
  }

}
