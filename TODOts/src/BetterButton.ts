/**
 * Created by STYR-Curt on 5/30/2017.
 */

import * as tabris from "tabris";

export class BetterButton extends  tabris.Composite{


    constructor(config: tabris.CompositeProperties, text: string) {
        super(config);

        this.cornerRadius = 5;
        // Inner composite
        let inner = new tabris.Composite({
            top: 2, left: 2, right: 2, bottom: 2,
            background: '#BDBDBD'
        }).appendTo(this);

        new tabris.TextView({
            centerX: 0, centerY:0,
            text: text,
            font: 'bold 20px',
            textColor: '#424242'
        }).appendTo(inner);

    }

    on(type: string, listener: (event: any) => void, context?: Object): this {
        let fullEvent;
        if(type === 'tap') {
            fullEvent = function(event: any) {
                this.animate({
                    opacity: 0.5
                }, {
                    delay: 0,
                    duration: 100,
                    repeat: 1,
                    reverse: true,
                    easing: 'ease-out'
                });
                listener(event);
            };
        } else {
            fullEvent = listener;
        }

        super.on(type, fullEvent, context);
        return this;
    }



}