import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedPlaylistsComponent } from './featured-playlists.component';
import {FeaturedPlaylistsRoutingModule} from './featured-playlists-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    FeaturedPlaylistsComponent
  ],
  imports: [
    CommonModule,
    FeaturedPlaylistsRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: Window, useValue: window
    }
  ]
})
export class FeaturedPlaylistsModule { }
