function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    
    expr = expr.replace(/\s/g, '');
    let newStr = expr.split('');

    function parseNewStr(newInput) {
        var calc = [];
        currentValue = '';
    for (var i = 0, ch; ch = newInput[i]; i++) {
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
    
    // for (var i = 0; i < newInput.length; i++) {
    //     if ('()*/+-'.indexOf(newInput[i]) > -1 && newInput[i] != '') {
    //             calc.push(newInput[i]);
    //             console.log(calc);
    //         } else if (!isNaN(newInput[i])) {
    //             calc.push(parseFloat(newInput[i]));
    //     }
    // }
    }
     function calculate(operatedInput) {

        var ops = [{'*': (a, b) => a * b, '/': (a, b) => a / b},
                    {'+': (a, b) => a + b, '-': (a, b) => a - b}],
            output = [],
            // open = ['('],
            // close = [')'],
            currentOper;
        for (var i = 0; i < ops.length; i++) {
            for (var j = 0; j < operatedInput.length; j++) {
                if (ops[i][operatedInput[j]]) {
                    currentOper = ops[i][operatedInput[j]];
                // } else if (open[0]== operatedInput[j]) {
                //     currentOper += open[0];
                //     console.log(currentOper);
                // } else if (close[0] == operatedInput[j]) {
                //     output[output.length-1] = currentOper(output[output.length-1], operatedInput[j]);
                //     output.pop();
                // }
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