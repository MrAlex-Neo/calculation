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

const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = C.width = innerWidth,
  H = C.height = innerHeight 

const str = "お好みのトッピングを用意: しいたけとたけのこを少量の醤油で炒めると風味が増します。 ナルトのさつま",
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
