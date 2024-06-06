const retObj = require("../src/object")

test("test case of returning object", () => {
  expect(retObj()).toEqual({ name: "sakshi", standard: 12 })
})
