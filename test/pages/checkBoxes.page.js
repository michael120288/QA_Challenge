import Page from './page';

class CheckBoxPage extends Page {

    get checkBox1() {return $('form#checkboxes > input:nth-of-type(1)')}
    get checkBox2() {return $('form#checkboxes > input:nth-of-type(2)')}

    open () {
        super.open('/checkboxes');
    }

    async checkBox1Checked(){
        await (await this.checkBox1).waitForDisplayed()
        await (await this.checkBox1).click()
        await expect(await this.checkBox1).toBeChecked()
    }

    async checkBox2Checked(){
        await (await this.checkBox2).waitForDisplayed()
        await expect(await this.checkBox2).toBeChecked()
    }

    async checkBox1NotChecked(){
        await (await this.checkBox1).waitForDisplayed()
        await expect(await this.checkBox1).not.toBeChecked()
    }

    async checkBox2NotChecked(){
        await (await this.checkBox2).waitForDisplayed()
        await (await this.checkBox2).click()
        await expect(await this.checkBox2).not.toBeChecked()
    }

}

export default new CheckBoxPage();