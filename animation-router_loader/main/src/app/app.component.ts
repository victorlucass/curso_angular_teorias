import { LoadingService } from './main/core/services/loading.service';
import { Router, RouterOutlet } from '@angular/router';
import { User } from './auth/core/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/core/auth.service';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'autenticacao-app';

  authenticated$: Observable<boolean>
  user$: Observable<User>;


  constructor(private authService: AuthService, private router: Router, public loadingService: LoadingService) {
    this.authenticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['auth/login'])
  }

  prepareRouter(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const params = outlet.activatedRoute.snapshot.url;
      return params;
    }
  }

  ngOnInit(): void {
    // console.log(this.user$)
  }

}
