"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="Reminder.ts"/>
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const Reminder_1 = require("./Reminder");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        const server = http.createServer(this.express);
        server.listen(3000);
        console.log('We are now listening on 3000');
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        let reminderList = [];
        router.get('/reminder/search', (req, res) => {
            let searchPhrase = req.query.search;
            console.log('Searching for: ' + searchPhrase + '...');
            let applicableReminders = [];
            for (let i = 0; i < reminderList.length; i++) {
                // Is potentially valid
                let partialText;
                if (reminderList[i].text.length === 1) {
                    partialText = reminderList[i].text.substring(0, searchPhrase.length + 1);
                }
                else {
                    partialText = reminderList[i].text.substring(0, searchPhrase.length);
                }
                if (partialText === searchPhrase || searchPhrase.length === 0) {
                    applicableReminders.push(reminderList[i]);
                    console.log('Found Match');
                }
            }
            res.json(applicableReminders);
        });
        router.get('/reminder/query', (req, res) => {
            res.json(() => {
                console.log('Ehh!');
            });
        });
        router.delete('/reminder', (req, res) => {
            console.log(req.query.text);
            let reminderToDelete = req.query.text;
            console.log('Looking to remove: ' + reminderToDelete);
            let itemsRemoved = 0;
            for (let i = reminderList.length - 1; i >= 0; i--) {
                console.log(i);
                if (reminderList[i].text === reminderToDelete) {
                    reminderList.splice(i, 1);
                    console.log('Removed Index: ' + i);
                    itemsRemoved++;
                }
            }
            res.json({ message: itemsRemoved + ' items named ' + reminderToDelete + ' have been removed from the server' });
        });
        router.get('/reminder', (req, res) => {
            res.json(reminderList[req.query.index]);
        });
        router.get('/reminder/all', (req, res) => {
            res.json(reminderList);
            console.log('All reminders retrieved');
        });
        router.delete('/reminder/all', (req, res) => {
            reminderList = req.body.data;
            res.json({
                message: 'All reminders have been overwritten'
            });
            console.log('All reminders overwritten');
        });
        router.post('/reminder', (req, res) => {
            res.json({
                message: 'Your reminder has been added to the list.'
            });
            console.log(req.body);
            reminderList.push(new Reminder_1.Reminder(req.body.text, new Date()));
            console.log('Added reminder to list');
        });
        this.express.use('/', router);
    }
}
new App();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtDQUFrQztBQUNsQyw2QkFBNkI7QUFDN0IsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyx5Q0FBb0M7QUFHcEMsa0RBQWtEO0FBQ2xEO0lBS0ksb0RBQW9EO0lBQ3BEO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7SUFFL0MsQ0FBQztJQUVELGdDQUFnQztJQUN4QixVQUFVO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUtELDJCQUEyQjtJQUNuQixNQUFNO1FBQ1Y7OzJCQUVtQjtRQUNuQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsNEJBQTRCO1FBRTVCLElBQUksWUFBWSxHQUFlLEVBQUUsQ0FBQztRQUVsQyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUc7WUFDbkMsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDcEMsT0FB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