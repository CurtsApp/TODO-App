"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by STYR-Curt on 6/2/2017.
 */
class UserHandler {
    static addUser(user) {
        //If there are no pages in the list,    or      the current page is full
        if (UserHandler.UserList[0].length === 0 || UserHandler.UserList[1].length === 100) {
            //If current page is full make a new page
            console.log('Made page');
            UserHandler.addPage();
        }
        //In the newest page
        //UserHandler.UserList[UserHandler.UserList[0].length - 1][UserHandler.UserList[1].length - 1] = user;
        console.log('[' + (UserHandler.UserList[0].length - 1) + '] [' + (UserHandler.UserList[1].length - 1) + ']');
    }
    static getUser(id) {
        let pageNum = Math.floor(id / 100);
        let reducedId = id % 10;
        return UserHandler.UserList[pageNum][reducedId];
    }
    static addPage() {
        //UserList.push(new User[] = {})
        UserHandler.UserList.push(new Array());
    }
}
UserHandler.UserList = [[], []]; // A list of Pages of Users, Each Page will have 100 Users
exports.UserHandler = UserHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVXNlckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7R0FFRztBQUVIO0lBSVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFVO1FBQzVCLHdFQUF3RTtRQUN4RSxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRix5Q0FBeUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELG9CQUFvQjtRQUNwQixzR0FBc0c7UUFDdEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUVqSCxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFVO1FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksU0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLGdDQUFnQztRQUNoQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7QUExQmMsb0JBQVEsR0FBYSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLDBEQUEwRDtBQUQzRyxrQ0E0QkMifQ==