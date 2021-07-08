import Page from './page';
import dropDownValue from "../../data/dropDownList"

class DropDownList extends Page {

    get headerOfThePage() {return $('h3')}
    get dropDownMenu() {return $('#dropdown')}
    get dropDownMenuPlaceholder() {return $('[selected="selected"]')}
    get option1() { return $('#dropdown>option:nth-child(2)')}
    get option2() { return $('#dropdown>option:nth-child(3)')}

    open () {
        super.open('/dropdown');
    }

    async defaultNamePlaceholder(){
        await (await this.dropDownMenu).waitForDisplayed()
        let text = await(await this.dropDownMenuPlaceholder).getText()
        console.log('========================')
        console.log(text)
        console.log('======================')
        expect(text).toEqual(dropDownValue.placeholder)
    }

    async chooseOption1() {
       await(await this.dropDownMenu).waitForDisplayed()
       await(await this.dropDownMenu).waitForClickable()
       await(await this.dropDownMenu).click()
       await(await this.option1).click()
        let text = await(await this.dropDownMenuPlaceholder).getText()
        console.log('========================')
        console.log(text)
        console.log('======================')
        expect(text).toEqual(dropDownValue.option1)
    }

    async chooseOption2() {
        await(await this.dropDownMenu).waitForDisplayed()
        await(await this.dropDownMenu).waitForClickable()
        await(await this.dropDownMenu).click()
        await(await this.option2).click()
        let text = await(await this.dropDownMenuPlaceholder).getText()
        console.log('========================')
        console.log(text)
        console.log('======================')
        expect(text).toEqual(dropDownValue.option2)
    }
}
export default new DropDownList();