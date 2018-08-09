import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OdsAdminService } from './../../../shared/services';

@Component({
    selector: 'app-input-btn',
    templateUrl: './input-btn.component.html',
    styleUrls: ['./input-btn.component.css']
})
export class inputBtnComponent implements OnInit {
    @Output() clickAddItem = new EventEmitter();
    @Input() placeHolderText = new EventEmitter();
    itemName: string = '';
    constructor(private odsAdminService: OdsAdminService) { }

    ngOnInit() {
    }
    onClickAddItem(event: any) {
        let newItem = this.odsAdminService.onClickAddNewItem(this.itemName);
        this.clickAddItem.emit(newItem);
        this.itemName = '';
    }
}
