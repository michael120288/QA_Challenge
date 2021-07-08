import StatusCodePage from './../pages/statusCode';

describe('broken link test', function() {
    before(async ()=>{
        await StatusCodePage.open()
    })

    it('should check the page for broken links', async function () {
       await StatusCodePage.status200()
    });

    it('should check the page for broken links', async function () {
        await StatusCodePage.status301()
    });

    it('should check the page for broken links', async function () {
        await StatusCodePage.status404()
    });

    it('should check the page for broken links', async function () {
        await StatusCodePage.status500()
    });
});
