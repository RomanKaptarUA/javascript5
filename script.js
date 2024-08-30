// 1
// function showMessage() {
//     const beverage = document.getElementById('beverage').value;
//     const messageDiv = document.getElementById('message');
//     let message;

//     switch(beverage) {
//         case 'coffee':
//             message = "Ви обрали каву. Смачного!";
//             break;
//         case 'tea':
//             message = "Ви обрали чай. Насолоджуйтесь!";
//             break;
//         case 'juice':
//             message = "Ви обрали сік. Дуже корисно!";
//             break;
//         default:
//             message = "";
//     }

//     messageDiv.textContent = message;
// }

//2
// function checkDay() {
//     const day = document.getElementById('dayInput').value.trim().toLowerCase();
//     const resultElement = document.getElementById('result');

//     switch (day) {
//         case 'понеділок':
//         case 'вівторок':
//         case 'середа':
//         case 'четвер':
//         case 'п’ятниця':
//             resultElement.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)} — це робочий день.`;
//             break;
//         case 'субота':
//         case 'неділя':
//             resultElement.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)} — це вихідний день.`;
//             break;
//         default:
//             resultElement.textContent = 'Введено некоректний день тижня.';
//     }
// }

//3

// function determineSeason() {
//     const month = parseInt(document.getElementById('monthInput').value);
//     let season;

//     switch (month) {
//         case 12:
//         case 1:
//         case 2:
//             season = 'Зима';
//             break;
//         case 3:
//         case 4:
//         case 5:
//             season = 'Весна';
//             break;
//         case 6:
//         case 7:
//         case 8:
//             season = 'Літо';
//             break;
//         case 9:
//         case 10:
//         case 11:
//             season = 'Осінь';
//             break;
//         default:
//             season = 'Некоректний номер місяця. Будь ласка, введіть число від 1 до 12.';
//             break;
//     }

//     document.getElementById('result').textContent = season;
// }


//4
// function determineSeason() {
//     const month = parseInt(document.getElementById('monthInput').value);
//     let season;

//     switch (month) {
//         case 12:
//             season = '31';
//             break;
//         case 1:
//             season = '31';
//             break;
//         case 2:
//             season = '31';
//             break;
//         case 3:
//             season = '28';
//             break;
//         case 4:
//             season = '30';
//             break;
//         case 5:
//             season = '31';
//             break;
//         case 6:
//             season = '30';
//             break;
//         case 7:
//             season = '31';
//             break;
//         case 8:
//             season = '31';
//             break;
//         case 9:
//             season = '31';
//             break;
//         case 10:
//             season = '30';
//             break;
//         case 11:
//             season = '';
//             break;
//         default:
//             season = 'Некоректний номер місяця. Будь ласка, введіть число від 1 до 12.';
//             break;
//     }

//     document.getElementById('result').textContent = season;
// }

//6
let first;
let second;
const result = {
    
}