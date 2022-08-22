import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';
import {
  PLAYER_ENVIRONMENT,
  PlayerEnvironment,
} from '@mavericks-app/environment';

const BASE_URL = 'https://thirty-by-thirty-app.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  model = 'players';

  constructor(
    private http: HttpClient,
    @Inject(PLAYER_ENVIRONMENT) private environment: PlayerEnvironment
  ) {}

  all() {
    return this.http.get<Player[]>(this.getUrl());
  }

  find(id) {
    return this.http.get<Player>(this.getUrlWithID(id));
  }

  create(player) {
    return this.http.post<Player>(this.getUrl(), player);
  }

  update(player) {
    return this.http.put<Player>(this.getUrlWithID(player.id), player);
  }

  delete(id) {
    return this.http.delete<Player>(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
