import { Injectable } from '@angular/core';
import {Playlist} from '../model/playlist.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FeaturedPlaylistsResponse} from '../model/featured-playlists.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  public getFeaturedPlaylists(): Observable<Playlist[]> {
    const url = 'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json';
    return this.http.get<FeaturedPlaylistsResponse>(url).pipe(
      map(response => response.featuredPlaylists.content)
    );
  }
}
