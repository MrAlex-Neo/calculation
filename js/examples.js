let name = prompt('Ваше имя:')
let age = +prompt('Укажите ваш возраст:')
let gender = prompt('Укажите ваш пол (man/woman)')
let es = prompt("Введите наименование задачи: arith(среднее арифметическое), degree(возвести число в степень), percent(%). Если вы просто хотите воспользоваться калькулятором, то введите ниже арифметическое действие (+, -, *, /). Если вы хотите сгенерировать случайный пароль(random), то тогда впишите в поле для ввода первого числа слово 'password', а в поле для второго числа укажите из скольки чисел должен будет состоять пароль")
let a = Number(prompt('Первое число:'))
let b = Number(prompt('Второе число:'))
let answer
let message
let myAge = 29
let meet

switch (es){
    case 'arith':
        answer = (a + b) / 2
        message = `Ваш ответ: ${answer}!`
        break;
    case 'degree':
        answer = Math.pow(a,b)
        message = `Ваш ответ: ${answer}!`
        break;
    case 'percent':
        answer = (a / 100) * b
        message = `Ваш ответ: ${answer}!`
        break;
    case '+':
        answer = a + b
        message = `Ваш ответ: ${answer}!`
        break;
    case '-':
        answer = a - b
        message = `Ваш ответ: ${answer}!`
        break;
    case '*':
        answer = a * b
        message = `Ваш ответ: ${answer}!`
        break;
    case '/':
        answer = a / b
        message = `Ваш ответ: ${answer}!`
        break;
    case 'random':
        a = 'password'
        answer = Math.random()
        b = Math.pow(10,b)
        answer = answer * b
        answer = Math.trunc(answer)
        message = `Ваш ответ: ${answer}!`
        break;
    case false:
        message = "Ошибка ввода!"
        break; 
}
message = `Ваш ответ: ${answer}!`

if (age <= myAge && gender == "man") {
    meet = `Привет, ${name}! ${message}`
} else {
    if ((age > myAge && gender == "man") || (age >= myAge && gender == "woman")) {
        meet = `Здравствуйте, ${name}! ${message}`
    } else {
        meet = `Здравствуйте, ${name}! ${message}`
        if (age < 18  && gender == "woman") {
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
