import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared/components';

import { odsRoutingModule } from './ods-routing.module';
import { OdsAdminComponent } from './ods-admin';
import { OdsSelectStatusComponent } from './ods-select-status';

@NgModule({
    imports: [
        CommonModule,
        odsRoutingModule,
        SharedComponentsModule,
        FormsModule
    ],
    exports: [
        OdsAdminComponent,
        OdsSelectStatusComponent
    ],
    declarations: [
        OdsAdminComponent,
        OdsSelectStatusComponent
    ]
})
export class OdsModule { }
