import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import {RoutesPage} from '../routes/routes.page';
import {DestinationFormPage} from '../destination-form/destination-form.page';
import {Guard} from '../../guard';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'destination',
        children: [
          {
            path: '',
            component: DestinationFormPage,
          },
        ]
      },
      {
        path: 'routes',
        children: [
          {
            path: '',
            component: RoutesPage,
          },
          {
            path: 'route/:sessionId',
            loadChildren: '../route-form/route-form.module#RouteFormModule'
          }
        ]
      },
      // {
      //   path: 'schedule',
      //   children: [
      //     {
      //       path: '',
      //       component: SchedulePage,
      //     },
      //     {
      //       path: 'session/:sessionId',
      //       loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
      //     }
      //   ]
      // },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapModule'
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: '../speaker-list/speaker-list.module#SpeakerListModule'
          },
          {
            path: 'session/:sessionId',
            loadChildren: '../session-detail/session-detail.module#SessionDetailModule'
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: '../speaker-detail/speaker-detail.module#SpeakerDetailModule'
          }
        ]
      },
      {
        path: 'map',
        canActivate: [Guard],
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/map',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

