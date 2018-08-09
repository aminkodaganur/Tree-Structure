import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared';
import { odsRoutingModule } from './ods-routing.module';

import { OdsAdminComponent } from './ods-admin';
import { OdsTeamComponent } from './ods-team';
import { OdsSelectStatusComponent } from './ods-select-status';

@NgModule({
    declarations: [
        OdsAdminComponent,
        OdsTeamComponent,
        OdsSelectStatusComponent
    ],
    imports: [
        CommonModule,
        odsRoutingModule,
        SharedComponentsModule,
        FormsModule
    ],
    exports: [
        OdsAdminComponent,
        OdsTeamComponent,
        OdsSelectStatusComponent
    ],
    providers: []
})
export class OdsModule { }
