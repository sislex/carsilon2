import {Injectable} from '@angular/core';
import ymaps from 'ymaps';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map: any = null;
  public mapsModule: any = null;
  public URL = 'https://api-maps.yandex.ru/2.1/?apikey=0fa39855-0ee7-44f7-bea2-4e20921b171a&lang=en_US';
  public officeCoordinates = [53.888329, 27.544296];


  constructor() {

  }

  initializeMap() {
    ymaps
    // ymaps.load(this.URL).then((maps) => {
    //   this.mapsModule = maps;
    //   // this.map = new this.mapsModule.Map('map', {
    //   //   center: this.officeCoordinates,
    //   //   zoom: 12 // from 0 to 19
    //   // });
    //   // this.addPoint(this.officeCoordinates, 'Office', 'Tolstogo 10');
    // });

    ymaps.ready(() => {
      debugger
      this.map = new ymaps.Map('map', {
          center: this.officeCoordinates,
          zoom: 12 // from 0 to 19
        });
    });



  }

  addSearhcControl(callback: Function) {
    this.map.controls.add('searchControl');
    const searchControl = this.map.controls.get('searchControl');
    searchControl.events.add('resultselect', (data) => callback(data));
  }

  addPoint(coordinates = this.officeCoordinates, iconContent: string = '', hintContent: string = '') {
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
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon',
      // Метку можно перемещать.
      draggable: true
    });

    this.map.geoObjects.add(point);
  }
}
