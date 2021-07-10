import RedirectionPage from '../pages/redirection.page';

describe('REDIRECTION', function() {
    before(async ()=>{
        await RedirectionPage.open()
    })

    it('should check the status code after being redirected', async function () {
        await RedirectionPage.redirection()
    });

});

