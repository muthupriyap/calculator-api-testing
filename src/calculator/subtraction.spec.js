import { getCalculatorResult } from "../utils/calculatorApi";

describe("subtraction", function(){

    test("subtract 5 - 3 to equal 2.0", async function(){
        const response = await getCalculatorResult("-", ["5", "3"]);
        expect(response.data.result).toBe(2.0);
    });

    test("subtract (-33) - (-2) to equal -35", async function(){
        const response = await getCalculatorResult("-", ["-33", "-2"]);
        expect(response.data.result).toBe(-35);
    });

    test("subtract (5) - (QA) to equal NaN", async function(){
        const response = await getCalculatorResult("-", ["5", "QA"]);
        expect(response.data.result).toBe(NaN);
    });

    test("subtract (-1) - (0) to equal -1", async function(){
        const response = await getCalculatorResult("-", ["-1", "0"]);
        expect(response.data.result).toBe(-1);
    });

    test("subtract (-23.90) - (89) to equal -112.9", async function(){
        const response = await getCalculatorResult("-", ['-23.90', '89']);
        expect(response.data.result).toBe(-112.9); 
    });

    test("subtract (90) - (-23) to equal 113", async function(){
        const response = await getCalculatorResult("-", ['90', '-23']);
        expect(response.data.result).toBe(113); 
    });

    test("subtract ('') - (-9) to equal -9", async function(){
        const response = await getCalculatorResult("-", ['', '-9']);
        expect(response.data.result).toBe(-9); 
    });
    
});

