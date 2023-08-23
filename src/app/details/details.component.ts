import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="details">
      <h1>Details</h1>
      <p class="details-city">City: Houston</p>
    </section>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number;
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
   }

}
