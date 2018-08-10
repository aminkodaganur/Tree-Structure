import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';

import { SharedComponentsModule } from '../shared';
import { odsRoutingModule } from './ods-routing.module';

import { OdsAdminComponent } from './ods-admin';
import { OdsTeamComponent } from './ods-team';
import { OdsGroupComponent } from './ods-group';
import { OdsSelectStatusComponent } from './ods-select-status';

@NgModule({
    declarations: [
        OdsAdminComponent,
        OdsTeamComponent,
        OdsGroupComponent,
        OdsSelectStatusComponent
    ],
    imports: [
        CommonModule,
        odsRoutingModule,
        SharedComponentsModule,
        FormsModule,
        MatRadioModule
    ],
    exports: [
        OdsAdminComponent,
        OdsTeamComponent,
        OdsGroupComponent,
        OdsSelectStatusComponent
    ],
    providers: []
})
export class OdsModule { }
