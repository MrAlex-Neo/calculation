let name = prompt('Ваше имя:')
let age = +prompt('Укажите ваш возраст:')
let gender = prompt('Укажите ваш пол (man/woman)')
let a = Number(prompt('Первое число:'))
let b = Number(prompt('Второе число:'))
let es = prompt("Введите наименование задачи: amount (сумма чисел), arith (среднее арифметическое), degree(возвести число в степень), percent(%). Если вы просто хотите воспользоваться калькулятором, то введите ниже арифметическое действие (+, -, *, /)")
let answer
let message
let myAge = 29
let meet

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
                        if (es == "percent") {
                            answer = (a / 100) * b
                            message = `Ваш ответ: ${answer}%!` 
                        } else {
                            if (es == "degree") {
                                answer = a ** b
                                message = `Ваш ответ: ${answer}!` 
                            } else {
                                message = "Ошибка ввода!"
                            }
                            
                        }
                    }
                }
            }
        }
    }
}

if (age <= myAge && gender == "man") {
    meet = `Привет, ${name}! ${message}`
} else {
    if (age > myAge && gender == "man") {
        meet = `Здравствуйте, ${name}! ${message}`
    } else {
        if (age < 18 && gender == "woman") {
            meet = `Здравствуйте, ${name}! ${message}`
        } else {
            if (age < myAge && gender == "woman") {
                meet = `Привет, ${name}! ${message} А ваши родители кондитеры? Если нет, то откуда у них тогда взялся такой сладкий пирожочек?) Ну а если серьезно, то нам лучше прододжить наше общение лично. Записывай мой номер, детка: +998900183395 `
            } else {
                meet = "Ошибка ввода!"
            }
            
        }
        
    }
    
}
alert(meet)

const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = C.width = innerWidth,
  H = C.height = innerHeight 

const str = "101010101010 01 010 01 001010 01 0100 0100001 01 101 101 101 1010001111011101010101 1 0",
  matrix = str.split('')

let font = 11,
  col = W / font
  arr = []

for(let i = 0; i < col; i++) arr[i] = 1

function draw() {
  $.fillStyle = "rgba(0, 0, 0, .05)"
    
  $.fillRect(0, 0, W, H)
    
  $.fillStyle = "#0f0"
    
  $.font = font + "px system-ui"
    
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)]
    $.fillText(txt, i * font, arr[i] * font)
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0
    arr[i]++
    }
}

setInterval(draw, 123)

window.addEventListener('resize', () => location.reload())
