import Page from './page';
import auth from "../../data/basicAuth";
import fetch from "node-fetch";


class BasicAuthPage extends Page {
    get headerPage(){ return $('h3');}

    open () {
        super.open('/basic_auth');
    }

     async browserAuth(){
         await browser.url(`https://${auth.login}:${auth.password}@the-internet.herokuapp.com/basic_auth`);
         await expect(await this.headerPage).toBeDisplayed();
         await expect(await(await this.headerPage).getText()).toEqual(auth.header);
    }

    async browserAuthError(){
        let error = await fetch(`https://${auth.wrongLogin}:${auth.wrongPassword}@the-internet.herokuapp.com/basic_auth`).then(res=> res);
        console.log(error)
        expect(error.statusText).toEqual(auth.unauthorized)
        expect(error.status).toEqual(auth.status401)

    }



}

export default new BasicAuthPage();