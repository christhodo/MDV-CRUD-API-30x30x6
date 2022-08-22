import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Player } from '../../common/models/player';

@Component({
  selector: 'mavericks-app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
})
export class PlayerDetailsComponent {
  currentPlayer: Player;
  originalName = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set player(value) {
    if (!value) return;
    this.currentPlayer = { ...value };
    this.originalName = this.currentPlayer.name;
  }
}
