import { getCalculatorResult } from "../utils/calculatorApi";

describe("Division", function(){

    test("divide 2 / 3 to equal 0.7", async function(){
        const response = await getCalculatorResult("/", ["2", "3"]);
        expect(response.data.result).toBe(0.7);
    });

    test("divide (-12) / (3) to equal -4.0", async function(){
        const response = await getCalculatorResult("/", ["-12", "3"]);
        expect(response.data.result).toBe(-4.0);
    });

    test("divide (24.0) / (-6) to equal -4.0", async function(){
        const response = await getCalculatorResult("/", ["24.0", "-6"]);
        expect(response.data.result).toBe(-4.0);
    });

    test("divide ('Engineer') / (23) to equal NaN", async function(){
        const response = await getCalculatorResult("/", ["Engineer", "23"]);
        expect(response.data.result).toBe(NaN);
    });

    test("divide ('') / ('') to equal NaN", async function(){
        const response = await getCalculatorResult("/", ['', '']);
        expect(response.data.result).toBe(NaN); 
    });

    test("divide (9.0) / (0.2) to equal 45.0", async function(){
        const response = await getCalculatorResult("/", ['9.0000', '2']);
        expect(response.data.result).toBe(18.0); 
    });

    test("divide (78) / (1000000) to equal 0.000078", async function(){
        const response = await getCalculatorResult("/", ['78', '1000000']);
        expect(response.data.result).toBe(0.000078); 
    });

    test("divide (9.0) / (++0.2) to equal Invalid left-hand side expression ", async function(){
        const response = await getCalculatorResult("/", ['9.0', '++0.2']);
        expect(response.data.result).toBe("Invalid left-hand side expression"); 
    });
    
});
