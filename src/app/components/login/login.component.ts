import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _authService = inject(AuthService);
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _router = inject(Router);

  msError: string = "";
  isLoading: boolean = false;
  msSuccess: boolean = false;

  loginForm:FormGroup = this._formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]]
  });

     loginSubmit():void
     {
      if(this.loginForm.valid){
        this.isLoading = true;
        this._authService.setLoginForm(this.loginForm.value).subscribe({
          next: (response) => {
            console.log(response);
            if(response.message == "success"){
              this.msSuccess = true;
              localStorage.setItem('userToken', response.token);
              this._authService.saveUserData();
              setTimeout(() => {
              this._router.navigate(['/home']);
            }, 2000);
          }
          this.isLoading = false;
        },
        error: (err:HttpErrorResponse) => {
          this.msError = err.error.message;
            console.log(err);
            this.isLoading = false;
          }
        });
      }
      else{
        this.loginForm.setErrors({mismatch: true});
        this.loginForm.markAllAsTouched();
      }
    }


}
