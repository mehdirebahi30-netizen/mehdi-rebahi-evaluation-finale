const request = require("supertest");
const app = require("../server");

describe("Test API Livres", () => {
  test("GET /api/livres retourne 200 et une réponse JSON", async () => {
    const res = await request(app).get("/api/livres");

    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(Array.isArray(res.body)).toBe(true);
  });
});