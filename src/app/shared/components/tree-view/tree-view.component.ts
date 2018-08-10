import { Component, OnInit, Input, EventEmitter, Output, ViewChildren } from '@angular/core';
import { TreeModel, NodeEvent } from 'ng2-tree';

@Component({
  selector: 'my-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() items: TreeModel[];
  @Output() onNodeCreated = new EventEmitter();
  @Output() onNodeRenamed = new EventEmitter();
  @Output() onNodeRemoved = new EventEmitter();
  @Output() onClickAddNewItem = new EventEmitter();
  @Output() onNodeSelected = new EventEmitter();
  @ViewChildren('treeView') treeView = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  // event handlers for tree view component.
  handleAddItem(event) {
    this.onClickAddNewItem.emit(event);
  }
  handleSelected(event: NodeEvent) {
    this.onNodeSelected.emit(event);
  }
  handleCreated(event: NodeEvent) {
    this.onNodeCreated.emit(this.treeView);
  }
  handleRenamed(event: NodeEvent) {
    this.onNodeRenamed.emit(this.treeView);
  }
  handleRemoved(event: NodeEvent) {
    event['treeView'] = this.treeView;
    this.onNodeRemoved.emit(event);
  }

}
