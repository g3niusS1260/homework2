"use strict";

let hunger = 50;
let happiness = 50;
let health = 50;

const name = prompt("Введите имя питомца ");

while(true){
    const menu = `Состояние питомца "${name}":
------------------------
    Голод : ${hunger}
    Счастье : ${happiness}
    Здоровье : ${health}
------------------------
Чем займёмся? 
1. Кормить 
2. Играть
3. Уложить спать
4. Выход`;

    let choose = Number(prompt(menu));

    switch(choose){
        case 1:
            alert(`Питомец "${name}" поел.`);
            hunger -= 12;
            happiness -= 5;
            health += 3;
            break;
        case 2: 
            alert(`Питомец "${name}" поиграл.`);
            happiness += 7;
            hunger += 10;
            health += 2;
            break;
        case 3:
            alert(`Питомец "${name}" поспал.`);
            happiness += 6;
            hunger += 7;
            health += 4;
            break;
        case 4: 
            alert("Выход . . .");
            break;
        default:
            alert("Ошибка: неверно выбран номер действия");
    }

    if (choose === 4){
        break;
    }

    if(health <= 0){
        alert(`Шкала здоровья питомца ${name} меньше 0, игра завершена.`);
        break;
    }
    if(happiness <= 0){
        alert(`Шкала счастья питомца ${name} меньше 0, игра завершена.`);
        break;
    }
    if(hunger >= 100){
        alert(`Шкала голода питомца ${name} больше или равна 100, игра завершена.`);
        break;
    }
    hunger += 5;
    happiness -= 8;
    health -= 5;
}