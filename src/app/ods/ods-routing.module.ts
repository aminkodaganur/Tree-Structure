import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdsAdminComponent } from './ods-admin';
import { OdsSelectStatusComponent } from './ods-select-status';

const routes: Routes = [
  { path: 'admin', component: OdsAdminComponent },
  { path: 'status', component: OdsSelectStatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class odsRoutingModule { }
