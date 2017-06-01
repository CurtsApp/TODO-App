/**
 * Created by STYR-Curt on 5/26/2017.
 */
import * as tabris from 'tabris';

import {ISearchable} from './ISearchable';
import {PRIORITY} from "./PRIORITY";
import {ServiceLayer} from "./ServiceLayer";



// Reminder Object
export class Reminder extends tabris.Composite implements ISearchable {
    public button: tabris.Button;
    public checkMark: tabris.CheckBox;
    //4
    //public reminderList: Reminder[];
    public priority: PRIORITY;
    public progress: tabris.ProgressBar;
    public timeCreated: Date;
    public timeToEnd: Date;


    constructor(text: string) {
        //3
        //constructor(text: string, reminderList: Reminder[]) {

        super({top: 'prev() 10', left: 0, right: 0, height: 80});
        //2
        //this.reminderList = reminderList;


        this.button = new tabris.Button({
            top:0,left:0,right:'10%',bottom:20,
            text: text
        }).on('select', () => {
            //Remove reminder on click
            if(this.checkMark.checked) {
                this.removeThisReminderFromServer();
            }

            this.dispose();

        }).appendTo(this);

        this.checkMark = new tabris.CheckBox({
            left: 'prev() 0', right: 0, top: 0, bottom:20
        }).appendTo(this);

        this.progress = new tabris.ProgressBar({
            left: 0, right: 0, top: 'prev() 2', bottom: 0,
            minimum: 0,
            maximum: 100,
            selection: 60
        }).appendTo(this);
    }


    public getText(): string {
        return this.button.text;
    }

    public appendTo(parent: tabris.Composite) {
        super.appendTo(parent);
        return this;
    }

    public detach() {
        super.detach();
        return this;
    }

    public dispose() {
        //1
        //this.reminderList.splice(this.reminderList.indexOf(this), 1);
        super.dispose();
    }

    public setPriority(priority: PRIORITY) {
        this.priority = priority;
        switch (priority) {
            case PRIORITY.LOW:
                break;
            case PRIORITY.MED:
                this.background = '#FFEE58';
                break;
            case PRIORITY.HIGH:
                this.background = '#F44336';
                break;
        }
    }

    public getTimeCreated(): Date {
        return this.timeCreated;
    }

    public setCompletionDate(date: Date) {
        this.timeToEnd = date;
    }

    private removeThisReminderFromServer() {

            ServiceLayer.httpDeleteAsync('/reminder', 'text=' + this.getText(), (res) => {

        });

    }
}