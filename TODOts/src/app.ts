import * as tabris from 'tabris';

import{MainPage} from './MainPage';
import {Reminder} from "./Reminder";
import {BetterButton} from "./BetterButton";
import {ServiceLayer} from "./ServiceLayer";
import {SyncPage} from './SyncPage';


// Main Function
class App {
    private navigationView: tabris.NavigationView;

    constructor() {
        this.navigationView = new tabris.NavigationView({
            left: 0, top: 0, right: 0, bottom: 0
        }).appendTo(tabris.ui.contentView);

        new SyncPage().appendTo(this.navigationView);

        let drawer = tabris.ui.drawer;

        drawer.enabled = true;

        let drawerCollection = new tabris.CollectionView({
            left: 0, right: 0, top: 0, bottom: 0,
            itemCount: 30,
            cellHeight: 40,
            createCell: () => {
                let cell = new tabris.Composite();
                new tabris.TextView({
                    top: 0, bottom: 0, left: 0, right: 60
                }).appendTo(cell);
                new tabris.CheckBox({
                    top: 0, bottom: 0, left: 'prev()', right: 0
                }).appendTo(cell);
                return cell;
            },
            updateCell: (cell, index) =>
            {
                cell.apply({
                    TextView: {text: index.toString()}
                })
            }
        }).on('select', (event) => {
            console.log(event);
        }).appendTo(drawer);









    }
}



new App();