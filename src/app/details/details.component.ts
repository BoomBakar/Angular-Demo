import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import {ActivatedRoute} from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import {FormGroup,FormControl,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent,ReactiveFormsModule],
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
      <section class="apply">
      <h1>Apply now</h1>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="name" class="form-data label">Name</label>
        <input type="text" class="form-data" id="name" formControlName="name"><br>

        <label for="email" class="form-data label">Email</label>
        <input type="text" class="form-data" id="email" formControlName="email"><br>
        
        <label for="phone" class="form-data label">Phone</label>
        <input type="text" class="form-data" id="phone" formControlName="phone"><br>
        
        <button class="primary-button" type="submit">Apply</button><br>
      </form>
    </section>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation!: HousingLocation;
  applyForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.name ?? ' ',
      this.applyForm.value.email ?? ' ',
      this.applyForm.value.phone ?? ' '
    );
  };
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });

   }
}
