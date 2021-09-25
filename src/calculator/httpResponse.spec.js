import { getCalculatorResult } from "../utils/calculatorApi";


describe("HTTP response validation", function() {

    let response;
    beforeAll(async () => {
        response = await getCalculatorResult("+", ["2", "5"]);
    });

    test("validating status code", function() { 
        expect(response.status).toBe(200);   
    });
    
    test("validating content-type", function() {
        expect(response.headers['content-type']).toBe("application/json;charset=UTF-8");
    });

    test("Validating the response body data type", function(){
        expect(typeof response.data).toBe('object');
    });
    
    test("Validating the response body have result property", function(){
        expect(response.data).toHaveProperty('result');
    });

    test("Validating the result property has number data type", function(){
        expect(typeof response.data.result).toBe('number');
    });
// Validation of request
    test("Validating the statusCode in response", async function(){
        const result = await getCalculatorResult(" ", ['testing', 'team']);
        expect(result.response.status).toBe(500);
    });

    test("Validating the without operands in request payload", async function(){
        const result = await getCalculatorResult("%", ['', '']);
        expect(result.response.status).toBe(500);
    });

    test.only("Validating the statusText for internal server Error ", async function(){
        const result = await getCalculatorResult("%", ['', '']);
        console.log(result.response.data.error)
        expect(result.response.data.error).toBe("Internal Server Error");
    });
   
});
