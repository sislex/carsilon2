import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {MapService} from './services/map.service';
import {RoutesService} from './services/routes.service';

@Injectable()
export class Guard implements CanActivate {
  constructor(public mapService: MapService, public routesService: RoutesService) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.mapService.mapsModule && this.mapService.map) {
      const routes = await this.routesService.updateRoutes();
      await this.mapService.displayRoutes(routes);
      return true;
    } else {
      return true;
    }
  }
}
