import BasicAuthPage from '../pages/basicAuth'

describe('BASIC AUTH', ()=>{
    before(async ()=>{
       await BasicAuthPage.open()
    })

    it('Popup authorization',  async ()=>{
        await BasicAuthPage.browserAuth()
    })
})