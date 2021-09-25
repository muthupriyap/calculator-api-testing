import { getCalculatorResult } from "../utils/calculatorApi";

describe("addition", function(){
    test("add 2 + 5 to equal 7", async function(){
        const response = await getCalculatorResult("+", ["2", "5"]);
        expect(response.data.result).toBe(7);
    });
});