import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeModel, NodeEvent } from 'ng2-tree';
import { OdsAdminService } from './../../shared/services';

@Component({
  selector: 'app-ods-admin',
  templateUrl: './ods-admin.component.html',
  styleUrls: ['./ods-admin.component.css']
})
export class OdsAdminComponent implements OnInit {
  groupDataMock: TreeModel[];
  teamDataMock: TreeModel[];
  @ViewChild('teamTreeView') teamTreeView: any;
  @ViewChild('groupTreeView') groupTreeView: any;

  constructor(private odsAdminService: OdsAdminService) { }

  ngOnInit() {
    // Initilising Mock need to make Get call to get the Data for Group Management.
    this.groupDataMock = [];
    this.teamDataMock = [];
  }

  onClickAddGroup(newItem: any) {
    this.groupDataMock.push(newItem);
  }
  onClickAddTeam(newItem: any) {
    this.teamDataMock.push(newItem);
  }
  onGroupCreated(event: any) {
    this.groupDataMock = this.odsAdminService.extractTreeModelData(this.groupTreeView);
  }
  onTeamCreated(teamItems: any) {
    this.teamDataMock = this.odsAdminService.extractTreeModelData(this.teamTreeView);
  }
  onGroupRemoved(event: NodeEvent) {
    this.groupDataMock = this.groupDataMock.filter(
      group => group.value !== event.node.value
    );
  }
  onTeamRemoved(event: NodeEvent) {
    this.teamDataMock = this.teamDataMock.filter(
      team => team.value !== event.node.value
    );
  }
  onTeamRenamed(event: NodeEvent) {
    this.teamDataMock = this.odsAdminService.extractTreeModelData(this.teamTreeView);
  }
  onGroupRenamed(event: NodeEvent) {
    this.groupDataMock = this.odsAdminService.extractTreeModelData(this.groupTreeView);
  }
}
