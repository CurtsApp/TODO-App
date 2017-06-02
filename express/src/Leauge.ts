import {User} from "./User";
/**
 * Created by STYR-Curt on 6/2/2017.
 */

export interface League {
    name: string;
    admins: User[];
    owner: User;
    id: number;

}