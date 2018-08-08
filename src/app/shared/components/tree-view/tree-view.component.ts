import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { TreeModel, NodeEvent } from 'ng2-tree';

@Component({
  selector: 'my-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() groupData: TreeModel[];
  @Output() onNodeRemoved = new EventEmitter();
  // @ViewChild('treeView') treeView: any;
  constructor() { }

  ngOnInit() {
  }

  // onNodeSelected(e: NodeEvent): void {
  //   console.log(e);
  // }
  // handleCreated($event) {
  //   console.log($event);
  //   // console.log(this.treeView['tree']);
  //   if (this.treeView && this.treeView['tree']) {
  //     const treeModel = this.buildModelFromTree(this.treeView['tree']);
  //     console.log('Tree View', treeModel);
  //   }
  // }
  handleRemoved(event: NodeEvent){
    this.onNodeRemoved.emit(event);
  }
  // buildModelFromTree(tree) {
  //   let model: any = {
  //     value: '',
  //     children: [],
  //     settings: tree.node.settings
  //   };
  //   model.value = tree.node.value;
  //   if (tree.children) {
  //     tree.children.forEach(child => {
  //       model.children.push(this.buildModelFromTree(child));
  //     });
  //   }
  //   return model;
  // }

}
