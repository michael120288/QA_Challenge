import Page from './page';
import {firstName, lastName} from "../../data/table";



class TablesPage extends Page {

    open () { super.open('/tables');}

    //Table1
    get lastNamesRows() {return $$('#table1>tbody>tr>td:first-child');}

    //Table2
    get firstNamesRows() {return $$('#table2>tbody>tr>td:nth-child(2)');}


    async setLastNames(){
        let lastNames = [];
        let rows = await this.lastNamesRows;
        for (let i = 0; i < rows.length; i++){
            lastNames.push(await rows[i].getText());
        }
        return lastNames;
    }

    async setFirstNames(){
        let firstNames = []
        let rows = await this.firstNamesRows;
        for (let i = 0; i < rows.length; i++){
            firstNames.push(await rows[i].getText());
        }
        return firstNames;
    }

    async lastNameAZ(){
        let arrayLastNamesAZ = await (await this.setLastNames()).sort();
        console.log(arrayLastNamesAZ);
        await expect(await (arrayLastNamesAZ)[0]).toEqual(lastName[0]);

    }

    async lastNameZA(){
        let arrayLastNamesZA = await (await this.setLastNames()).sort().reverse();
        console.log(arrayLastNamesZA);
        await expect(await (arrayLastNamesZA)[0]).toEqual(lastName[3]);
    }

    async firstNameAZ(){
        let arrayFirstNamesAZ = await (await this.setFirstNames()).sort();
        console.log(arrayFirstNamesAZ);
        await expect(await (arrayFirstNamesAZ)[0]).toEqual(firstName[0]);

    }

    async firstNameZA(){
        let arrayFirstNamesZA = await (await this.setFirstNames()).sort().reverse();
        console.log(arrayFirstNamesZA);
        await expect(await (arrayFirstNamesZA)[0]).toEqual(firstName[3]);
    }

}

export default new TablesPage();
