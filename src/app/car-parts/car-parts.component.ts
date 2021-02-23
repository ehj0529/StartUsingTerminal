import { Component } from '@angular/core';
import {CarPart} from '../shared/model/car-part';
import {CARPARTS} from '../shared/mock/car-part.mock';

@Component({
  selector: 'car-parts',
  templateUrl: 'car-parts.component.html',
  styleUrls: ['car-parts.component.css']
  /* html 을 분리 하여 적용 한다.
  template: `<h1>{{title}}</h1>
        <p> There are {{totalCarParts()}} total parts in stock.</p>
          <ul>
            <li *ngFor="let carPart of carParts">
              <h2>{{carPart.name | uppercase }}</h2>
              <p class="description">{{carPart.description | truncate:30}}</p>
              <p class="price">{{carPart.price | currency:'EUR':true}}</p>
              <p *ngIf="carPart.inStock > 0" > {{carPart.inStock}} in stock </p>
              <p *ngIf="carPart.inStock == 0"> Out of Stock </p>
            </li>
          </ul>`,
  styles: [`
    .description{
      color: #1976d2;
      font-size: smaller;
    }
    .price {
      color: coral;
      font-weight: bold;
    }
  `]
   */
})
export class CarPartsComponent {
  title = 'Ultra Racing.... StartUsingTerminal';

  carParts!: CarPart[];

  ngOnInit() {
    this.carParts = CARPARTS;
  }

  // carParts: CarPart[] = [{
  //   id: 1,
  //   name: 'Super Tires',
  //   description: 'These tires are the very best',
  //   inStock: 5,
  //   price: 4.99
  // }, {
  //   id: 2,
  //   name: 'Reinforced Shocks',
  //   description: 'Shocks made from kryptonite',
  //   inStock: 3,
  //   price: 9.99
  // }, {
  //   id: 3,
  //   name: 'Padded Seats',
  //   description: 'Super soft seats for a smooth ride',
  //   inStock: 0,
  //   price: 5.46
  // }];


  totalCarParts() {
    let sum = 0;

    for (const carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
  }
}

