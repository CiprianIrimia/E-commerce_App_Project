import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth: any;
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (
      (email === 'admin@gmail.com' && password === 'admin123') ||
      (email === 'admin2@gmail.com' && password === 'admin321')
    ) {
      this.setToken('123456789abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Ciprian Irimia', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Login fail!'));
  }
}
