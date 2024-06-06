const request = require("supertest");
const app = require("../app");

describe("post app test cases", () => {
  test("test1-status code 200", async () => {
    const response = await request(app).post("/users").send({
      username: "username",
      password: "password",
    });
    expect(response.statusCode).toBe(200);
  });
  test("test2-to verify that it returns userId", async () => {
    const response = await request(app).post("/users").send({
      username: "username",
      password: "password",
    });
    expect(response.body.userId).toBeDefined();
  });
});
