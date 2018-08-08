import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TreeModel, NodeMenuItemAction, NodeEvent } from 'ng2-tree';

@Component({
  selector: 'my-hirarchical-tree',
  templateUrl: './hirarchical-tree.component.html',
  styleUrls: ['./hirarchical-tree.component.css']
})
export class HirarchicalTreeComponent implements OnInit {

  custom: TreeModel;
  @Input() tree: TreeModel;
  @ViewChild('treeView') treeView: any;
  constructor() { }

  ngOnInit() {
    this.custom = {
      settings: {
        menuItems: [
          { action: NodeMenuItemAction.NewFolder, name: 'Add Group', cssClass: '' },
          { action: NodeMenuItemAction.NewTag, name: 'Add Function', cssClass: '' },
          { action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: '' },
          { action: NodeMenuItemAction.Rename, name: 'Rename', cssClass: '' }
        ]
      },
      value: 'Group',
      children: [{ value: 'Function', icon: '' }, { value: 'Function', icon: '' }]
    };
  }

  public onNodeSelected(e: NodeEvent): void {
    console.log(e);
    console.log(this.custom);
  }
  handleCreated($event) {
    console.log($event);
    console.log(this.custom);
   // console.log(this.treeView['tree']);
    if (this.treeView && this.treeView['tree']) {
      const treeModel = this.buildModelFromTree(this.treeView['tree']);
      console.log('Tree View',treeModel);
    }
  }
  buildModelFromTree(tree) {
    let model: any = {
      value: '',
      children: [],
      settings: tree.node.settings
    };
    model.value = tree.node.value;
    if (tree.children) {
      tree.children.forEach(child => {
        model.children.push(this.buildModelFromTree(child));
      });
    }
    return model;
  }
}
