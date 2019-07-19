import { Component, OnInit } from '@angular/core';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'destination-form',
  templateUrl: './destination-form.page.html',
  styleUrls: ['./destination-form.page.scss'],
})
export class DestinationFormPage implements OnInit {
  public destination;

  constructor(public mapService: MapService) { }

  ngOnInit() {
  }

  submitDestination() {
    this.mapService.myDestination = this.destination;
  }

  setDestination($event) {
    this.destination = $event.value;
  }
}
