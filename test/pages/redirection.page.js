import Page from './page';
import fetch from "node-fetch";
import redirection from "../../data/redirection";

class RedirectionPage extends Page {

    get redirectionLink() {return $('p>a');}

    open () { super.open('/redirector');}

    async redirection(){
        let link = await (await this.redirectionLink)
            .getAttribute('href');
        let response = await fetch(`${redirection.url}${link}`)
            .then(res=>res.url);
        expect(response)
            .toEqual(redirection.statusCodes);
    }
}

export default new RedirectionPage();