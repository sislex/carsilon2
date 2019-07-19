import {Injectable} from '@angular/core';
import ymaps from 'ymaps';
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { getSortedRoutes } from '../helpers/distance.js';


export class Point {
  public coordinates: number[];
  public descrition: any;
}

export class Route {
  public from: number[];
  public to: number[];
  public allPoints: number[];
  public fromDescription: any;
  public toDescription: any;

  constructor(from, to, allPoints) {
    this.from = from || allPoints[0];
    this.to = to || allPoints[allPoints.length - 1];
    this.allPoints = allPoints || [from, to];
    console.log('myfrom', allPoints[0]);
    console.log('myto', allPoints[allPoints.length - 1]);
  }
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map: any = null;
  public mapsModule: any = null;
  public URL = 'https://api-maps.yandex.ru/2.1/?apikey=0fa39855-0ee7-44f7-bea2-4e20921b171a&lang=en_US';
  public officeCoordinates = [53.888329, 27.544296];
  public destinations: any = [];
  public routesCollection: any = [];
  public allRoutes: any = [];
  public myDestination: any = null;

  public colors = ['#4287f5', '#1518bd', '#ed152b', '#16b84f', '#7e29b3', '#754805',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  constructor() {

  }

  getFilteredRoutes(to) {
    this.routesCollection = getSortedRoutes(this.routesCollection, to);
  }

  async displayRoutes(routesCollection) {
    if (routesCollection && routesCollection.length) {
      this.routesCollection = await Promise.all(routesCollection.map(async (item) => {
        const result = await this.generateRoute(undefined, item.addressFinish);
        const route = result.route;
        const segments = route.getPaths()[0].getSegments();
        let allPoints = [];
        segments.forEach((segment) => {
          allPoints = allPoints.concat(segment.geometry.getCoordinates());
        });

        return new Route(null, null, allPoints);
      }));
    }

    this.clearMap();
    if (this.myDestination) {
      this.addPlacemark();
    }
    // this.displayColorfulRoutesCollection([this.routesCollection[0]]);
    if (this.routesCollection && this.routesCollection.length) {
      if (this.myDestination) {
        this.getFilteredRoutes(this.myDestination);
      }
      this.displayColorfulRoutesCollection(this.routesCollection);
    }

  }

  addPlacemark() {
    const placemark = new this.mapsModule.Placemark(this.myDestination, {}, {
      preset: 'islands#redDotIcon'
    });

    this.map.geoObjects.add(placemark);

  }

  async fetchRoutes() {
    const allRoutes = await API.graphql(graphqlOperation(queries.listRoutess));
    // this.myRoutes = allRoutes.data.listRoutess.items
    this.allRoutes = allRoutes.data.listRoutess.items;
    this.displayRoutes(this.allRoutes);
  }

  clearMap() {
    this.map.geoObjects.removeAll();
    this.addPoint(this.officeCoordinates, '#228B22', null, 'Tolstogo 10');
  }

  generateRoute(from = this.officeCoordinates, to): any {
    const router = this.getRoute(undefined, to);

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

  getRoute(from = this.officeCoordinates, to) {
    return new this.mapsModule.multiRouter.MultiRoute({
      referencePoints: [from, to],
      params: {results: 1}
    });
  }

  displayRouteByPoints(route, color, info) {
    const polyline = new this.mapsModule.Polyline(route.allPoints, {
        balloonContent: info,
        balloonContentHeader: this.getBalloonHeader(),
      }, {
        strokeWidth: 6,
        strokeOpacity: 0.8,
        strokeColor: color
    });
    this.map.geoObjects.add(polyline);
    this.addPoint(route.to, color || this.colors[0]);
  }

  displayColorfulRoutesCollection(routesCollection) {
    routesCollection.forEach((route, index) => {
      // TODO: what if we are run out of colors
      const color = this.colors[index];
      let info;
      this.displayRouteByPoints(route, color, info);
    });
  }

  displayGenericRoute(route) {
    this.map.geoObjects.add(route);
  }

  addRouteToCollection(route, collection) {
    const segments = route.getPaths()[0].getSegments();
    let allPoints = [];
    segments.forEach((segment) => {
      allPoints = allPoints.concat(segment.geometry.getCoordinates());
    });

    console.log({ allPoints});
    const routeToSave = new Route(null, null, allPoints);
    collection.push(routeToSave);
    return collection;
  }

  addSearhcControl(getResultHandler: Function) {
    this.map.controls.add('searchControl');
    const searchControl = this.map.controls.get('searchControl');
    searchControl.events.add('resultshow', (data) => getResultHandler(data));
  }

  async addPoint(coordinates: any = this.officeCoordinates, color, iconContent: string = '', hintContent: string = '') {
    if (typeof coordinates === 'string') {
      coordinates = await this.mapsModule.geocode(coordinates);
    }

    const point = new this.mapsModule.GeoObject({
      // Описание геометрии.
      geometry: {
        type: 'Point',
        coordinates
      },
      properties: {
        iconContent,
        hintContent
      }
    }, {
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands##blackStretchyIcon',
      fillColor: color,
    });

    this.map.geoObjects.add(point);
  }

  async addDestinationPointMark(coordinates: any = this.officeCoordinates, hintContent: string = '') {
    if (typeof coordinates === 'string') {
      coordinates = await this.mapsModule.geocode(coordinates);
    }

    const point = new this.mapsModule.GeoObject({
      // Описание геометрии.
      geometry: {
        type: 'Point',
        coordinates
      },
      properties: {
        hintContent
      }
    }, {
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#redDotIcon',
    });

    this.map.geoObjects.add(point);
  }

  getBalloonHeader() {
    const routeInfo = {
      name:'Andrew Carowner',
      photo:"https://www.w3schools.com/html/pic_trulli.jpg",
      destination:'vulica Husoŭskaha 64-61, Minsk, Republic of Belarus',
      departure:'11:40 PM',
      phone:'+37529 999 99 99'
    };

    return `
      <style>
        .header-container {
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: space-between;
        }
        
        .img {
          width: 80px;
          height: 80px;
          border-radius: 40px;
        }
        
        .img1 {
        width: 20px;
        height: 20px;
        }
        
        .name {
          align-self: center;
          flex-wrap: wrap;
          font-size: 17px;
          width: 50%;
          line-height: 23px;
        }
        
        .footer {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 50px;
            margin-top: 20px;
        }
        
        .phone {
            opacity: 0.6;
    font-weight: 100;
        }
        
      </style>
      <div class="header-container">
        <img class="img" src="${routeInfo.photo}">
        <div class="name">${routeInfo.name}</div>
      </div >
      <div class="footer">
        <img class="img1" src="https://cs6.pikabu.ru/images/previews_comm/2015-01_5/14222063051894.png">
          <div class="phone">${routeInfo.phone}</div>
      
      </div>
            
    `;
  }
  }
