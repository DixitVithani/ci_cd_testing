const {setup, teardown} = require("./helpers");

describe('General Safety Rules', () => {
    afterEach(async ()=> {
        await teardown();
    });

    test('should deny a read to the notes collections' ,async () => {
        const db = await setup();
        const notesRef = db.collection('notes');
        await expect(notesRef.get()).toDeny();
    });
})