import { LoaderService } from './../loader.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, of, tap } from 'rxjs';
import { CacheResolverService } from '../cache/cache-resolver.service';

const TIME_TO_LIVE = 10;

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptorService implements HttpInterceptor{

  constructor(private cacheInterpector:CacheResolverService, public load:LoaderService) {  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler):Observable<HttpEvent<any>> {
      this.load.isLoading.next(true);
      if(req.method != 'GET'){
        return next.handle(req)
      }
      const cacheResponse = this.cacheInterpector.get(req.url);
      this.load.isLoading.next(false)
      return cacheResponse ? of(cacheResponse): this.sendRequest(req, next);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cacheInterpector.set(req.url, event, TIME_TO_LIVE)
        }
      }, (error: HttpErrorResponse) => {
        throw error;
      }),
      finalize(
        () => this.load.isLoading.next(false)
      )
    )
  }
}
