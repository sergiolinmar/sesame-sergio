import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTrackerPageComponent } from './pages/time-tracker-page/time-tracker-page.component';

const routes: Routes = [
   { path: 'time-tracker', component: TimeTrackerPageComponent },
   { path: '', redirectTo: '/time-tracker', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
