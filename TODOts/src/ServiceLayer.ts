import {ReminderResponse} from "./ReminderResponse";
/**
 * Created by STYR-Curt on 5/31/2017.
 */

export class ServiceLayer {

    private static URL: string = 'http://192.168.100.184:3000';


    public static httpGetAsync(route: string, query: string, callback: (response: any) => void) {

        let fetchRequest: Request = new Request(this.URL + route + '?' + query, {
            method: 'GET',
            body: null,
        });
        console.log('here');

        fetch(fetchRequest).then((res)=>{
            //res.json() returns a promise of a parsed json object
            return res.json();
        }).then((resObj)=>{
            //Once the object is resolved run the callback with the received object as the parameter
            callback(resObj);
            console.log('Get Success');
        }).catch((ex)=>{
            console.log('Get Request Error');
            console.error(ex)
        });
    }


    public static httpPostAsync(route: string, data: any, callback: (response: Response) => void) {

        let fetchRequest: Request = new Request(this.URL + route, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        });

        fetch(fetchRequest).then((res)=>{
            callback(res);
            return res.json();
        }).then((json)=>{
            console.log('Post Success');
        }).catch((ex)=>{
            console.log('Post Request Error');
            console.error(ex)
        });
    }

    public static httpDeleteAsync(route: string, query: string, callback: (response: Response) => void) {

        console.log(this.URL + route + '?' + query);
        let fetchRequest: Request = new Request(this.URL + route + '?' + query, {
            method: 'DELETE',
            body: null,
        });

        fetch(fetchRequest).then((res)=>{
            callback(res);

            return res.json();
        }).then((json)=>{
            console.log('Delete Success');
            console.log(json);
        }).catch((ex)=>{
            console.log('Delete Request Error');
            console.error(ex)
        });
    }


}