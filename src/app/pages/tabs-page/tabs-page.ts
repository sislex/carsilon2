import { Component } from '@angular/core';
import {MapService} from '../../services/map.service';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  constructor(public mapService: MapService) {}
}
