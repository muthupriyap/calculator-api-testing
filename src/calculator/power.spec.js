import { getCalculatorResult } from "../utils/calculatorApi";

describe("Power", function(){

    test("Power 2, 5 to equal 32", async function(){
        const response = await getCalculatorResult("pwr", ["2", "5"]);
        expect(response.data.result).toBe(32);
    });

    test("Power 5, 5 to equal 3125.0", async function(){
        const response = await getCalculatorResult("pwr", ["5", "5"]);
        expect(response.data.result).toBe(3125.0);
    });

    test("Power '' to equal NaN", async function(){
        const response = await getCalculatorResult("pwr", ['']);
        expect(response.data.result).toBe(NaN);
    })

    test("Power 'QA','' to equal 1", async function(){
        const response = await getCalculatorResult("pwr", ["QA", ""]);
        expect(response.data.result).toBe(1);
    })

    test("Power [] to equal NaN", async function(){
        const response = await getCalculatorResult("pwr", []);
        expect(response.data.result).toBe(NaN);
    })

    test("Power 23.45, 7 to equal 3899419232", async function(){
        const response = await getCalculatorResult("pwr", ["23.45", "7"]);
        expect(response.data.result).toBe(3899419232);
    })

    test("Power 0 to equal NaN", async function(){
        const response = await getCalculatorResult("pwr", ["0.000"]);
        expect(response.data.result).toBe(NaN);
    })

    });
