import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Heart } from '../class/Heart/heart';

@Injectable({
  providedIn: 'root'
})
export class HeartCrudService {


  REST_API:string = 'http://127.0.0.1:8000/api/heart';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');

  constructor(private httpClient : HttpClient) { }

  addheart(data:Heart):Observable<any>{
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }

  gethearts(){
    return this.httpClient.get(this.REST_API);
  }

  getheart(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
      catchError(this.handleError))
  }

  updateheart(id:any,data:Heart):Observable<any>{
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data , {headers:this.httpHeaders})
    .pipe(catchError(this.handleError))
  }

  deleteheart(id:any):Observable<any>{
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
  }}
