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

  createLolUser(user_register_data: any) {
    return this.http.post(`${this.API_URL}/lol_user/create`, user_register_data);
  }

  createValorantUser(user_register_data: any) {
    return this.http.post(`${this.API_URL}/valorant_user/create`, user_register_data);
  }

  createFortniteUser(user_register_data: any) {
    return this.http.post(`${this.API_URL}/fortnite_user/create`, user_register_data);
  }

  userSubscription($user_id: number | null, $game: string) {
    return this.http.get(`${this.API_URL}/suscripcionesUsers/${$user_id}/${$game}`);
  }

  updateLolUser($data: any, $id_usuario_videojuego: any) {
    return this.http.post(`${this.API_URL}/lol_user/update/${$id_usuario_videojuego}`, $data);
  }

  updateValorantUser($data: any, $id_usuario_videojuego: any) {
    return this.http.post(`${this.API_URL}/valorant_user/update/${$id_usuario_videojuego}`, $data);
  }

  updateFortniteUser($data: any, $id_usuario_videojuego: any) {
    return this.http.post(`${this.API_URL}/fortnite_user/update/${$id_usuario_videojuego}`, $data);
  }

  destroyUser($user_id: number, admin: boolean) {
    if (admin) {
      return this.http.delete(`${this.API_URL}/user/${$user_id}`);
    } else {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      return this.http.delete(`${this.API_URL}/user/${$user_id}`);
    }
  }

  updateUser($data: any, $user_id: number) {
    return this.http.post(`${this.API_URL}/user/${$user_id}`, $data);
  }

  revokeSuscription($user_id: number, $game_id: number) {
    return this.http.delete(`${this.API_URL}/user/${$user_id}/${$game_id}`);
  }
}
