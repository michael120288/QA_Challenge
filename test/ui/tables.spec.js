import TablesPage from '../pages/tables.page'

describe('TABLES', ()=> {
    before(async ()=>{
        await TablesPage.open();
    })

    it('Table 1. Sorting table of last names by alphabetic order A..Z', async ()=> {
        await TablesPage.lastNameAZ()
    })

    it('Table 1. Sorting table of last names by alphabetic order Z..A', async ()=> {
        await TablesPage.lastNameZA()
    })

    it('Table 2. Sorting table of first names by alphabetic order A..Z', async ()=> {
        await TablesPage.firstNameAZ()
    })

    it('Table 2. Sorting table of first names by alphabetic order Z..A', async ()=> {
        await TablesPage.firstNameZA()
    })

})