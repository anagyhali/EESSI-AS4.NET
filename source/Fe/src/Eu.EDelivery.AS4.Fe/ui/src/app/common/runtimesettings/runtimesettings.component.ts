import { Component, Input, SimpleChanges, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ItemType } from './../../api/ItemType';

@Component({
    selector: 'as4-runtime-settings',
    template: `
        <form [formGroup]="form">
            <div *ngIf="!!form.get('setting')">
                <h4 *ngIf="showTitle === true">Settings</h4>
                <div formArrayName="setting">
                    <div *ngFor="let set of form.get('setting').controls; let i = index" [formGroupName]="i">
                        <as4-input [tooltip]="selectedType && selectedType.properties[i] && selectedType.properties[i].description">
                            <span label>{{set.value.key}}</span>
                            <div [ngSwitch]="selectedType && selectedType.properties[i] && selectedType.properties[i].type">
                                <input *ngSwitchCase="'int'" type="number" class="form-control" formControlName="value"/>
                                <input *ngSwitchDefault type="text" class="form-control" formControlName="value"/>
                            </div>
                        </as4-input>                        
                    </div>
                </div>
            </div>
        </form>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuntimeSettingsComponent implements OnChanges {
    @Input() public form: FormGroup;
    @Input() public types: ItemType[];
    @Input() public itemType: string;
    @Input() public pshowTitle: boolean = true;
    public selectedType: ItemType;
    public ngOnChanges(changes: SimpleChanges) {
        let itemType = changes['itemType'] && changes['itemType'].currentValue;
        if (!!!this.types) {
            return;
        }
        this.selectedType = this.types.find((type) => type.technicalName === itemType);
    }
}
