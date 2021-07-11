import BasicAuthPage from '../pages/basicAuth.page'

describe('BASIC AUTH', ()=>{
    before(async ()=>{
       await BasicAuthPage.open();
    });

    it('Popup authorization',  async ()=>{
        await BasicAuthPage.browserAuth();
    });

    it('Popup authorization error',  async ()=>{
        await BasicAuthPage.browserAuthError();
    });
})