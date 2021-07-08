import DragAndDropPage from './../pages/dragAndDrop'
describe('Drag and Drop action', ()=> {
    before(async ()=>{
       await DragAndDropPage.open()
    })

    it('Drag and drop A to B', async ()=>{
       await DragAndDropPage.dragAtoB()
    })

    it('Drag and drop B to A', async ()=>{
        await DragAndDropPage.dragBtoA()
    })
})