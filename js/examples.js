let a = Number(prompt('Первое число'))
let b = Number(prompt('Второе число'))
let es = prompt("Введите наименование задачи: amount (сумма чисел), arith (среднее арифметическое) или если вы хотите воспользоваться калькулятором, то введите арифметическое действие ниже (+, -, *, /)")
let answer
let message

if (es == "amount") {
    answer = a + b
    message = `Ваш ответ: ${answer}!`
} else {
    if (es == "arith") {
        answer = (a + b) / 2
        message = `Ваш ответ: ${answer}!`
    } else {
        if (es == "+") {
            answer = a + b
            message = `Ваш ответ: ${answer}!`      
        } else {
            if (es == "-") {
                answer = a - b
                message = `Ваш ответ: ${answer}!`  
            } else {
                if (es == "*") {
                    answer = a * b
                    message = `Ваш ответ: ${answer}!` 
                } else {
                    if (es == "/") {
                        answer = a / b
                        message = `Ваш ответ: ${answer}!` 
                    } else {
                        message = "Ошибка ввода!"
                    }
                }
            }
        }
    }
}
alert(message)
