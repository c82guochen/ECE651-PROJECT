import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  selected = 4;
  hovered = 0;
  readonly = false;

  constructor() {
    // customize default values of ratings used by this component tree
    // config.readonly = true;
  }
}
