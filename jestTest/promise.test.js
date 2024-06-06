const promis = require("../src/promise")

test("testing fetch data", () => {
  return promis().then((data) => {
    expect(data).toBe("hello")
  })
})
