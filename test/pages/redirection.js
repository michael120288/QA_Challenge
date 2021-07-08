import Page from './page';
import fetch from "node-fetch";

class RedirectionPage extends Page {

    open () { super.open('/redirector')}

    async redirection(){
        let response = await fetch('https://the-internet.herokuapp.com/redirect')
            .then(res=>res.url)
        expect(response)
            .toEqual('https://the-internet.herokuapp.com/status_codes')
    }
}

export default new RedirectionPage();