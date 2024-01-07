import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  register(param: any): Observable<any> {
   const url = `${environment.apiBaseUrl+environment.apiEndPoint.register}`; 
   return this.http.post(url, param);
 }

   login(param: any): Observable<any> {
    const url = `${environment.apiBaseUrl+environment.apiEndPoint.login}`; 
    return this.http.post(url, param);
  }

  forgotPassword(param: any): Observable<any> {
    const url = `${environment.apiBaseUrl+environment.apiEndPoint.forgotPassword}`; 
    return this.http.post(url, param);
  }

  verifyOtp(param: any): Observable<any> {
    const url = `${environment.apiBaseUrl+environment.apiEndPoint.verifyotp}`; 
    return this.http.post(url, param);
  }

  resetPassword(param: any): Observable<any> {
    const url = `${environment.apiBaseUrl+environment.apiEndPoint.resetPassword}`; 
    return this.http.post(url, param);
  }

  getBanners(): Observable<any> {
    const url = `${environment.apiBaseUrl+environment.apiEndPoint.getBanners}`; 
    return this.http.get(url);
  }

  getCatagories(): Observable<any> {
    const url = `${environment.apiBaseUrl+environment.apiEndPoint.getCatagories}`; 
    return this.http.get(url);
  }

  allProducts(): Observable<any> {
    const url = `${environment.apiBaseUrl+environment.apiEndPoint.allProducts}`; 
    return this.http.get(url);
  }

  // productDetailsById(id: any): Observable<any> {
  //   const url = `${environment.apiBaseUrl+environment.apiEndPoint.productDetails}+'\'+${id}`; 
  //   return this.http.get(url, param);
  // }


}
