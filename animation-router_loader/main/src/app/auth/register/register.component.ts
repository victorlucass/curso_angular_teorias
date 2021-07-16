import { User } from './../core/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    'firstname': ['', [Validators.required]],
    'lastname': ['', [Validators.required]],
    'address': ['', [Validators.required]],
    'city': ['', [Validators.required]],
    'state': ['', [Validators.required]],
    'phone': ['', [Validators.required]],
    'mobilephone': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'password1': ['', [Validators.required, Validators.minLength(6)]],
    'password2': ['', [Validators.required, Validators.minLength(6)]]
  },
    { validator: this.matchingPasswords }
  );

  states = ['AM', 'PA', 'MA', 'AC', 'RO'];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log(typeof this.formRegister);
  }

  private matchingPasswords(fg: FormGroup) {
    if (fg) {
      const ps1 = fg.controls['password1'].value;
      const ps2 = fg.controls['password2'].value;
      if (ps1 == ps2) {
        return null;
      }
    }
    return { matghin: false };
  }

  onSubmit() {
    // console.log(this.formRegister.value);
    let u: User = {
      ...this.formRegister.value, password: this.formRegister.value.password1
    };
    this.authService.register(u).subscribe(
      (resource) => {
        console.log(resource);
        alert('User registrado com sucesso!');
        this.router.navigate(['auth/login'])
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
