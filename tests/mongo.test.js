const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db('relatedapi');
  });

  it('should insert a doc into collection', async () => {
    const pids = db.collection('test');

    const mockID = {_id: '1', current_product_id: 1, related_product_id: [1,2,3]};
    await pids.insertOne(mockID);

    const insertPID = await pids.findOne({_id: '1'});
    expect(insertPID).toEqual(mockID);
  });
});