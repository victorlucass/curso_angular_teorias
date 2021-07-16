import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      const authReq = req.clone({
        setHeaders: {
          Authorization: token
        }
      });
      return next.handle(authReq)
        .pipe(catchError((error) => {
          console.log(error);
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.authService.logout();
              this.router.navigateByUrl('/auth/login');
            }
          }
          return throwError(error);
        }))
    }
    return next.handle(req);
  }
  // constructor(
  //   private authService: AuthService,
  //   private router: Router
  // ) { }

  // intercept(request: HttpRequest<unknown>, next: HttpHandler) {
  //   if (localStorage.getItem('token')) {
  //     let token = localStorage.getItem('token');
  //     const requestToken = request.clone({
  //       setHeaders: {
  //         Authorization: token
  //       }
  //     })
  //     next.handle(requestToken).pipe(
  //       catchError((error) => {

  //         if (error instanceof HttpResponse) {
  //           if (error.status === 401) {
  //             this.authService.logout();
  //             this.router.navigate(['auth/login'])
  //           }
  //         }

  //         console.log(error);
  //         return throwError(error);
  //       })
  //     )
  //   }
  //   return next.handle(request);
  // }
}
