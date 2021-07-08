import TablesPage from '../pages/tables.page'

describe('Tables', ()=> {
    before(async ()=>{
        await TablesPage.open();
    })

    it('Table 1 Write a test sorting of last names by alphabetic order A..Z', async ()=> {
        await TablesPage.lastNameAZ()
    })

    it('Table 1 Write a test sorting of last names by alphabetic order Z..A', async ()=> {
        await TablesPage.lastNameZA()
    })

    it('Table 2 Write a test sorting of first names by alphabetic order A..Z', async ()=> {
        await TablesPage.firstNameAZ()
    })

    it('Table 2 Write a test sorting of first names by alphabetic order Z..A', async ()=> {
        await TablesPage.firstNameZA()
    })

})