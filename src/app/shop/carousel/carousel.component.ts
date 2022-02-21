import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  res$: Recipe[] = [];
  activeSlideIndex = 0;
  myInteval = 600;

  constructor(private reServ: RecipeService) {
    this.reServ.getRecipes().subscribe((o) => {
      this.res$ = o;
      this.activeSlideIndex = 2;
      this.myInteval = 500;
    });
  }

  ngOnInit() {}
  slides = [
    {
      image_url:
        'https://assets.newatlas.com/dims4/default/9b7028d/2147483647/strip/true/crop/1372x915+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fb8%2F01%2F42fb621748ceb2a3c56f158d373f%2Fbucket-tenders-laying.jpeg'
    },
    {
      image_url:
        'https://www.thepackagingcompany.com/knowledge-sharing/wp-content/uploads/2018/09/ip-kfcbucket-blog.jpg'
    },
    {
      image_url:
        'data:image/jpeg;base64,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'
    }
  ];
}