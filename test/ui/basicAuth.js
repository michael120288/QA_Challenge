import BasicAuthPage from '../pages/basicAuth'

describe('Basic auth', ()=>{
    before(async ()=>{
       await BasicAuthPage.open()
    })

    it('Popup authorization',  async ()=>{
        await BasicAuthPage.browserAuth()
    })
})