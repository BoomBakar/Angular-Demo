import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import {ActivatedRoute} from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="details">
      <h1>Details</h1>
      <img class="listing-photo" [src]="housingLocation.photo" alt="Photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-city">City: {{housingLocation.city}}</p>
      <p class="listing-state">State: {{housingLocation.state}}</p>
      <p class="listing-price">Price: \${{housingLocation.price}} / month</p>
      <p class="listing-units">Units: {{housingLocation.availableUnits}}</p>
      <p class="listing-wifi">Wifi: {{housingLocation.wifi}}</p>
      <p class="listing-laundry">Laundry: {{housingLocation.laundry}}</p>

    </section>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation!: HousingLocation;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);

   }
}
