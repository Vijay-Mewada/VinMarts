import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { ApiService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  registerForm!: FormGroup;
  isPassHide = true;
  isConfirmPassHide = true;
  constructor(
    private fb: FormBuilder,
    private message: MessageService,
    private api: ApiService,
    private loader: LoaderService,
    private router: Router,
  ) { 
    this.registerForm  = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      c_password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  onRegister(){
    this.loader.showLoader();
    console.log(this.registerForm.value)
    this.api.register(this.registerForm.value).subscribe({
      next: (response) => {
        // Handle successful login response here
        console.log('Login successful', response);
        if(response.status == true){
          this.message.successMessage(response.message)
          this.loader.hideLoader();
          this.router.navigate(['login'])
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
      }
    })
  }

}
