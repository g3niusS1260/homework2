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
}