
//Получить случайное число от 0 до size -1 
var getRandomNumber = function (size) {
	return Math.floor(Math.random()*size);
};
//Вычислить расстояние от клика (event) до клада (target)
var getDistance = function (event, target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX*diffX) + (diffY*diffY));
}
// получить подсказку для игрока
var getDistanceHint = function (distance) {
	if (distance < 10) {
		return "Обожжешься!";
	} else if (distance < 20) {
		return "Очень горячо!";
	} else if (distance < 40) {
		return "Горячо!";
    } else if (distance < 80) {
		return "Тепло";
	} else if (distance < 160) {
		return "Холодно";
	} else if (distance < 320) {
		return "Очень холодно";
	} else {
		return "Замерзнешь!";
	}
};
//Создаем переменные по размеру картинки
var width = 640;
var height=453;
var clicks=0;
//Случайная позиция клада
var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
}

//Обработчик кликов, функция которая будет вызываться каждый каз когда игрок кликнет по карте
$("#map").click(function (event) {
    //Код обработчика
    clicks++;
    // получаем расстояние от места клика до клада
    var distance = getDistance (event, target);

    // преобразуем расстояние в подсказку
    var distanceHint = getDistanceHint (distance);

    // записываем в элемент distance новую подсказку
    $("#distance").text(distanceHint);

    //Проверка на выигрыш
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});









