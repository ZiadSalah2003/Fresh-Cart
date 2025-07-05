import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _authService = inject(AuthService);
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _router = inject(Router);
  msError: string = "";
  isLoading: boolean = false;
  msSuccess: boolean = false;

  registerForm: FormGroup = this._formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
    rePassword: [null],
    phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
  }, {validators: this.confirmPassword});

  //  registerForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  //   rePassword: new FormControl(null),
  //   phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  //  }, this.confirmPassword);
 
   registerSubmit():void
   {
    if(this.registerForm.valid){
      this.isLoading = true;
      this._authService.setRegisterForm(this.registerForm.value).subscribe({
        next: (response) => {
          console.log(response);
          if(response.message == "success"){
            this.msSuccess = true;
            setTimeout(() => {
            this._router.navigate(['/login']);
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
      this.registerForm.setErrors({mismatch: true});
      this.registerForm.markAllAsTouched();
    }
  }

  confirmPassword(g:AbstractControl)
  {
    if(g.get('password')?.value == g.get('rePassword')?.value)
      return null;

    else
      return { mismatch: true };
  }
}
