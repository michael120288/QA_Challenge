import BrokenImagesPage from './../pages/brokenImages.page'

describe('Tables', ()=> {
    before(async ()=>{
        await BrokenImagesPage.open();
    })

    it('Write a test to check if the images are broken', async () => {
       await BrokenImagesPage.imageIsBroken()
    })

})