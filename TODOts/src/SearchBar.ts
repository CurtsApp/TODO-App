/**
 * Created by STYR-Curt on 5/26/2017.
 */
import * as tabris from 'tabris';

import {ISearchable} from './ISearchable';


export class SearchBar {
    private searchBox: tabris.Composite;
    private input: tabris.TextInput;
    private outputComposite: tabris.Composite;
    private itemList: ISearchable[];

    constructor(config: tabris.CompositeProperties, itemList: ISearchable[], outputComposite: tabris.Composite) {
        this.itemList = itemList;
        this.outputComposite = outputComposite;

        this.searchBox = new tabris.Composite(config);

        this.input = new tabris.TextInput({
            left: 0, right: 0, top: 0, bottom: 0,
            message: 'Search Filter'
        }).on('input', ({text}) => {
            // Filter the reminders

            for (let item of itemList) {
                if (item.getText().length >= text.length) {
                    // Is potentially valid
                    let partialText: string;
                    if (item.getText().length === 1) {
                        partialText = item.getText().substring(0, text.length + 1);
                    } else {
                        partialText = item.getText().substring(0, text.length);
                    }
                    if (partialText === text || text.length === 0) {

                        //Reminder fits search criteria
                        item.appendTo(this.outputComposite);

                    } else {
                        // Reminder does not fit search criteria
                        item.detach();
                    }
                } else {
                    // Reminder is shorter than search string
                    item.detach();
                }
            }
        }).appendTo(this.searchBox);

        // Removes border on text input for ios
        if(tabris.device.platform.toLowerCase() === 'ios')  {
            this.input.borderColor = this.searchBox.background;
        }
    }

    public appendTo(composite: tabris.Composite) {
        this.searchBox.appendTo(composite);
    }
}
