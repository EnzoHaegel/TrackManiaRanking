import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { TotdComponent } from './pages/totd/totd.component';

// create map route to go mapComponent
const routes: Routes = [
  { path: '', redirectTo: 'totd', pathMatch: 'full' },
  { path: 'map', component: MapComponent },
  { path: 'totd', component: TotdComponent},
  { path: '**', redirectTo: 'totd' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
