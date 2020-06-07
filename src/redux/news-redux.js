import { authAPI } from "../api/api"

import ph1 from '../assets/images/ph1.jpeg'
import ph2 from '../assets/images/ph2.jpeg'
import ph3 from '../assets/images/ph3.jpeg'
import ph4 from '../assets/images/ph4.jpeg'
import ph5 from '../assets/images/ph5.jpeg'
import ph6 from '../assets/images/ph6.jpeg'
import ph7 from '../assets/images/ph7.jpeg'
import ph8 from '../assets/images/ph8.jpeg'
import ph9 from '../assets/images/ph9.jpeg'
import ph10 from '../assets/images/ph10.jpeg'
import ph11 from '../assets/images/ph11.jpeg'
import ph12 from '../assets/images/ph12.jpeg'
import ph13 from '../assets/images/ph13.jpeg'
import ph14 from '../assets/images/ph14.jpeg'
import ph15 from '../assets/images/ph15.jpeg'
import ph16 from '../assets/images/ph16.jpeg'
import ph17 from '../assets/images/ph17.jpeg'

let initialState = {
    arr: [
        {id: 1, text: 'Гипертоники, не губите сердце химией, если давление выше 140-80, пейте 3 ст.л...', img: ph1},
        {id: 2, text: 'Дожить до 109 лет помогает чистка сосудов! Пока я жив-пишите мой рецепт: в тёплый чай капайте 6%', img: ph2},
        {id: 3, text: 'Грибок ногтей умрет навечно! просто подержите ноги 5 мин в...', img: ph3},
        {id: 4, text: 'Гипертоники, не губите сердце химией, если давление выше 140-80, пейте 3 ст.л...', img: ph4},
        {id: 5, text: 'Урологи онемели! Простатит выгорит за сутки, если применить советский метод...', img: ph5},
        {id: 6, text: 'Простой и действенный метод,который избавит от геморроя за считанные дни...', img: ph6},
        {id: 7, text: 'Получаю 200 тысяч с этой клубники! Растёт даже зимой,если в горшке размочить две...', img: ph7},
        {id: 8, text: 'Мясников: "Есть лишь одно средство, которое восстанавливает суставы за 2 дня! Попробуйте...', img: ph8},
        {id: 9, text: 'Поток денег обрушится на вас через 3 дня, положите в дальний угол комнаты...', img: ph9},
        {id: 10, text: 'Предсказание от ясновидящей: загляни в своё будущее с помощью этой хитрости...', img: ph10},
        {id: 11, text: 'Главврач России: "Артрит и артроз лечатся за 7 дней, достаточно натереть густым...', img: ph11},
        {id: 12, text: 'За месяц минус 36 кг! Живот ушел вообще моментально, по утрам...', img: ph12},
        {id: 13, text: 'Суставы давно уже лечатся за сутки, густым,советским...', img: ph13},
        {id: 14, text: 'Дачникам г.Челябинск: "Чтобы собирать по 2 ведра картошки с куста, запомните-при посеве нужно', img: ph14},
        {id: 15, text: 'Ведущий "русского лото" выдал секрет, как выиграть в лотерею! Над купленными билетами...', img: ph15},
        {id: 16, text: 'Эта малютка настоящий "динамит" для лишнего веса! Перед тем как её...', img: ph16},
        {id: 17, text: 'Выигравшая в лотерею миллиард пенсионерка оказалась вовсе "не простой"! Она раскрыла свой секрет', img: ph17}
    ]
}

export const test1 = initialState.test

const newsReducer = (state = initialState, action) => {

    switch(action.type){
        default:
            return state;
    }
}

export default newsReducer;