import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantsList } from '../model/restaurant.model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent {
  restaurants: RestaurantsList = new RestaurantsList();

<<<<<<< HEAD
=======
  priceFromControl = new FormControl(1);
  priceToControl = new FormControl(5);

>>>>>>> origin/master
  queryParams = {
    page: 1,
    pageSize: 9,
    filter: {
      cuisine: '',
      priceFrom: 1,
      priceTo: 5,
    },
  };

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
<<<<<<< HEAD
      let cuisine = params['cuisine']; //VARIJABLA CUISINE UYIMA VREDNOST IZ PARAMETARA RUTE

      if (cuisine == 'All') {
        cuisine = '';
      } //NE POSTOJI KUHINJA ALL, ALI POSTOJI RUTA ALL, PA ONDA CUISINE DOBIJA PRAZAN STRING

      this.queryParams.filter.cuisine = cuisine;
      //U KOM GOD SLUCAJU, SADA CUISINE IZ PARAMETARA DOBIJA VREDNOST CUISINE VARIJABLE

=======
      let cuisine = params['cuisine'];
      if (cuisine == 'All') cuisine = '';
      this.queryParams.filter.cuisine = cuisine;
>>>>>>> origin/master
      this.getRestaurants();
    });
  }

  getRestaurants() {
    this.service
      .getAll(this.queryParams)
      .subscribe((restaurants: RestaurantsList) => {
        this.restaurants = restaurants;
<<<<<<< HEAD
      });
  }

  priceFromControl = new FormControl(1);
  priceToControl = new FormControl(5);

  //CUSTOM FILTER KOJI SE MENJA NA INPUT
  onPriceChanged(): void {
=======
        console.log(restaurants);
      });
  }

  onPriceChanged(): void {
    console.log('ovo radi kad se klikne');
>>>>>>> origin/master
    this.queryParams.filter.priceFrom = this.priceFromControl.value || 1;
    this.queryParams.filter.priceTo = this.priceToControl.value || 5;
    this.getRestaurants();
  }

  onPageChanged(newPage: number) {
    this.queryParams.page = newPage;
    this.getRestaurants();
  }
}
<<<<<<< HEAD

//PRVO DOVEDEMO SVE RESTORANE SA SERVERA
//FILTRIRAMO PREKO RUTIRANJA, KLIKOM NA LINK U SIDEBARU A NE NA DUGME ILI RADIO
//ONDA PRATIMO RUTU U ngOnInit
=======
>>>>>>> origin/master
