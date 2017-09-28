
import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private ValidateService: ValidateService,
  private authService: AuthService,
  private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    //required Fields
    if(!this.ValidateService.validateRegister(user)){
      return false;
    }

    if(!this.ValidateService.validateEmail(user.email)){
      return false;
    }
    //Register User

    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
       console.log('Login Successful', {timeout: 3000});
        this.router.navigate(['/login']);
      }else{
        console.log('Login Unsuccessful', {timeout: 3000});
        this.router.navigate(['/register']);

      }
    });
  }
}
