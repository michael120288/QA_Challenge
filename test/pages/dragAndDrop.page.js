import Page from './page';
let dragAndDropPage = require('html-dnd').codeForSelectors;

class DragAndDropPage extends Page {

    get headerCubeB() {return $('div#column-b > header');}

    open () {
        super.open('/drag_and_drop');
    }

    async dragAtoB() {
       await browser.execute(dragAndDropPage, '#column-a', '#column-b');
       await expect(await(await this.headerCubeB).getText()).toEqual('A');
    }

    async dragBtoA() {
        await browser.execute(dragAndDropPage, '#column-b', '#column-a');
        await expect(await(await this.headerCubeB).getText()).toEqual('B');
    }

}

export default new DragAndDropPage();