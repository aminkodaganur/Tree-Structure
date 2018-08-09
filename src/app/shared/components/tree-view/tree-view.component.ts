import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }
  handleAddItem(event) {
    this.onClickAddNewItem.emit(event);
  }
  handleSelected(e: NodeEvent) {
    console.log(e);
  }
  handleCreated(event: NodeEvent) {
    this.onNodeCreated.emit(event);
  }
  handleRenamed(event: NodeEvent) {
    this.onNodeRenamed.emit(event);
  }
  handleRemoved(event: NodeEvent) {
    this.onNodeRemoved.emit(event);
  }

}
