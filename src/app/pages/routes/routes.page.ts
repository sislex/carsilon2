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
  public myRoutes;
  constructor() { }

  async ngOnInit() {
    const allRoutes = await API.graphql(graphqlOperation(queries.listRoutess));
    this.myRoutes = allRoutes.data.listRoutess.items
    console.log(this.myRoutes);
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
