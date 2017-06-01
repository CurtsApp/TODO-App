"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tabris_1 = require("tabris");
var MARGIN = 32;
var reminderIndex = 0;
// Contains all reminders so that they can be repopulated after a search
var reminderList = [];
var navigationView = new tabris_1.NavigationView({
    left: 0, top: 0, right: 0, bottom: 0
}).appendTo(tabris_1.ui.contentView);
createMainPage();
// Reminder Object
var Reminder = (function () {
    function Reminder(index, text) {
        this.creationIndex = index;
        this.button = new tabris_1.Button({
            top: 'prev() 10', left: MARGIN, right: MARGIN, height: 60,
            text: text
        }).on('select', function () {
            this.dispose();
            reminderList.splice(reminderList.indexOf(this), 1);
        });
    }
    return Reminder;
}());
// Main Function
function createMainPage() {
    var page = new tabris_1.Page({
        title: 'To-Do'
    }).appendTo(navigationView);
    // Will contain all reminders
    var scrollView;
    var searchBox = new tabris_1.Composite({
        top: MARGIN, right: MARGIN, left: MARGIN, height: 60
    }).appendTo(page);
    var searchInput = new tabris_1.TextInput({
        message: 'Search Filter'
    }).on('input', function (_a) {
        // Filter the reminders
        var text = _a.text;
        for (var _i = 0, reminderList_1 = reminderList; _i < reminderList_1.length; _i++) {
            var reminder = reminderList_1[_i];
            if (reminder.button.text.length >= text.length) {
                // Is potentially valid
                var partialText = void 0;
                if (reminder.button.text.length === 1) {
                    partialText = reminder.button.text.substring(0, text.length + 1);
                }
                else {
                    partialText = reminder.button.text.substring(0, text.length);
                }
                if (partialText === text || text.length === 0) {
                    reminder.button.appendTo(scrollView);
                    // console.log('Adding: ' + reminderList[i].button.text);
                }
                else {
                    reminder.button.detach();
                    // console.log(reminderList[i].button.text.substring(0,text.length) + ' != '+ text);
                }
            }
            else {
                // Reminder is shorter than search string
                reminder.button.detach();
            }
        }
    }).appendTo(searchBox);
    // New Reminder Input
    var reminderCreator = new tabris_1.TextInput({
        top: 'prev() 10', right: MARGIN, left: MARGIN, height: 60,
        message: 'Add Reminder'
    }).on('accept', function (_a) {
        var text = _a.text;
        // Sanitize inputs
        if (text !== '') {
            var newReminder = new Reminder(reminderIndex, text);
            newReminder.button.appendTo(scrollView);
            reminderList.push(newReminder);
            // console.log(reminderList[0].button.text + '!');
            reminderCreator.text = '';
        }
    }).appendTo(page);
    scrollView = new tabris_1.ScrollView({
        left: 0, right: 0, top: reminderCreator, bottom: 0
    }).appendTo(page);
}
//# sourceMappingURL=app.js.map