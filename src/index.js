function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    
    expr = expr.replace(/\s/g, '');
    let newStr = expr.split('');

    function parseNewStr(newInput) {
        let calc = [];
        currentValue = '';
    for (let i = 0, ch; ch = newInput[i]; i++) {
        if ('^*/+-'.indexOf(ch) > -1) {
            if (currentValue == '' && ch == '-') {
                currentValue = '-';
            } else {
                calc.push(parseFloat(currentValue), ch);
                currentValue = '';
            }
        } else {
            currentValue += newInput[i];
        }
    }
    if (currentValue != '') {
        calc.push(parseFloat(currentValue));
    }
    return calc;
    }
     function calculate(operatedInput) {

        let ops = [{'*': (a, b) => a * b, '/': (a, b) => a / b},
                    {'+': (a, b) => a + b, '-': (a, b) => a - b}],
            output = [],
            currentOper;
        for (let i = 0; i < ops.length; i++) {
            for (let j = 0; j < operatedInput.length; j++) {
                if (ops[i][operatedInput[j]]) {
                    currentOper = ops[i][operatedInput[j]];
               }      else if (currentOper) {
                    output[output.length - 1] = 
                        currentOper(output[output.length-1], operatedInput[j]);
                    currentOper = null;
                } else {
                    output.push(operatedInput[j]);
                }
            }
            operatedInput = output;
            output=[];
        }  
        if (operatedInput == 'Infinity') {
            throw new Error('TypeError: Division by zero.')
        } else {
            return operatedInput[0]; 
        }
         
    }
    console.log(calculate(parseNewStr(newStr)));
    return calculate(parseNewStr(newStr));
    
}



module.exports = {
    expressionCalculator
}