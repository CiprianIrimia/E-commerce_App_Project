import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { prodInterface } from '../models/prodInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private serverUrl: string = `http://localhost:5000/`;

  constructor(private httpClient: HttpClient) {}

  public getAllProducts(): Observable<prodInterface[]> {
    let dataUrl: string = `${this.serverUrl}/products`;
    return this.httpClient.get<prodInterface[]>(dataUrl).pipe();
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //client error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      //server error {
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
