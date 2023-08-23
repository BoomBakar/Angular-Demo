import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected: HousingLocation[] = [
    {
      id: 0,
      name: 'The DJ House',
      city: 'Houston',
      state: 'LA',
      price: 1000,
      photo: 'assets/saru-robert-9rP3mxf8qWI-unsplash.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 1,
      name: 'The Bay Club',
      city: 'Baytown',
      state: 'TX',
      price: 1000,
      photo: 'assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 2,
      name: 'The Dayton',
      city: 'Dayton',
      state: 'TX',
      price: 1200,
      photo: 'assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: false
    },
    {
      id: 3,
      name: 'The Woodlands',
      city: 'The Woodlands',
      state: 'RX',
      price: 1500,
      photo: 'assets/r-architecture-GGupkreKwxA-unsplash.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: true
    },
    {
      
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      price: 800,
      photo: '/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      price: 1200,
      photo: '/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      price: 1000,
      photo: '/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/r-architecture-GGupkreKwxA-unsplash.jpg',
      availableUnits: 2,
      price: 1200,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      price: 1000,
      photo: '/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      price: 1000,
      photo: '/assets/webaliser-_TPTXZd9mOo-unsplash.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ]
  constructor() { }

  getHousingLocations(): HousingLocation[] {
    return this.protected;
  }
  getHousingLocationById(id: number): HousingLocation {

    return this.protected.find(housingLocation => housingLocation.id === id)!;
  }

}
