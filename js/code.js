//   1
function count(expression) {
    function getValues(expression) {
        let values = [...expression];
        return values;
    }
    let values = getValues(expression);
    switch (values[1]) {        
        case '+':
             return showResult(sum(values)); 
        case '-':
            return showResult(subtract(values));
        case '*':
            return showResult(multiply(values));
        case '/':
            return showResult(divide(values));
    }

    function showResult(value) {
        return value;
    }
}

function sum(values) {
    return +values[0] + +values[2];
}

function subtract(values) {
    return values[0] - values[2];
}

function multiply(values) {
    return values[0] * values[2];
}

function divide(values) {
    
return +values[0] / +values[2];

}




// 2
function count(expression) {
    function getValues(expression) {
        let values = [...expression];
        return values;
    }
    let values = getValues(expression);
    switch (values[1]) {
        case '+':
            return showResult(sum(values));
        case '-':
            return showResult(subtract(values));
        case '*':
            return showResult(multiply(values));
        case '/':
            return showResult(divide(values));
    }

    function showResult(value) {
        return value;
    }
}

function sum(values) {
    return +values[0] + +values[2];
}

function subtract(values) {
    return values[0] - values[2];
}

function multiply(values) {
    return values[0] * values[2];
}

function divide(values) {
    try {
        if (+values[2] === 0) {
            throw Error('Can`t divide by 0');

        } else {
            return +values[0] / +values[2];
        }
    } catch (error) {
        console.log(error.name + ': ' + error.message);
        return +values[2];
    }
}




   
//  3  
function count(expression) {
    function getValues(expression) {
        let values = [...expression];
        return values;
    }
    try {
        if (typeof (expression) != 'string') {
            throw Error('expression is not iterable');
        } else {
            let values = getValues(expression);
            switch (values[1]) {
                case '+':
                    return showResult(sum(values));
                case '-':
                    return showResult(subtract(values));
                case '*':
                    return showResult(multiply(values));
                case '/':
                    return showResult(divide(values));
            }

            function showResult(value) {
                return value;
            }
        }
    } catch (error) {
        console.log('Error: ' + error.message);
    }
}

function sum(values) {
    return +values[0] + +values[2];
}

function subtract(values) {
    return +values[0] - +values[2];
}

function multiply(values) {
    return +values[0] * +values[2];
}

function divide(values) {
    return +values[0] / +values[2];
}




//  4
function MakeUsers(name, age) {
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');

function showMovie(user) {
    try {
        if (user.age == undefined) {
            throw new SyntaxError();
        }
        if (user.age >= 18) {
            return console.log('You can watch this movie');
        } else {
            return console.log('Sorry, you are too young');
        }
    } catch (error) {
        user.age = prompt('How old are you?');
        return showMovie(user);;
    }
}

showMovie(user);





