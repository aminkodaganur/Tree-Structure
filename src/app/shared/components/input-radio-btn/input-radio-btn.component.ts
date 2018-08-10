import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-input-radio-btn',
    templateUrl: './input-radio-btn.component.html',
    styleUrls: ['./input-radio-btn.component.css']
})
export class inputRadioBtnComponent implements OnInit {
    @Output() onChange = new EventEmitter();
    @Input() inputValues: string[];
    constructor() { }

    ngOnInit() {
    }
    onRadioChange(event: any) {
        this.onChange.emit(event);
    }
}
