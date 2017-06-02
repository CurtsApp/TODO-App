import {User} from "./User";
/**
 * Created by STYR-Curt on 6/2/2017.
 */

export class UserHandler {
    private static UserList: User[][]; // A list of Pages of Users, Each Page will have 100 Users


    public static addUser(user: User) {
        if(UserHandler.UserList.length === 0 || UserHandler.UserList[UserHandler.UserList.length - 1]) {
            //If current page is full make a new page
        }


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
