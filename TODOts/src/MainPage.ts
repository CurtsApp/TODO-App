/**
 * Created by STYR-Curt on 5/26/2017.
 */
import * as tabris from 'tabris';

import {SearchBar} from './SearchBar';
import {Reminder} from './Reminder';
import {PriorityChooserPage} from "./PriorityChooserPage";
import {BetterButton} from "./BetterButton";
import {DemonstrationPage} from "./DemonstrationPage";
import {AnimationPage} from "./AnimationPage";

export class MainPage extends tabris.Page{


    private scrollView: tabris.ScrollView;
    private searchBar: SearchBar;
    private reminderList: Reminder[];



    constructor() {
        super();
        this.reminderList = [];

        //Setup Page
        this.title = 'To-Do';
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

        new BetterButton({
            top: 'prev()', right: '50%', left: 32, height: 60, background: '#424242'
        }, 'Demonstrations').on('tap', () => {
            new DemonstrationPage().appendTo(this.parent());
        }).appendTo(this);

        new BetterButton(({
            top: topBox, right: 32, left: 'prev()', height: 60, background: '#424242'
        }), 'Animations').on('tap', () => {
            new AnimationPage().appendTo(this.parent());
        }).appendTo(this);

        new BetterButton(({
            top: 'prev()', right: 32, left: 32, height: 60, background: '#424242'
        }), 'Sync Reminders').on('tap', () => {
            //Sync Active Reminders to the server
        }).appendTo(this);


        this.scrollView = new tabris.ScrollView({
            left: 0, right: 0, bottom: 0, top: 'prev() 10'
        });

        //Create reminder search bar
        this.searchBar = new SearchBar({top: 'prev() 0', right: 0, left: 0, bottom: 0,background:'#BDBDBD'}, this.reminderList, this.scrollView);
        this.searchBar.appendTo(topBox);

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

                let newReminder = new Reminder(text, this.reminderList);
                //Uncomment below to enable the priority picker
                //let priorityPicker = new PriorityChooserPage(newReminder).appendTo(this.parent());
                newReminder.appendTo(this.scrollView);
                this.reminderList.push(newReminder);
                reminderCreator.text = '';

            }

        }).appendTo(creationBox);

        // Removes border on Text Input for ios
        if(tabris.device.platform.toLowerCase() === 'ios')  {
            reminderCreator.borderColor = creationBox.background;
        }

    }


}