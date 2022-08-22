import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Player } from '../../common/models/player';

@Component({
  selector: 'mavericks-app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent {
  @Input() players: Player[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
