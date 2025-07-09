import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {

  step:number = 1;
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  verifyEmail:FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });

  verifyCode:FormGroup = this._formBuilder.group({
    resetCode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]]
  });

  resetPassword:FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    newPassword: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });

  verifyEmailSubmit():void {
    if(this.verifyEmail.valid){
      this.resetPassword.get('email')?.patchValue(this.verifyEmail.value.email);
      this._authService.setEmailVerify(this.verifyEmail.value).subscribe({
        next: (res) => {
          console.log(res);
          this.step = 2;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
  verifyCodeSubmit():void {
    if(this.verifyCode.valid){
      this._authService.setCodeVerify(this.verifyCode.value).subscribe({
        next: (res) => {
          console.log(res);
          this.step = 3;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
  resetPasswordSubmit():void {
    if(this.resetPassword.valid){
      this._authService.setResetPassword(this.resetPassword.value).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('userToken', res.token);
          this._authService.saveUserData();
          this._router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
