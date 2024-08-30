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
function showMessage() {
    const day = document.getElementById('day').value;
    const messageDiv = document.getElementById('message');
    let message;


switch(day) {
    case 'monday':
        message = "Понеділок!";
        break;
    case 'tuesday':
        message = "Вівторок!";
        break;
     case 'wednesday':
        message = "Середа!";
        break;
     case 'thursday':
        message = "Четвер!";
        break;
       case 'friday':
        message = "П'ятниця!";
        break;
    case 'saturday':
        message = "Субота, сьогодні вихідний!";
        break;
      case 'sunday':
        message = "Неділя, сьогодні вихідний!";
        break;
     default:
        message = "";

    }

        messageDiv.textContent = message;

}