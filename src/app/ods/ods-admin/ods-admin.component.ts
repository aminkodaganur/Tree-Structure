import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ods-admin',
  templateUrl: './ods-admin.component.html',
  styleUrls: ['./ods-admin.component.css']
})
export class OdsAdminComponent implements OnInit {
  permissions: string[];
  permissionValue: string;
  constructor() { }

  ngOnInit() {
    this.permissions = ['Allowed', 'Denied'];
  }
  onRadioChange(event: any) {
    this.permissionValue = event.value;
  }
}
