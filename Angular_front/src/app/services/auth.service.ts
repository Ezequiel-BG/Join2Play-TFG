import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthCredentials } from '../models/auth-credentials.model';
import { UserRegister } from '../models/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = environment.apiURL
  
  constructor(private http: HttpClient) { }

  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  register(user: UserRegister): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, user)
  }

  logout(): Observable<any> {
    localStorage.removeItem('user');
    return this.http.delete(`${this.API_URL}/logout`)
  }

  getUserId(): number | null {
    const user = localStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user).id;
  }

  getUserName() {
    const user = localStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user).name;
  }

  isAdmin() {
    const user = localStorage.getItem('user');
    if (!user) return false;
    return JSON.parse(user).isAdmin;
  }
}
