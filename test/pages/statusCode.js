import Page from './page';
import fetch from "node-fetch";

class StatusCodePage extends Page {

    open () { super.open('/status_codes')}

    async status200(){
        let response = await fetch('https://the-internet.herokuapp.com/status_codes/200').then(res=>res.status)
        expect(response).toEqual(200)
    }

    async status301(){
        let response = await fetch('https://the-internet.herokuapp.com/status_codes/301').then(res=>res.status)
        expect(response).toEqual(301)
    }

    async status404(){
        let response = await fetch('https://the-internet.herokuapp.com/status_codes/404').then(res=>res.status)
        expect(response).toEqual(404)
    }

    async status500(){
        let response = await fetch('https://the-internet.herokuapp.com/status_codes/500').then(res=>res.status)
        expect(response).toEqual(500)
    }

}

export default new StatusCodePage();
