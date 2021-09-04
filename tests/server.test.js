const request = require("supertest")("http://localhost:5000");
const expect = require("chai").expect;

describe("GET /api/related", function () {

  it("Leaving _id field empty returns first _id and its related productids", async function () {
    const response = await request.get("/api/related");
    expect(response.status).to.eql(200);
    expect(response.body).to.eql([2,3,7,8]);
  });

  it("Searching _id returns a array of related productids", async function () {
    const response = await request.get("/api/related/?_id=5");
    expect(response.status).to.eql(200);
    expect(response.body).to.eql([6,8,9,1,3]);
  });

});

