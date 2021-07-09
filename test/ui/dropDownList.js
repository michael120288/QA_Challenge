import DropDownList from './../pages/dropDownList';

describe('DROPDOWN LIST', ()=>{
    before(async ()=>{
        await DropDownList.open();
    });

    it('Default value in the placeholder is "Please select an option"', async ()=> {
        await DropDownList.defaultNamePlaceholder();
    })

    it('User can choose option 1 from the list', async ()=>{
       await DropDownList.chooseOption1();
    });

    it('User can choose option 1 from the list', async ()=>{
        await DropDownList.chooseOption2();
    });

})
