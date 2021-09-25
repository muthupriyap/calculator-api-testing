import { getCalculatorResult } from "../utils/calculatorApi";

describe("addition", function(){

    test("add 2 + 5 to equal 7.0", async function(){
        const response = await getCalculatorResult("+", ["2", "5"]);
        expect(response.data.result).toBe(7.0);
    });

    test("add -7 + -3 to equal -10.0", async function(){
        const response = await getCalculatorResult("+", ["-7", "-3"]);
        expect(response.data.result).toBe(-10.0);
    });

    test("add -5 + 6 to equal 1.0", async function(){
        const response = await getCalculatorResult("+", ["-5", "6"]);
        expect(response.data.result).toBe(1.0);
    });

    test("add 29.0 + 6.90 to equal 35.9", async function(){
        const response = await getCalculatorResult("+", ["29.0", "6.90"]);
        expect(response.data.result).toBe(35.9);
    });

    test("add '' + '' to equal '' ", async function(){
        const response = await getCalculatorResult("+", ['', '']);
        expect(response.data.result).toBe(''); // empty string
    });

    test("add '5' + '' to equal '5' ", async function(){
        const response = await getCalculatorResult("+", ['5', '']);
        expect(response.data.result).toBe('5'); // string 5
    });

    test("add 100000 + 100000 to equal 200000.0", async function(){
        const response = await getCalculatorResult("+", ['100000', '100000']);
        expect(response.data.result).toBe(200000.0); 
    });

    test("add 'testing' + 'team' to equal 'testingteam'", async function(){
        const response = await getCalculatorResult("+", ['testing', 'team']);
        expect(response.data.result).toBe(testingteam); 
    }); 
});