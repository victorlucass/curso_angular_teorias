import { Router } from '@angular/router';
import { User } from './auth/core/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'autenticacao-app';

  authenticated$: Observable<boolean>
  user$: Observable<User>;


  constructor(private authService: AuthService, private router: Router) {
    this.authenticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['auth/login'])
  }

  ngOnInit(): void {
    // console.log(this.user$)
  }

}
