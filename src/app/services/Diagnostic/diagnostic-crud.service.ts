import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Diagnostic } from '../class/Diagnostic/diagnostic';

@Injectable({
  providedIn: 'root'
})

export class DiagnosticCrudService {

  REST_API:string = 'http://127.0.0.1:8000/api/diagnostic';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient : HttpClient) { }

  adddiagnostic(data:Diagnostic):Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }

  getdiagnostics(){
    return this.httpClient.get(this.REST_API);
  }

  getdiagnostic(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
      catchError(this.handleError))
  }

  updatediagnostic(id:any,data:Diagnostic):Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data , {headers:this.httpHeaders})
    .pipe(catchError(this.handleError))
  }

  deletediagnostic(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL, {headers:this.httpHeaders})
    .pipe(catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error code: ${error.status}\n Message:${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
