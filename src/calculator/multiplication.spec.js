import { getCalculatorResult } from "../utils/calculatorApi";

describe("Multiplication", function(){

    test("multiply 5 * 3 to equal 15.0", async function(){
        const response = await getCalculatorResult("*", ["5", "3"]);
        expect(response.data.result).toBe(15.0);
    });

    test("multiply (-12) * (2) to equal -24", async function(){
        const response = await getCalculatorResult("*", ["-12", "2"]);
        expect(response.data.result).toBe(-24);
    });

    test("multiply (24) * (-6) to equal -144.0", async function(){
        const response = await getCalculatorResult("*", ["24", "-6"]);
        expect(response.data.result).toBe(-144.0);
    });

    test("multiply ('Test Engineer') * (0) to equal NaN", async function(){
        const response = await getCalculatorResult("*", ["Test Engineer", "0"]);
        expect(response.data.result).toBe(NaN);
    });

    test("multiply ('') * ('') to equal 0", async function(){
        const response = await getCalculatorResult("*", ['', '']);
        expect(response.data.result).toBe(0); 
    });

    test("multiply (9.0000) * (2) to equal 18.0", async function(){
        const response = await getCalculatorResult("*", ['9.0000', '2']);
        expect(response.data.result).toBe(18.0); 
    });

    test("multiply ('') * (-9) to equal -0", async function(){
        const response = await getCalculatorResult("*", ['', '-9']);
        expect(response.data.result).toBe(-0); 
    });
    
});
