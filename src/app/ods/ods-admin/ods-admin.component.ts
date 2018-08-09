import { Component, OnInit } from '@angular/core';
import { TreeModel, NodeEvent, NodeMenuItemAction } from 'ng2-tree';
import { OdsAdminService } from './../../shared/services';

@Component({
  selector: 'app-ods-admin',
  templateUrl: './ods-admin.component.html',
  styleUrls: ['./ods-admin.component.css']
})
export class OdsAdminComponent implements OnInit {
  groupDataMock: TreeModel[];
  teamDataMock: TreeModel[];
  groupSettings: any;
  teamSettings: any;

  constructor(private odsAdminService: OdsAdminService) { }

  ngOnInit() {
    // Initilising Mock need to make Get call to get the Data for Group Management.
    this.groupDataMock = [];
    this.teamDataMock = [];

    this.groupSettings = {
      menuItems: [
        { action: NodeMenuItemAction.NewFolder, name: 'Add Group', cssClass: '' },
        { action: NodeMenuItemAction.NewTag, name: 'Add Function', cssClass: '' },
        { action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: '' },
        { action: NodeMenuItemAction.Rename, name: 'Rename', cssClass: '' }
      ]
    };
    this.teamSettings = {
      menuItems: [
        { action: NodeMenuItemAction.NewFolder, name: 'Add Team', cssClass: '' },
        { action: NodeMenuItemAction.NewTag, name: 'Add Member', cssClass: '' },
        { action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: '' },
        { action: NodeMenuItemAction.Rename, name: 'Rename', cssClass: '' }
      ]
    };
  }

  onClickAddGroup(groupName: any) {
    let newGroup = this.odsAdminService.onClickAddNewItem(groupName, this.groupSettings);
    this.groupDataMock.push(newGroup);
  }
  onClickAddTeam(teamName: any) {
    let newTeam = this.odsAdminService.onClickAddNewItem(teamName, this.teamSettings);
    this.teamDataMock.push(newTeam);
  }
  onGroupCreated(treeRef: any) {
    this.groupDataMock = this.odsAdminService.extractTreeModelData(treeRef);
    console.log(this.groupDataMock);
  }
  onTeamCreated(treeRef: any) {
    this.teamDataMock = this.odsAdminService.extractTreeModelData(treeRef);
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
  onTeamRemoved(event: NodeEvent) {
    if (event['lastIndex'] === -1) {
      this.teamDataMock = this.teamDataMock.filter(
        team => team.value !== event.node.value
      );
    }
    else {
      let treeRef = event['treeView'];
      this.teamDataMock = this.odsAdminService.extractTreeModelData(treeRef);
    }
  }
  onTeamRenamed(treeRef: any) {
    this.teamDataMock = this.odsAdminService.extractTreeModelData(treeRef);
  }
  onGroupRenamed(treeRef: any) {
    this.groupDataMock = this.odsAdminService.extractTreeModelData(treeRef);
  }
}
