import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { prodCategory } from '../models/prodCategory';
import { prodInterface } from '../models/prodInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  showMessage(_arg0: string) {
    throw new Error('Method not implemented.');
  }
  serverUrl: string = `http://localhost:5000`;

  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<prodInterface[]> {
    let dataUrl: string = `${this.serverUrl}/products`;
    return this.httpClient
      .get<prodInterface[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  getProduct(productId: string): Observable<prodInterface> {
    let dataUrl: string = `${this.serverUrl}/products/${productId}`;
    return this.httpClient
      .get<prodInterface>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  createProduct(product: prodInterface): Observable<prodInterface> {
    let dataUrl: string = `${this.serverUrl}/products`;
    return this.httpClient
      .post<prodInterface>(dataUrl, product)
      .pipe(catchError(this.handleError));
  }

  updateProduct(
    product: prodInterface,
    productId: string
  ): Observable<prodInterface> {
    let dataUrl: string = `${this.serverUrl}/products/${productId}`;
    return this.httpClient
      .put<prodInterface>(dataUrl, product)
      .pipe(catchError(this.handleError));
  }

  deleteProduct(productId: number): Observable<{}> {
    let dataUrl: string = `${this.serverUrl}/products/${productId}`;
    return this.httpClient
      .delete<{}>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  //GET All Groups
  getAllCategories(): Observable<prodCategory[]> {
    let dataUrl: string = `${this.serverUrl}/categories`;
    return this.httpClient
      .get<prodCategory[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  //GET Single Group
  getCategory(product: prodCategory): Observable<prodCategory> {
    let dataUrl: string = `${this.serverUrl}/categories/${product.categoryName}`;
    return this.httpClient
      .get<prodCategory>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //client error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      //server error
      errorMessage = `Status : ${error.status} / Message: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
