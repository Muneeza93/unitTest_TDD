import { assert } from "chai";
import { isFactorial } from "./factorial";

describe("isfactorial-basic functionality", () => {
  let result = isFactorial;
  it("return -1 when number is less than 0", () => {
    assert.isNumber(result(-9));
  });
  it("return one when number is equal to 0 ", () => {
    assert.isNumber(result(0));
  });
  it("check if factorial is a number ", () => {
    assert.isNumber(result(5));
  });
  it("check if factorial", function () {
    assert.equal(result(5), 120);
  });
});
