import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css'],
})
export class RestaurantItemComponent {
  @Input() restaurant: Restaurant = new Restaurant();

  brojUArray(n: number): Array<number> {
    return Array(n);
  }
  //*ngFor radi nad Array i da bismo mogli da ga
  //iskoristimo moramo "broj da pretvorimo u array"
  //preko metode brojUArray
}
