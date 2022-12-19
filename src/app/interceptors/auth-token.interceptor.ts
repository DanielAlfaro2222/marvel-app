import {
  HttpContext,
  HttpContextToken,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_INTERCEPTOR: HttpContextToken<boolean> = new HttpContextToken(
  () => false
);

function changeStatusOfInterceptor(): HttpContext {
  return new HttpContext().set(AUTH_INTERCEPTOR, true);
}

@Injectable()
class AuthTokenInterceptor implements HttpInterceptor {
  private keyApi: string = environment.API_KEY;
  private hash: string = environment.HASH;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.context.get(AUTH_INTERCEPTOR)) {
      let params: HttpParams = new HttpParams();

      params = params.set('ts', 1);
      params = params.set('apikey', this.keyApi);
      params = params.set('hash', this.hash);

      request = request.clone({
        params,
      });

      return next.handle(request);
    }

    return next.handle(request);
  }
}

export { AuthTokenInterceptor, changeStatusOfInterceptor };
