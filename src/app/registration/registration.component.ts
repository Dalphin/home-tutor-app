import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  rmodel: any = {};
  returnUrl: string;
  isLogin: Boolean = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  gotoRegister() {
    this.isLogin = false;
  }

  gotoLogin() {
    this.isLogin = true;
  }

  login() {
    console.info(this.model, " Form values :::: ");
    this.router.navigate(['/dashboard']);
        /*this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    //this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        */
    }
    
    register(form) {
      console.info(this.rmodel, " Form values :::: ", form);
    }

}
