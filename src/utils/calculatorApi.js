import axios from "axios";

const END_POINT = "http://miscellaneous.yospace.com:8080";
export const CALCULATOR_PATH = "/yospace/calculator";

export async function getCalculatorResult(operator, operands) {
    try{
        const response = await axios.post(`${END_POINT}${CALCULATOR_PATH}`, {
            operator,
            operands
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response;
    }catch(error){
        return error;
    }
}


