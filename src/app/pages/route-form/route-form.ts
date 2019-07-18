import { Component } from '@angular/core';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./route-form.scss'],
  templateUrl: 'route-form.html'
})
export class RouteFormPage {

  myDate;
  public drive = {
    addressStart: '',
    addressFinish: '',
    coordinatesStart: 'coordinatesStart',
    coordinatesFinish: 'coordinatesFinish',
    timeStart: '2019-07-18T07:43Z',
    userData: 'userData',
    username: 'username',
  };

  async addRoute() {
    console.log(new Date(this.drive.timeStart).getTime());
    console.log(this.myDate);
    console.log(this.drive);
    const newRoute = await API.graphql(graphqlOperation(mutations.createRoutes, {input: this.drive}));
    console.log(newRoute);
  }

  changeDate(qwe) {
    console.log(qwe);
  }
}
