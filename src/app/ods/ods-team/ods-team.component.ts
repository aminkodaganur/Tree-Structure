import { Component, OnInit, ViewChildren } from '@angular/core';
import { NodeMenuItemAction, TreeModel, NodeEvent } from 'ng2-tree';
import { OdsAdminService } from './../../shared/services';

@Component({
  selector: 'app-ods-team',
  templateUrl: './ods-team.component.html',
  styleUrls: ['./ods-team.component.css']
})
export class OdsTeamComponent implements OnInit {
//   groupDataMock: TreeModel[];
//   groupName: string = '';
//   settings: any;
//   @ViewChildren('treeView') treeView: any;

  constructor(private odsAdminService: OdsAdminService) { }

  ngOnInit() {
    // Initilising Mock need to make Get call to get the Data for Group Management.
    // this.groupDataMock = [];

    // // Menu Settings
    // this.settings = {
    //   menuItems: [
    //     { action: NodeMenuItemAction.NewFolder, name: 'Add Group', cssClass: '' },
    //     { action: NodeMenuItemAction.NewTag, name: 'Add Function', cssClass: '' },
    //     { action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: '' },
    //     { action: NodeMenuItemAction.Rename, name: 'Rename', cssClass: '' }
    //   ]
    // };
  }

//   onClickAddGroup() {
//     if (this.groupName !== '') {
//       let newItem = this.createGroup(this.groupName);
//       this.groupDataMock.push(newItem);
//       this.groupName = '';
//     }
//   }
//   onNodeRenamed(event: NodeEvent){
//     this.groupDataMock = this.odsAdminService.extractTreeModelData(this.treeView);
//   }
//   onNodeRemoved(event: NodeEvent) {
//     this.groupDataMock = this.groupDataMock.filter(
//       group => group.value !== event.node.value
//     );
//   }
//   private createGroup(input: string) {
//     let _group = { settings: this.settings, value: input, children: [] };
//     return _group;
//   }
}
