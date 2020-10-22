'use strict';

function Calc(value1, value2, calcOperator){
    const v1 = parseFloat(value1);
    const v2 = parseFloat(value2);
    let returnValue = 0;

    switch (calcOperator) {
        case "add":
            returnValue = v1 + v2;
            break;
        case "Subtract":
            returnValue = v1 - v2;
            break;
        case "Multiply":
            returnValue = v1 * v2;
            break;
        case "Divide":
            returnValue = v1 / v2;
            break;
    }
    return result;
}

module.exports = Calc;