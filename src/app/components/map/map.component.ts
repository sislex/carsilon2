import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor(
    public mapService: MapService
  ) { debugger }

  ngOnInit() {
    debugger
  }

  ngAfterViewInit() {
    // this.mapService.initializeMap();
    console.log('after init')
  }

}
