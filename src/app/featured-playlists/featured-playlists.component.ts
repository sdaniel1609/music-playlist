import {Component, Inject, OnInit} from '@angular/core';
import {PlaylistService} from './services/playlist.service';
import {Playlist} from './model/playlist.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-featured-playlists',
  templateUrl: './featured-playlists.component.html',
  styleUrls: ['./featured-playlists.component.scss']
})
export class FeaturedPlaylistsComponent implements OnInit {
  public featuredPlaylists$: Observable<Playlist[]>;

  constructor(private playlistService: PlaylistService, @Inject(Window) private window: Window) { }

  ngOnInit(): void {
    this.featuredPlaylists$ = this.playlistService.getFeaturedPlaylists();
  }

  public goToPlaylist(playlistUrl: string): void {
    this.window.location.assign(playlistUrl);
  }
}
