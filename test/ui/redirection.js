import RedirectionPage from './../pages/redirection';

describe('broken link test', function() {
    before(async ()=>{
        await RedirectionPage.open()
    })

    it('should check the page for broken links', async function () {
        await RedirectionPage.redirection()
    });

});

