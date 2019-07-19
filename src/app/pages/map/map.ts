import {Component, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import {MapService, Route} from '../../services/map.service';
import ymaps from 'ymaps';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements AfterViewInit, OnInit {
  @ViewChild('mapCanvas') mapElement: ElementRef;
  private isLoading: boolean = true;
  public currentRoute: any = null;
  public myHomeCoordinates: any = [53.880931, 27.537810];
  public anastasiaHome = [53.910092, 27.519727];
  public routesCollection: any[] = [];
  public stringDestination: string = 'Беларусь, Минск, улица Руссиянова, 5/1 ';

  public filteredTime = null;
  public hour = null;

  public destinations = [
    [53.880931, 27.537810],
    [53.910092, 27.519727],
    'Беларусь, Минск, улица Руссиянова, 5/1 '
  ];

  constructor(public confData: ConferenceData, public platform: Platform, public mapService: MapService) {}

  ngOnInit() {
    // this.mapService.initializeMap()
    ymaps.load(this.mapService.URL).then((maps) => {
      this.mapService.mapsModule = maps;
      this.mapService.map = new this.mapService.mapsModule.Map('map', {
        center: this.mapService.officeCoordinates,
        zoom: 12 // from 0 to 19
      });
      this.isLoading = false;
      this.mapService.addPoint(this.mapService.officeCoordinates, null,'Office', 'Tolstogo 10');
      this.mapService.addSearhcControl((data) => {
        this.handleSearchResult(data);
      });
      this.fillTheRoutesCollection()
    });
  }

  ngAfterViewInit() {}

  handleSearchResult(event) {
    const searchState = event.get('target').state;
    // debugger;
  }

  clearMap() {
    this.mapService.clearMap();
  }

  displayRoutesCollection() {
    this.mapService.displayColorfulRoutesCollection(this.routesCollection);
  }

  async fillTheRoutesCollection() {
    // this.destinations.forEach(async (destination) => {
    //   const {route} = await this.getRoute(destination);
    //   this.addRouteToCollection(route);
    // });
  }

  getRoute(destination: any = this.stringDestination) {
    const router = this.mapService.getRoute(undefined, destination);

    return new Promise((resolve) => {
      router.model.events.add('requestsuccess', (event) => {
      const routes = event.get('target').getRoutes();
      if (routes && routes.length) {
        const route = routes[0];
        resolve({route, router});
      }
    });

    });
  }

  addRouteToCollection(route) {
    this.mapService.addRouteToCollection(route, this.routesCollection);
  }

  displayGenericRoute(router) {
    this.mapService.map.geoObjects.add(router);
  }

  saveCurrentRoute() {
    this.mapService.addRouteToCollection(this.currentRoute, this.mapService.routesCollection);
  }

  changeDate($event) {
    this.filteredTime = $event;
    console.log(this.filteredTime);
    console.log(new Date(this.filteredTime).getTime());
  }
}
