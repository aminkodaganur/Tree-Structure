import { Component, OnInit, Input } from '@angular/core';
import { TreeModel, NodeEvent, NodeMenuItemAction } from 'ng2-tree';
import { OdsAdminService, ApiService } from './../../shared/services';

@Component({
  selector: 'app-ods-group',
  templateUrl: './ods-group.component.html',
  styleUrls: ['./ods-group.component.css']
})
export class OdsGroupComponent implements OnInit {
  groupDataMock: TreeModel[];
  groupSettings: any;
  @Input() permission: string;

  constructor(private odsAdminService: OdsAdminService, private apiService: ApiService) { }

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
    this.apiService.get('/assets/odsAdminMockData.json', true).subscribe(res => {
      res.groupMockData.map(groupData=>{
        groupData["settings"] = this.groupSettings;
      });
      this.groupDataMock = res.groupMockData;
      console.log('Resposne from Group Component: ',res);
    });
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
    console.log(`you are selected ${selectedGroup} group`);
  }
  onSelectGroup(event: any) {
    let selectedGroup = '';
    selectedGroup = event.value;
    if (event && event.parent) {
      selectedGroup = this.onSelectGroup(event.parent) + '.' + selectedGroup;
    }
    return selectedGroup;
  }
}
