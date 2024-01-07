import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MessageService } from '../services/message.service';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm!: FormGroup;
 isPassHide = true;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private message: MessageService,
    private loader: LoaderService,
    private router: Router,

  ) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }); 
  }

  ngOnInit() {
  }

  onLogin(){
    this.loader.showLoader();
    console.log(this.loginForm.value)
    this.api.login(this.loginForm.value).subscribe({
      next: (response) => {
        // Handle successful login response here
        console.log('Login successful', response);
        if(response.status == true){
        this.message.successMessage('Logged in Successfully')
        this.router.navigate(['home'])
        this.loader.hideLoader();
      }else{
        this.message.errorMessage(response.error)
        this.loader.hideLoader();
      }
        // this.message.successMessage(response.)
      },
      error: (error) => {
        // Handle login error here
        console.error('Login error', error);
        this.loader.hideLoader();
        // this.message.errorMessage(error.error)
      }
    })
    // isPassHidden = 
  }

}
