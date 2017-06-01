/**
 * Created by STYR-Curt on 5/31/2017.
 */

export class ReminderResponse {
    public text: string;
    public creationTime: Date;
    constructor(text: string, startTime: Date) {
        this.text = text;
        this.creationTime = startTime;
    }
}