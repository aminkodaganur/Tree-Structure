import { Component, OnInit, Input } from '@angular/core';
import { NodeMenuItemAction, TreeModel, NodeEvent } from 'ng2-tree';
import { OdsAdminService } from './../../shared/services';

@Component({
  selector: 'app-ods-team',
  templateUrl: './ods-team.component.html',
  styleUrls: ['./ods-team.component.css']
})
export class OdsTeamComponent implements OnInit {
  teamDataMock: TreeModel[];
  teamSettings: any;
  @Input() permission: string;

  constructor(private odsAdminService: OdsAdminService) { }

  ngOnInit() {
    // Initilising Mock need to make Get call to get the Data for Group Management.
    this.teamDataMock = [];
    this.teamSettings = {
      menuItems: [
        { action: NodeMenuItemAction.NewFolder, name: 'Add Team', cssClass: '' },
        { action: NodeMenuItemAction.NewTag, name: 'Add Member', cssClass: '' },
        { action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: '' },
        { action: NodeMenuItemAction.Rename, name: 'Rename', cssClass: '' }
      ]
    };
  }

  onClickAddTeam(teamName: any) {
    let newTeam = this.odsAdminService.onClickAddNewItem(teamName, this.teamSettings);
    this.teamDataMock.push(newTeam);
  }
  onTeamCreated(treeRef: any) {
    this.teamDataMock = this.odsAdminService.extractTreeModelData(treeRef);
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
  onTeamSelected(event: any) {
    //console.log(this.permission);
    console.log(`You are selected ${ event.node.value } team`);
  }
}
