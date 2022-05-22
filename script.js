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
function getCoupeNumber() {

}
