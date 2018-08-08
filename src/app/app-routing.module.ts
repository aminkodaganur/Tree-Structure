import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DefaultComponent } from './default';

const routes: Routes = [
    { path: 'ods', loadChildren: './ods/ods.module#OdsModule'},
    { path: '**', component: DefaultComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
