import { LoadingService } from './loading.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptionService implements HttpInterceptor {

  constructor(private loadingService: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        () => {
          this.loadingService.isLoading.next(false);
          console.log("Acabou a requisição")
        }
      )
    )
  }
}
