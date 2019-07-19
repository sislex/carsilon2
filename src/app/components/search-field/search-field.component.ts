import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  @Output() result = new EventEmitter<any>();
  @ViewChild('suggest') suggestRef: ElementRef;

  constructor(public mapService: MapService) { }

  ngOnInit() {
    setTimeout(() => {
      const suggestView = new this.mapService.mapsModule.SuggestView(this.suggestRef['el'], {
        offset: [10, 10]
      });

      suggestView.events.add('select', () => {
        const activeIndex = suggestView.state.get('activeIndex');
        const resultItem = suggestView.state.get('items')[activeIndex];
          this.result.emit({
          displayName: resultItem.displayName,
          value: resultItem.value
        });
      });
    }, 0);
  }
}
