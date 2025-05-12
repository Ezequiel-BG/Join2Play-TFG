import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = environment.apiURL

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.API_URL}/user`);
  }

  getLolUsers() {
    return this.http.get(`${this.API_URL}/lol_user`);
  }

  getValorantUsers() {
    return this.http.get(`${this.API_URL}/valorant_user`);
  }

  getFortniteUsers() {
    return this.http.get(`${this.API_URL}/fortnite_user`);
  }

  updateUser($user: User, $user_id: number) {
    return this.http.post(`${this.API_URL}/user/${$user_id}`, $user);
  }

  revokeUser($user_id: number) {
    return this.http.delete(`${this.API_URL}/user/${$user_id}`);
  }
}
