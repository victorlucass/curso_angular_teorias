import { AuthService } from './../core/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.authService.login(credentials)
      .subscribe(
        (resource) => {
          console.log(resource);
          alert(`Bem-vindo ${resource.firstname}`);
          this.router.navigate(['/'])
        },
        (error) => {
          console.error(error)
        }
      )
  }

}
