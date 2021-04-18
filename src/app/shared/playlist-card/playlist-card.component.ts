import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent {
  @Input() public imgUrl!: string;
  @Input() public title!: string;
  @Input() public curator!: string;
  @Output() public clickEvent: EventEmitter<void> = new EventEmitter();
  constructor() { }

  public onClick(): void {
    this.clickEvent.emit();
  }
}
