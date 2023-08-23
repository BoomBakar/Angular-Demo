import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HousingLocationComponent} from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path:'details/:id', component: DetailsComponent, title: 'Details'},

];

export default routes;