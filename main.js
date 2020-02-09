/*
    Task 1:

    Напишите скрипт, который находит площадь прямоугольника

    -высота 23см,
    -шириной 10см

    Каждая сущность должна находиться в своей переменной

    S = 1/2*основание*высота
*/

var h = 23;
var a= 10;

function areaOfTriangle (width, height) {
  var result = 0.5*10*23;
  console.log(result);
}

areaOfTriangle(a,h);


/*
    Task 2:

    Напиши скрипт, который находит объем цилиндра

    -высота 10м
    -площадь основания 4м

    Каждая сущность должна находиться в своей переменной

    V=площадь_основания*высота
*/

var a = 4;
var h = 10;

function size (base_area, height) {
  var result = base_area*height;
  console.log(result);
}

size(a,h);

/*
    Task 3:

    Создайте свою конструкцию УСЛОВИЕ
    Минимальное количество условий в одной конструкции: 5

*/
var number1 = 5;
var number2 = 0;
var number3 = -1;
var number4 = 100;
var number5 = 102;
var number6 = 50;

function check(number) {
  if (number > 0 && number <= 100  && number != 0 && (number != 50 || number == 55)) {
    console.log('Число прошло проверку' + ' ' + number);
  } else {
    console.log('Число не прошло проверку' + ' ' + number);
  }
}

check(number1);
check(number2);
check(number3);
check(number4);
check(number5);
check(number6);

/*
    TASK 4

    Вывести в консоль с помощью цикла  WHILE, все нечетные числа от 30 до 40

*/


var n = 30;
 while (n <= 40) {
   if (n % 2 == 1) {
     console.log(n);
   }
   n++;
 }


/*
    TASK 5

    Вывести в консоль с помощью цикла FOR, все четные числа от 70 до 40. Первым четным числом должно быть 70.

*/

for (var i = 70; i <= 70 && i >= 40; i--) {

  if (i % 2 == 0) {
    console.log(i);
  }
}
