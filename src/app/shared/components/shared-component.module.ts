import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { TreeModule } from 'ng2-tree';
import { PopupModule } from '@progress/kendo-angular-popup';

import { TreeViewComponent } from './tree-view';
import { HirarchicalTreeComponent } from './hirarchical-tree';
import { GridContextMenuComponent } from './grid-context-menu';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TreeViewModule,
        TreeModule,
        PopupModule
    ],
    exports: [
        TreeViewComponent,
        HirarchicalTreeComponent,
        GridContextMenuComponent
    ],
    declarations: [
        TreeViewComponent,
        HirarchicalTreeComponent,
        GridContextMenuComponent
    ],
    providers: [
    ]
})
export class SharedComponentsModule {

}

