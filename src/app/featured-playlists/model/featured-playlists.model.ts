import {Playlist} from './playlist.model';

export interface FeaturedPlaylists {
  name: string;
  content: Playlist[];
}

export interface FeaturedPlaylistsResponse {
  featuredPlaylists: FeaturedPlaylists;
}
