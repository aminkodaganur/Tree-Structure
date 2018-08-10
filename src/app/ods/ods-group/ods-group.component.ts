import { Component, OnInit, Input } from '@angular/core';
import { TreeModel, NodeEvent, NodeMenuItemAction } from 'ng2-tree';
import { OdsAdminService } from './../../shared/services';

@Component({
  selector: 'app-ods-group',
  templateUrl: './ods-group.component.html',
  styleUrls: ['./ods-group.component.css']
})
export class OdsGroupComponent implements OnInit {
  groupDataMock: TreeModel[];
  groupSettings: any;
  @Input() permission: string;

  constructor(private odsAdminService: OdsAdminService) { }

  ngOnInit() {
    // Initilising Mock need to make Get call to get the Data for Group Management.
    this.groupDataMock = [];

    this.groupSettings = {
      menuItems: [
        { action: NodeMenuItemAction.NewFolder, name: 'Add Group', cssClass: '' },
        { action: NodeMenuItemAction.NewTag, name: 'Add Function', cssClass: '' },
        { action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: '' },
        { action: NodeMenuItemAction.Rename, name: 'Rename', cssClass: '' }
      ]
    };
  }

  onClickAddGroup(groupName: any) {
    let newGroup = this.odsAdminService.onClickAddNewItem(groupName, this.groupSettings);
    this.groupDataMock.push(newGroup);
  }
  onGroupCreated(treeRef: any) {
    this.groupDataMock = this.odsAdminService.extractTreeModelData(treeRef);
    console.log(this.groupDataMock);
  }
  onGroupRemoved(event: NodeEvent) {
    if (event['lastIndex'] === -1) {
      this.groupDataMock = this.groupDataMock.filter(
        group => group.value !== event.node.value
      );
    }
    else {
      let treeRef = event['treeView'];
      this.groupDataMock = this.odsAdminService.extractTreeModelData(treeRef);
    }
  }
  onGroupRenamed(treeRef: any) {
    this.groupDataMock = this.odsAdminService.extractTreeModelData(treeRef);
  }
  onGroupSelected(event: any) {
    //console.log(this.permission);
    let selectedGroup = this.onSelectGroup(event.node);
    console.log(`you are selected ${selectedGroup} group` );
  }
  onSelectGroup(event: any) {
    let temp1 = '';
    temp1 += event.value;
    let temp = [];
    temp.push(event.value);
    console.log('parent', event.node);
    if (event && event.parent) {
      temp.push(this.onSelectGroup(event.parent));
      temp1 += "." + this.onSelectGroup(event.parent);
    }
    return temp1;
  }
}
