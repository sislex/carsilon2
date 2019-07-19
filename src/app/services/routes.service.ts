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
    const routes = await API.graphql(graphqlOperation(queries.listRoutess));
    this.routes = routes.data.listRoutess.items;
    return this.routes;
  }

  async addRoute(obj) {
   return  await API.graphql(graphqlOperation(mutations.createRoutes, {input: obj}));
  }

}
