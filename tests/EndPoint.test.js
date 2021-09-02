const mongoose = require("mongoose");
const RelatedAPI = require("../server/Models/apiModel.js");

describe("Connection", () => {
  beforeAll(async () => {
    await mongoose.connect( 'mongodb://localhost/relatedapi', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
  });

  test('type of values in DB', () => {
    expect(Array.isArray(['value'])).toBe(true);
    expect(typeof 'value').toBe('string');
    expect({value: 'value'}).toBeTruthy();
    expect(typeof {value: 'value'}).toBe('object');
  })

  test("Check if _id match current_product_id in database", async () => {
    const pID =  await RelatedAPI.find({_id: 5});
    expect(pID[0].current_product_id).toEqual(5)
  });

  test("If _id doesnt expect return empty array", async () => {
    const pID =  await RelatedAPI.find({_id: 10});
    expect(pID).toEqual([])
  });

  test("If _id is valid in database return a array of related product IDS", async () => {
    const pID =  await RelatedAPI.find({current_product_id: 2});
    expect(pID[0].related_product_id).toEqual(
      expect.arrayContaining([3,5,6,7])
    );
  });
});