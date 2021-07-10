import Page from './page';
import auth from "../../data/basicAuth";


class BasicAuthPage extends Page {
    get headerPage(){ return $('h3');}

    open () {
        super.open('/basic_auth');
    }

     async browserAuth(){
         await browser.url(`https://${auth.data}:${auth.data}@the-internet.herokuapp.com/basic_auth`);
         await expect(await this.headerPage).toBeDisplayed();
         await expect(await(await this.headerPage).getText()).toEqual(auth.header);
    }

}

export default new BasicAuthPage();