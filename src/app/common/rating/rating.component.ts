import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})

export class RatingComponent implements OnInit {
  currentRate=8
  constructor() { }

  ngOnInit(): void {
  }

}
