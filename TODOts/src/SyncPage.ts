/**
 * Created by STYR-Curt on 5/26/2017.
 */
import * as tabris from 'tabris';

import {Reminder} from './Reminder';
import {BetterButton} from "./BetterButton";
import {ServiceLayer} from "./ServiceLayer";
import {ReminderResponse} from "./ReminderResponse";

export class SyncPage extends tabris.Page{


    private scrollView: tabris.ScrollView;

    constructor() {
        super();
        //Setup Page
        this.title = 'To-Do Server';
        this.background = '#BDBDBD';

        this.createComponents();
    }

    private createComponents(): void {

        //Layout Composite
        let topBox: tabris.Composite = new tabris.Composite({
            left: 32, right: 32, top: 10, height: 100}).appendTo(this);



        //Housing for reminderCreator
        let creationBox: tabris.Composite = new tabris.Composite({
            top: 0, right: 0, left: 0, bottom: '50%'
        }).appendTo(topBox);



        new BetterButton(({
            top: 'prev()', right: 32, left: 32, height: 60, background: '#424242'
        }), 'Pull Down Active Reminders').on('tap', () => {
            //Sync Active Reminders to the server
            console.log('Pulling Reminders');
            this.getAllReminders();

        }).appendTo(this);


        this.scrollView = new tabris.ScrollView({
            left: 0, right: 0, bottom: 0, top: 'prev() 10'
        });

        //Create reminder search bar
        let searchBar = new tabris.Composite({
            top: 'prev() 0', right: 0, left: 0, bottom: 0,
            background:'#BDBDBD'}).appendTo(topBox);

        let searchText = new tabris.TextInput({
            left: 0, right: 0, top: 0, bottom: 0,
            message: 'Search Filter'
        }).on('accept', ({text}) => {
            //Send search query
            //Update scroll view

            ServiceLayer.httpGetAsync('/reminder/search', 'search=' + searchText.text, (res) => {
                let responseList: ReminderResponse[] = res;
                let reminderList: Reminder[] = [];
                for(let responseItem in responseList) {
                    reminderList.push(new Reminder(responseList[responseItem].text));
                }
                this.updateReminderList(reminderList);
            });
        }).appendTo(searchBar);

        //Layout Composite
        let scrollBox: tabris.Composite = new tabris.Composite({
            top: 'prev() 10', right: 0, left: 0, bottom: 0, background: '#9E9E9E'
        }).appendTo(this);

        //Finish Scroll View setup
        this.scrollView.appendTo(scrollBox);


        // New Reminder Input
        let reminderCreator: tabris.TextInput = new tabris.TextInput({
            top: 0, right: 0, left: 0, bottom: 0,
            message: 'Add Reminder',

        }).on('accept', ({text}) => {
            // Sanitize inputs
            if (text !== '') {

                let newReminder = new Reminder(text);

                this.uploadReminder(newReminder);
                reminderCreator.text = '';

            }

        }).appendTo(creationBox);

        // Removes border on Text Input for ios
        if(tabris.device.platform.toLowerCase() === 'ios')  {
            reminderCreator.borderColor = creationBox.background;
        }

    }

    private updateReminderList(reminders: Reminder[]): void {
        this.scrollView.children().dispose();
        for(let reminder of reminders) {
            reminder.appendTo(this.scrollView);
        }
    }
    private getAllReminders() : void {

        ServiceLayer.httpGetAsync('/reminder/all', '', (response => {
            let responseList: ReminderResponse[] = response;
            let reminderList: Reminder[] = [];
            for(let responseItem in responseList) {
                reminderList.push(new Reminder(responseList[responseItem].text));
            }
            this.updateReminderList(reminderList);
        }));
    }

    private uploadReminder(reminder: Reminder) : void {
        ServiceLayer.httpPostAsync('/reminder', {text: reminder.getText()}, (res) => {

        });
    }




}