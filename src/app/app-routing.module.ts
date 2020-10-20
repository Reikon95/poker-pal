import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandSimulatorComponent } from './pages/hand-simulator';

const routes: Routes = [
  { path: 'hand-simulator', component: HandSimulatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
