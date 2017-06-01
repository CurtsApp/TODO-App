/**
 * Created by STYR-Curt on 5/30/2017.
 */
import * as tabris from 'tabris';

export class DemonstrationPage extends  tabris.Page{
    constructor() {
        super();
        this.title = 'To-Do View';
        this.background = '#FAFAFA';

        this.createComponents();

    }

    createComponents() {
        let componentArea = new tabris.Composite({
            top: 0, bottom: 0, left: 32, right: 32
        }).appendTo(this);

        let spinnerBox = this.createWidgetSection().appendTo(componentArea);

        new tabris.ActivityIndicator({
            centerX: 0, centerY: 0
        }).appendTo(spinnerBox);

        let radioBox = this.createWidgetSection().appendTo(componentArea);

        for(let i: number = 0; i < 3; i++) {
            new tabris.RadioButton({
                top: 'prev()', right: 0, left: 0, height: 20,
                text: i.toString(),

            }).on('select', (event) => {
                //console.log(event.checked);
                if(event.checked) {
                    console.log("Selected: " + event.target.text);
                } else {
                    console.log("Deselected: " + event.target.text);
                }

                //console.log(target);
            }).appendTo(radioBox);
        }

        let checkBox = this.createWidgetSection().appendTo(componentArea);

        new tabris.CheckBox({
            centerX: 0, centerY: 0
        }).on('checkedChanged', (event) => {
            //console.log(event);
            if(event.value) {
                console.log('Checked!');
            } else {
                console.log('Unchecked :(');
            }
        }).appendTo(checkBox);

        let toggleBox = this.createWidgetSection().appendTo(componentArea);

        new tabris.ToggleButton({
            centerX: 0, centerY: 0
        }).on('checkedChanged', ({value}) => {
            //console.log(value);
            if(value) {
                console.log('checked!');
            } else {
                console.log('unchecked!');
            }
        }).appendTo(toggleBox);

        let switchBox = this.createWidgetSection().appendTo(componentArea);

        new tabris.Switch({
            centerX: 0, centerY: 0
        }).on('select', (event) => {
            //console.log(event);
            if(event.checked) {
                console.log('Switched On');
            } else {
                console.log('Switched Off');
            }
        }).appendTo(switchBox);

        let sliderBox = this.createWidgetSection().appendTo(componentArea);

        new tabris.Slider({
            centerY: 0, left: 0,right: 0,
            maximum: 255,
            minimum: -256,
            selection: 0
        }).on('select', (event) =>{
            console.log('Selected: ' + event.selection);
        }).appendTo(sliderBox);


    }

    private createWidgetSection() {
        return new tabris.Composite({top:'prev()', right: 0, left: 0, height: 100});
}
}