// 1 b
alert("Я – JavaScript!");

// 2
let userName = prompt("Введите ваше имя:");

alert("Ваше имя: " + userName);

// 3
let number = +prompt("Введите число:");

alert("Квадрат числа " + number + " равен: " + (number * number));

// 4
let hh = 23;
let mm = 23;
let ss = 59;

alert("Время: "+ hh + ":" + mm + ":" + ss);

// 5
let officialNameOfJS = prompt("Каково «официальное» название JavaScript?");

if (officialNameOfJS == "officialNameOfJS") {
    alert("Верно!");
} else {
    alert("Не знаете? «ECMAScript»!");
}

// 6
let month = 3;
let season = month + "-ый месяц - это"

if (9 <= month && month <= 11) {
    season += " Осень!";
} else if (6 <= month && month <= 8) {
    season += " Лето!";
} else if (3 <= month && month <= 5) {
    season += " Весна!";
} else {
    season += " Зимаы!";
}

alert(season);

// 7
let min = 15;
let quarter = min + " минута входит в";

if (0 <= min && min <= 14) {
    quarter += " I";
} else if (15 <= min && min <= 29) {
    quarter += "о II";
} else if (30 <= min && min <= 44) {
    quarter += " III";
} else {
    quarter += " VI";
}

quarter += " четверть!";
alert(quarter);

// 8
let login = prompt("Введите логин:");

if (login == "Админ") {
    let password = prompt("Введите пароль:");

    if (password == "Чёрный Властелин") {
        alert("Добро пожаловать!");
    } else if (password == null) {
        alert("Вход отменён");
    } else {
        alert("Пароль неверен");
    }
} else if (login == null) {
    alert("Вход отменён");
} else {
    alert("Я вас не знаю");
}
