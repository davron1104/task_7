// jshint esversion: 6
// Место для первой задачи

// a - длина ребра куба

function calculateVolumeAndArea(a) {
    if(typeof(a) !== 'number' || a <= 0 || !Number.isInteger(a)) {
    return 'При вычислении произошла ошибка';
}


let V = a * a * a;
let  S = 6 * Math.pow(a, 2);
console.log(`Объем куба: ${V}, площадь всей поверхности: ${S}`);
return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
}
calculateVolumeAndArea(4);


// Место для второй задачи
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
function getCoupeNumber(numberOfPlace) {
    if(typeof(numberOfPlace) !== 'number' || numberOfPlace < 0 || !Number.isInteger(numberOfPlace)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if(numberOfPlace == 0 || numberOfPlace > 36) {
        return 'Таких мест в вагоне не существует';
    }
    for(let i = 4; i <= 36; i += 4 ) {
        if(numberOfPlace <= i) {
            console.log(Math.ceil(i / 4));
            return Math.ceil(i / 4);
        }
    }
 
}
getCoupeNumber(10);