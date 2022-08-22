import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../common/services/players.service';
import { Player, emptyPlayer } from '../common/models/player';

@Component({
  selector: 'mavericks-app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players = [];
  players$: any;
  selectedPlayer = emptyPlayer;
  originalName = '';

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.fetchPlayers();
  }

  selectPlayer(player: Player) {
    this.selectedPlayer = player;
  }

  fetchPlayers() {
    this.players$ = this.playersService.all();
  }

  savePlayer(player: Player) {
    if (player.id) {
      this.updatePlayer(player);
    } else {
      this.createPlayer(player);
    }
  }

  createPlayer(player: Player) {
    this.playersService
      .create(player)
      .subscribe((result) => this.fetchPlayers());
  }

  updatePlayer(player: Player) {
    this.playersService
      .update(player)
      .subscribe((result) => this.fetchPlayers());
  }

  deletePlayer(playerId) {
    console.log('DELETE Player', playerId);
  }

  reset() {
    this.selectPlayer({ ...emptyPlayer });
  }
}
