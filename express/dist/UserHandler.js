"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by STYR-Curt on 6/2/2017.
 */
class UserHandler {
    static addUser(user) {
        if (UserHandler.UserList.length === 0 || UserHandler.UserList[UserHandler.UserList.length - 1]) {
            //If current page is full make a new page
        }
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
exports.UserHandler = UserHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVXNlckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7R0FFRztBQUVIO0lBSVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFVO1FBQzVCLEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1Rix5Q0FBeUM7UUFDN0MsQ0FBQztJQUdMLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQVU7UUFDNUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxTQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sTUFBTSxDQUFDLE9BQU87UUFDbEIsZ0NBQWdDO1FBQ2hDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0o7QUF0QkQsa0NBc0JDIn0=