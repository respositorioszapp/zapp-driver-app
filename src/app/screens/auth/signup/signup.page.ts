import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  routes = {
    "/signup/tab1" : "/login",
    "/signup/tab2" : "/signup/tab1",
    "/signup/tab3" : "/signup/tab2",
    "/signup/tab4" : "/signup/tab3",
    "/signup/forgotpassword" : "/login"
  }
  constructor(private active :Router) { }

  ngOnInit() {
    console.log("Url",this.active.url)
  }

  back(){
    console.log("ggdgdg")
    const url = this.routes[this.active.url];
    this.active.navigate([url]);
  }

}
