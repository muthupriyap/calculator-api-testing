import axios from "axios";

const END_POINT = "http://miscellaneous.yospace.com:8080";
const CALCULATOR_PATH = "/yospace/calculator";

export async function getCalculatorResult(operator, operands) {
    const response = await axios.post(`${END_POINT}${CALCULATOR_PATH}`, {
        operator,
        operands
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(response);
    return response;
}


