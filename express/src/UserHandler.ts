import {User} from "./User";
/**
 * Created by STYR-Curt on 6/2/2017.
 */

export class UserHandler {
    private static UserList: User[][] = [[],[]]; // A list of Pages of Users, Each Page will have 100 Users


    public static addUser(user: User) {
        //If there are no pages in the list,    or      the current page is full
        if(UserHandler.UserList[0].length === 0 || UserHandler.UserList[1].length === 100) {
            //If current page is full make a new page
            console.log('Made page');
            UserHandler.addPage();
        }

        //In the newest page
        //UserHandler.UserList[UserHandler.UserList[0].length - 1][UserHandler.UserList[1].length - 1] = user;
        console.log('[' + (UserHandler.UserList[0].length - 1) + '] [' + (UserHandler.UserList[1].length - 1) + ']');

    }

    public static getUser(id: number) :User{
        let pageNum = Math.floor(id / 100);
        let reducedId = id % 10;
        return UserHandler.UserList[pageNum][reducedId];
    }

    private static addPage() {
        //UserList.push(new User[] = {})
        UserHandler.UserList.push(new Array<User>());
    }
}
