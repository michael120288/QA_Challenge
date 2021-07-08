import CheckBoxPage from './../pages/checkBoxes'

describe('Check box', ()=>{
    beforeEach(async ()=>{
        await CheckBoxPage.open()
    })

    it('Checkbox 1 is checked', async ()=>{
       await CheckBoxPage.checkBox1Checked()
    })

    it('Checkbox 2 is checked', async ()=>{
        await CheckBoxPage.checkBox2Checked()
    })

    it('Checkbox 1 is not checked', async ()=>{
        await CheckBoxPage.checkBox1NotChecked()
    })

    it('Checkbox 2 is not checked', async ()=>{
        await CheckBoxPage.checkBox2NotChecked()
    })
})