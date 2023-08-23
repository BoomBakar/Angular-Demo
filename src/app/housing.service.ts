import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations'
  constructor() { }

  async getHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const json = await data.json() ?? [];
    return json;
  }
  async getHousingLocationById(id: number): Promise<HousingLocation> {
    const data = await fetch(`${this.url}/${id}`);
    const json = await data.json() ?? ' ';
    return json;
  }
  submitApplication(name: string, email: string, phone: string) {
    console.log(`Application submitted for ${name} with email ${email} and phone ${phone}`);
  }

}
