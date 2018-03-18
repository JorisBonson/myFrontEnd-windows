import {Component, OnInit } from '@angular/core';
import {AuthRegisterService} from '../../services/auth-register.service';
import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';
import {ValidationMessage} from '../../models/validationMessage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private  registerService: AuthRegisterService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.registerService.create(this.model)
      .subscribe(
        data => {  const returnedMessage = data as ValidationMessage;

                   if (returnedMessage.success) {

                   console.log('Registration worked');
                   this.alertService.success('Registration successful', true);
                  // noinspection JSIgnoredPromiseFromCall
                   this.router.navigate(['/login']);
                } else {
                  console.log('Error from registration : ' + returnedMessage.msg);
                  this.alertService.error(returnedMessage.msg);
                }

        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        })    ;
  }

}
