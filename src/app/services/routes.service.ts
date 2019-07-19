import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Events } from '@ionic/angular';
import {AmplifyService, AuthState} from 'aws-amplify-angular/dist/src/providers';
import {Analytics} from 'aws-amplify';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

@Injectable()
export class RoutesService {

  public routes = [];

  constructor(public router: Router, public events: Events, public amplifyService: AmplifyService) {
    this.updateRoutes();
  }

  async updateRoutes() {
    let routes = await API.graphql(graphqlOperation(queries.listRoutess));
    routes = routes.data.listRoutess.items;
    routes.filter((a, b) => {
      if (new Date(a.timeStart) > new Date(b.timeStart)) {
        return 1;
      }

      if (new Date(a.timeStart) > new Date(b.timeStart)) {
        return -1;
      }

      return 0;
    });
    this.routes = routes;
    return this.routes;
  }

  async addRoute(obj) {
   return  await API.graphql(graphqlOperation(mutations.createRoutes, {input: obj}));
  }

  async remove(routeId) {
    const obj = {id: routeId};
    const deleteRoute = await API.graphql(graphqlOperation(mutations.deleteRoutes, {input: obj}));
    await this.updateRoutes();
  }

}
