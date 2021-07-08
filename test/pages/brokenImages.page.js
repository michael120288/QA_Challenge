import Page from './page';

class BrokenImagesPage extends Page {

    get images() {return $$('.example>img')}

    open () {
        super.open('/broken_images');
    }

    async imageIsBroken(){
        let countBrokenImages = 0
        const images = await this.images;
        for (let i = 0; i < images.length; i++) {
            let imageWidth = await browser.execute(el => {
                return document.getElementsByTagName('img')[el]
                    .naturalWidth
            }, i + 1)
            if (!imageWidth) {
                countBrokenImages++
            }
        }
        console.log('The page has ' + countBrokenImages + ' broken images')
        expect(countBrokenImages).toEqual(countBrokenImages)
    }
}

export default new BrokenImagesPage();
