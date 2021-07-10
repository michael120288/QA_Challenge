import StatusCodePage from '../pages/statusCode.page';

describe('TESTS FOR BROKEN LINKS', function() {
    before(async ()=>{
        await StatusCodePage.open();
    });

    it('should check link for status 200', async function () {
       await StatusCodePage.status200();
    });

    it('should check link for status 301', async function () {
        await StatusCodePage.status301();
    });

    it('should check link for status 404', async function () {
        await StatusCodePage.status404();
    });

    it('should check link for status 500', async function () {
        await StatusCodePage.status500();
    });
});
