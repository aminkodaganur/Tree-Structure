import { Component, OnInit } from '@angular/core';
import { NodeMenuItemAction, TreeModel } from '../../../../node_modules/ng2-tree';

@Component({
  selector: 'app-ods-admin',
  templateUrl: './ods-admin.component.html',
  styleUrls: ['./ods-admin.component.css']
})
export class OdsAdminComponent implements OnInit {
  groupDataMock: TreeModel[];
  groupName: string = '';
  settings: any;

  constructor() { }

  ngOnInit() {
    // Initilising Mock need to make Get call to get the Data for Group Management.
    this.groupDataMock = [];

    // Menu Settings
    this.settings = {
      menuItems: [
        { action: NodeMenuItemAction.NewFolder, name: 'Add Group', cssClass: '' },
        { action: NodeMenuItemAction.NewTag, name: 'Add Function', cssClass: '' },
        { action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: '' },
        { action: NodeMenuItemAction.Rename, name: 'Rename', cssClass: '' }
      ]
    };
  }

  onClickAddGroup() {
    if (this.groupName !== '') {
      let newItem = this.createGroup(this.groupName);
      this.groupDataMock.push(newItem);
      this.groupName = '';
    }
  }
  createGroup(input: string) {
    let _group = { settings: this.settings, value: input, children: [] };
    return _group;
  }
  onNodeRemoved(event){
    if(event.lastIndex === -1){
      console.log(event);
    }
  }
}
