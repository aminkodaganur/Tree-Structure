import { Injectable, ElementRef } from '@angular/core';
import { NodeMenuItemAction } from 'ng2-tree';

@Injectable()
export class OdsAdminService {
    constructor() { }

    extractTreeModelData(treeElementRef: any) {
        let _treeData = [];
        let trees = treeElementRef['_results'];
        trees.forEach(tree => {
            if (tree && tree['tree']) {
                _treeData.push(this._buildTreeDataModel(tree['tree']));
            }
        });
        return _treeData || [];
    }

    onClickAddNewItem(itemName: string, menuSettings: any) {
        let newItem = { settings: menuSettings, value: itemName, children: [] };
        return newItem;
    }

    private _buildTreeDataModel(tree: any) {
        let _treeModel: any = {
            value: '',
            children: [],
            settings: tree.node.settings
        };
        _treeModel.value = tree.node.value;
        if (tree.children) {
            tree.children.forEach(child => {
                _treeModel.children.push(this._buildTreeDataModel(child));
            });
        }
        return _treeModel || [];
    }
}