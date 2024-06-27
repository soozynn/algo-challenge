import { expect } from "chai";
import rotateArray from "../lib/rotateArray.js";

describe("", function () {
  it("should pass base cases", function () {
    expect(rotateArray([1,2,3,4,5], 2)).to.eql([3,4,5,1,2]);
    expect(rotateArray([1,2,3,4,5], 8)).to.eql([4,5,1,2,3]);
    expect(rotateArray([1,2,3,4,5], -1)).to.eql([5,1,2,3,4]);
  });
});
