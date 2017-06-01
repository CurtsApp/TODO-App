/**
 * Created by STYR-Curt on 5/26/2017.
 */

import * as tabris from 'tabris';

import {Reminder} from "./Reminder";
import {PRIORITY} from "./PRIORITY";

export class PriorityChooserPage extends  tabris.Page{
    reminder: Reminder;

    constructor(reminder: Reminder) {
        super();

        this.title = 'Choose the priority of this reminder';
        this.background = '#BDBDBD';

        this.reminder = reminder;
        this.createComponents();

    }

    private createComponents() {
        let marginBox = new tabris.Composite({
            top: 100, bottom: 100, left: 40, right: 40, background: '#E0E0E0'
        }).appendTo(this);

        const PRIORITIES = [
            {
                name: 'LOW',
                type: PRIORITY.LOW
            },{
            name: 'MED',
                type: PRIORITY.MED
            }, {
            name: 'HIGH',
                type: PRIORITY.HIGH
            }
        ];

        new tabris.Picker({
            left: 0, top: 0, right: 0, bottom: 0, borderColor: marginBox.background, itemCount: PRIORITIES.length, itemText: (index) => {
                console.log(PRIORITIES[index].name);
                return PRIORITIES[index].name}, selectionIndex: 0
        }).on('select', (index) => {
            console.log(index);
            this.reminder.setPriority(PRIORITIES[index.index].type);
            this.dispose();
        }).appendTo(marginBox);



    }
}