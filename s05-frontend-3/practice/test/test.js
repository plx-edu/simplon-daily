import chai from "chai";
const assert = chai.assert;
import{ pow } from "../script.js";

describe("pow", function() {
    describe("#pow()", function(){
        it("2 to the power of 3 equal 8", function() {
            assert.equal(pow(2, 3), 8);
        });

        it("4 to the power of 2 equal 16", function() {
            assert.equal(pow(4, 2), 16);
        });

        it("5 to the power of 2 equal 25", function() {
            assert.equal(pow(5, 2), 25);
        });

        it("4 to the power of 0 equal 1", function() {
            assert.equal(pow(4, 0), 1);
        });

        it("0 to the power of 0 equal 1", function() {
            assert.equal(pow(0, 0), 1);
        });
    });
});