import { Component } from '@angular/core';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import {MapService} from '../../services/map.service';
import {AuthService} from '../../services/auth';
import {RoutesService} from '../../services/routes.service';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./route-form.scss'],
  templateUrl: 'route-form.html'
})
export class RouteFormPage {
  constructor(public mapService: MapService, public authService: AuthService, public routesService: RoutesService) {

  }

  myDate;
  public drive = {
    addressStart: 'Belarus, Minsk, vulica Talstoha',
    addressFinish: '',
    coordinatesStart: 'coordinatesStart',
    coordinatesFinish: 'coordinatesFinish',
    timeStart: '2019-07-18T07:43Z',
    userData: 'userData',
    username: 'username',
  };

  async addRoute() {
    console.log(new Date(this.drive.timeStart).getTime());

    const newRoute = await this.routesService.addRoute(this.drive);
    console.log(newRoute);
  }

  changeDate(qwe) {
    console.log(qwe);
  }

  setAddress($event) {
    this.drive.addressFinish = $event.value;
    this.mapService.myDestination = null;
  }
}
