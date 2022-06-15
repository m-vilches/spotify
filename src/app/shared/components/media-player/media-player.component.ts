import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://previews.123rf.com/images/espies/espies2010/espies201000969/157624128-anciano-asi%C3%A1tico-indio-o-adulto-mayor-masculino-escuchando-m%C3%BAsica-en-radio-vintage-usando-auriculare.jpg',
    name: 'Gioli & Asia ()',
    album:' BEBE (Oficial)',
    url:'http://localhost/track.mp3',
    _id: 1
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
