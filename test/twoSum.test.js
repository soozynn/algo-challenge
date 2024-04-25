import { expect } from "chai";
import twoSum from "../lib/twoSum";

describe("", function () {
  it("should pass base cases", function () {
    expect(twoSum([2,7,11,15], 9)).to.eql([0,1]);
    expect(twoSum([3,2,4], 6)).to.eql([1,2]);
    expect(twoSum([3,3], 6)).to.eql([0,1]);
  });

  it("Additional test cases example", function () {
    expect(twoSum([0], 0)).to.eql([]);
  });
});
