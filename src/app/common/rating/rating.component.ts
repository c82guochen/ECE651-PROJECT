import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class RatingComponent {
  selected = 4;
  hovered = 0;
  readonly = false;

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    // config.readonly = true;
  }

  getSelect(selected: number) {
    this.selected = selected;
    console.log(this.selected);
  }
}
