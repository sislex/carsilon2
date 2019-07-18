import { Component, OnInit } from '@angular/core';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as subscriptions from '../../../graphql/subscriptions';
@Component({
  selector: 'routes',
  templateUrl: './routes.page.html',
  styleUrls: ['./routes.page.scss'],
})
export class RoutesPage implements OnInit {

  public routesForm = {
    username: 'username',
    userData: 'userData',
    timeStart: 'timeStart',
    addressStart: 'addressStart',
    addressFinish: 'addressFinish',
    coordinatesStart: 'coordinatesStart',
    coordinatesFinish: 'coordinatesFinish',
    description: 'description',
  };
  constructor() { }

  ngOnInit() {
    this.submit();
  }

  async submit() {
    // console.log(this.routesForm);
    // const newRoute = await API.graphql(graphqlOperation(mutations.createRoutes, {input: this.routesForm}));
    // console.log(newRoute);
    //
    // const allRoutes = await API.graphql(graphqlOperation(queries.listRoutess));
    //
    // const deleteRoute = await API.graphql(graphqlOperation(mutations.deleteRoutes, {input: {id: allRoutes.data.listRoutess.items[0].id}}));
    // console.log(deleteRoute);
  }

}
