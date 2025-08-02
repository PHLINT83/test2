// 1. Функция greet(name) — выводит Привет, [имя]!.
function greet(name) {
  alert(`Привет, ${name}!`);
}

const usrName = prompt("Как вас зовут?");
if (usrName) {
  greet(usrName);
} else {
  alert("Вы ввели не имя.");
}

// 8. Функция zero(), которая возвращает 0.
function zero() {
    return 0;
  }
  
  console.log(zero()); // Выведет: 0

//   6. Функция capitalizeFirstLetter(str) — делает первую букву заглавной.
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
console.log(capitalizeFirstLetter("word"));


//   1. При нажатии на кнопку функция showDate() должна отобразить текущую дату в элементе <p id="date"></p>.
function showDate() {
    
    const currentDate = new Date();
    
    // Форматируем дату в читаемый вид
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: '2-digit' 
    };
    const formattedDate = currentDate.toLocaleDateString('ru-RU', options);
   
    document.getElementById('date').textContent = formattedDate;
}