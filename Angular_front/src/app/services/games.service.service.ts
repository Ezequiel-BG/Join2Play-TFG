import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../models/game.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {
  private readonly API_URL = environment.apiURL

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URL}/game`);
  }

  getGameId(game_name: string) {
    return this.http.get(`${this.API_URL}/game_id/${game_name}`).pipe(
      map((response: any) => response.game_id)
    );
  }

  updateGame($game: Game, $game_id: number) {
    return this.http.post(`${this.API_URL}/game/${$game_id}`, $game);
  }

  revokeGame($game_id: number) {
    return this.http.delete(`${this.API_URL}/game/${$game_id}`);
  }
}
