import { getCalculatorResult } from "../utils/calculatorApi";

describe("Square", function(){

    test("square 2 to equal 1.4", async function(){
        const response = await getCalculatorResult("sqr", ["2"]);
        expect(response.data.result).toBe(1.4);
    });

    test("square 1 to equal 1.0", async function(){
        const response = await getCalculatorResult("sqr", ["1"]);
        expect(response.data.result).toBe(1.0);
    });

    test("square '' to equal 0", async function(){
        const response = await getCalculatorResult("sqr", [""]);
        expect(response.data.result).toBe(0);
    })

    test("square 'QA' to equal NaN", async function(){
        const response = await getCalculatorResult("sqr", ["QA"]);
        expect(response.data.result).toBe(NaN);
    })

    test("square 67890987 to equal 8239", async function(){
        const response = await getCalculatorResult("sqr", ["67890987"]);
        expect(response.data.result).toBe(8239);
    })

    test("square -9 to equal NaN", async function(){
        const response = await getCalculatorResult("sqr", ["-9"]);
        expect(response.data.result).toBe(NaN);
    })

    test("square -9.234 to equal NaN", async function(){
        const response = await getCalculatorResult("sqr", ["-9.234"]);
        expect(response.data.result).toBe(NaN);
    })

    });
