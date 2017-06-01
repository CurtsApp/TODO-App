/**
 * Created by STYR-Curt on 5/30/2017.
 */
import * as tabris from 'tabris';
import {BetterButton} from "./BetterButton";

export class AnimationPage extends tabris.Page {
    constructor() {
        super();
        this.title = 'Animation Examples';

        this.background = '#FAFAFA';

        this.createComponents();
    }

    private createComponents() {
        let mainBounds = new tabris.ScrollView({
            top: 20, right: 5, left: 5, bottom: 0
        }).appendTo(this);


        let startButton = new BetterButton({left: 0, right: 0, top: 'prev()', height: 60}, 'Animate').appendTo(mainBounds);


        let tapAndGoBox = new tabris.Composite({
            left:0, right: 0, top: 'prev()', bottom: 0
        }).appendTo(mainBounds);

        let textField = new BetterButton({
            width: 80, height: 60, centerX: 0, centerY: 0}, 'hello!'
        ).appendTo(tapAndGoBox);

        startButton.on('tap', () => {
            console.log('Animating...');

            setInterval(
                () => {
                    textField.animate({
                        transform: {
                            rotation: 2 * Math.PI
                        }
                    }, {
                        delay: 0,
                        duration: 3000,
                        repeat: 1,
                        reverse: true,
                        easing: 'ease-out'

                    });
                }
                , 6000);

            textField.animate({
                transform: {
                    translationY: 100
                }
            }, {
                delay: 0,
                duration: 1000,
                repeat: 0,
                reverse: false,
                easing: 'ease-out'

            });

        });

        textField.on('swipeLeft', ()=> {
            console.log('Swipe Left');
            textField.animate({
                transform: {
                    translationX: -100
                }
            }, {
                delay: 0,
                duration: 400,
                repeat: 0,
                reverse: false,
                easing: 'ease-out'

            });
        }).on('swipeRight', ()=> {
            console.log('Swipe Right');
            textField.animate({
                transform: {
                    translationX: 100
                }
            }, {
                delay: 0,
                duration: 400,
                repeat: 0,
                reverse: false,
                easing: 'ease-out'

            });
        }).on('swipeUp', ()=> {
            console.log('Swipe Up');
            textField.animate({
                transform: {
                    translationY: -100
                }
            }, {
                delay: 0,
                duration: 400,
                repeat: 0,
                reverse: false,
                easing: 'ease-out'

            });
        }).on('swipeDown', ()=> {
            console.log('Swipe Down');
            textField.animate({
                transform: {
                    translationY: 100
                }
            }, {
                delay: 0,
                duration: 400,
                repeat: 0,
                reverse: false,
                easing: 'ease-out'

            });
        });

        /*textField.on('pan', (event)=> {
            //console.log(event);

                textField.animate({
                    transform: {
                        translationX: event.translationX,
                        translationY: event.translationY
                    }
                }, {
                    delay: 0,
                    duration: 1,
                    repeat: 0,
                    reverse: false,
                    easing: 'ease-out'

                });

        });*/




    }



    /*

    Trying to calculate the pixel position of a widget requires calculation of all of its parent widgets, the process
    would look something like this but is rather complex.

    private touchCoordToWidgetCoord(x: number, y: number, widget: tabris.Widget) : {x:number, y:number}{
        let xOffset: number = 0;
        let yOffset: number = 0;

        let topOffset: number = 0;
        let leftOffset: number = 0;
        let rightOffset: number = 0;
        let bottomOffset: number = 0;
        let widgetWidth: number = 0;
        let widgetHeight: number = 0;

        console.log('top: ' + widget.top);
        console.log('left: ' + widget.left);
        console.log('right: ' + widget.right);
        console.log('bottom: ' + widget.bottom);
        console.log(this.getWidgetHeight(widget));



        return {x,y};
    }



    private getWidgetHeight(widget: tabris.Widget) :number {
        let height:number = widget.height;
        if(height === null) {
            let top: number = 0;
            let bottom: number = 0;
            while(widget.top === null) {
                if(typeof widget.top === 'number') {
                    top = widget.top + top;
                    //console.log('Was a number!');
                } else {
                    if(widget.top !== 'prev()') {
                        let locationString = widget.top.split(' ');
                        //Add in offset
                        top = top + parseInt(locationString[1]);

                    }

                    top = top + this.getWidgetHeight(widget);
                }


                if(typeof widget.bottom === 'number') {
                    bottom = widget.bottom + bottom;
                    //console.log('Was a number!');
                } else {
                    if(widget.top !== 'prev()') {
                        let locationString = widget.bottom.split(' ');
                        //Add in offset
                        bottom = bottom + parseInt(locationString[1]);

                    }

                    bottom = bottom + this.getWidgetHeight(widget);
                }

            }
            console.log('TrueTopOffset: ' + top);

            height = tabris.device.screenHeight - top - bottom;
        }
        //console.log('Height: ' + height);
        return height;
    }*/

}
