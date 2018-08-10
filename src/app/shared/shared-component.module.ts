import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { TreeModule } from 'ng2-tree';
import { PopupModule } from '@progress/kendo-angular-popup';

import {
    TreeViewComponent, HirarchicalTreeComponent, GridContextMenuComponent,
    inputBtnComponent, inputRadioBtnComponent
} from './components';

import { OdsAdminService } from './services';

@NgModule({
    declarations: [
        TreeViewComponent,
        HirarchicalTreeComponent,
        GridContextMenuComponent,
        inputBtnComponent,
        inputRadioBtnComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        TreeViewModule,
        TreeModule,
        PopupModule
    ],
    exports: [
        TreeViewComponent,
        HirarchicalTreeComponent,
        GridContextMenuComponent,
        inputBtnComponent,
        inputRadioBtnComponent
    ],
    providers: [
        OdsAdminService
    ]
})
export class SharedComponentsModule {

}

