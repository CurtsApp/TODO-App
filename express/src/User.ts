import {Preferences} from "./Preferences";
/**
 * Created by STYR-Curt on 6/2/2017.
 */

export interface User {
    name: string;
    id: number; //This number will be used to store users and search for their data.
    dataJoin: Date;
    password: string;
    preferences: Preferences;
}