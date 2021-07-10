import Page from './page';
import fetch from "node-fetch";
import statusCodes from "../../data/statusCodes";

class StatusCodePage extends Page {

    get statusLink200() {return $('li:nth-of-type(1) > a')}
    get statusLink301() {return $('li:nth-of-type(2) > a')}
    get statusLink404() {return $('li:nth-of-type(3) > a')}
    get statusLink500() {return $('li:nth-of-type(4) > a')}

    open () { super.open('/status_codes')}

    async status200(){
        let link = await (await this.statusLink200).getAttribute('href')
        let response = await fetch(`${statusCodes.url}${link}`).then(res=>res.status)
        expect(response).toEqual(statusCodes[200])
    }

    async status301(){
        let link = await (await this.statusLink301).getAttribute('href')
        let response = await fetch(`${statusCodes.url}${link}`).then(res=>res.status)
        expect(response).toEqual(statusCodes[301])
    }

    async status404(){
        let link = await (await this.statusLink404).getAttribute('href')
        let response = await fetch(`${statusCodes.url}${link}`).then(res=>res.status)
        expect(response).toEqual(statusCodes[404])
    }

    async status500(){
        let link = await (await this.statusLink500).getAttribute('href')
        let response = await fetch(`${statusCodes.url}${link}`).then(res=>res.status)
        expect(response).toEqual(statusCodes[500])
    }

}

export default new StatusCodePage();
