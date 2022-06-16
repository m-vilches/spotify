import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
import * as dataraw from '../../../data/tracks.json'

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  tracks:TrackModel[]= []

  constructor() { }

  ngOnInit(): void {
    const {data}:any = (dataraw as any).default
    this.tracks=data;
  }

}
