///<reference path="Reminder.ts"/>
import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Reminder} from "./Reminder";
import {UserHandler} from "./UserHandler";


// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        const server = http.createServer(this.express);
        server.listen(3000);
        console.log('We are now listening on 3000')

    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }




    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler

        let reminderList :Reminder[] = [];

        router.get('/reminder/search', (req,res) => {
            let searchPhrase = req.query.search;
            console.log('Searching for: ' + searchPhrase + '...');
            let applicableReminders :Reminder[] = [];
            for(let i = 0; i < reminderList.length; i++) {
                // Is potentially valid
                let partialText: string;
                if (reminderList[i].text.length === 1) {
                    partialText = reminderList[i].text.substring(0, searchPhrase.length + 1);
                } else {
                    partialText = reminderList[i].text.substring(0, searchPhrase.length);
                }
                if (partialText === searchPhrase || searchPhrase.length === 0) {

                    applicableReminders.push(reminderList[i]);
                    console.log('Found Match');
                }
            }

            res.json(applicableReminders);

        });

        router.get('/reminder/query', (req,res) => {
           res.json(() => {
               console.log('Ehh!');
           });
        });

        router.delete('/reminder', (req, res) => {
            console.log(req.query.text);
            let reminderToDelete = req.query.text;
            console.log('Looking to remove: ' + reminderToDelete);
            let itemsRemoved: number = 0;

            for (let i = reminderList.length - 1; i >= 0; i--) {
                console.log(i);
                if(reminderList[i].text === reminderToDelete) {
                    reminderList.splice(i, 1);
                    console.log('Removed Index: ' + i);
                    itemsRemoved++;
                }
            }
            res.json({message: itemsRemoved + ' items named ' + reminderToDelete + ' have been removed from the server'});


        })

        router.get('/reminder', (req, res) => {
            res.json(reminderList[req.query.index]);
        });

        router.get('/reminder/all', (req, res) => {
            res.json(reminderList);
            console.log('All reminders retrieved')
        });

        router.delete('/reminder/all', (req, res) => {
            reminderList = req.body.data;
            res.json({
                message: 'All reminders have been overwritten'
            });
            console.log('All reminders overwritten')
        });



        router.post('/reminder', (req, res) => {
            res.json({
                message: 'Your reminder has been added to the list.'
            });

            console.log(req.body);
            reminderList.push(new Reminder(req.body.text, new Date()));
            console.log('Added reminder to list');
        });


        router.get('/proleague/user', (req, res) => {


          console.log()
        });

        //UserHandler.addUser({name: 'Bill', id: 0, dateCreated: new Date, preferences: {}, password: 'password'});
        this.express.use('/', router);
    }

}

new App();
