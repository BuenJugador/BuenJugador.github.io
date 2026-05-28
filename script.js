let currentFontSize = 14;

document.addEventListener("DOMContentLoaded", function () {
    const cm = document.getElementById("custommenu");

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();

        cm.style.visibility = 'visible';
        cm.style.left = event.pageX + 'px';
        cm.style.top = event.pageY + 'px';
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('#custommenu')) {
            cm.style.visibility = 'hidden';
        }
    });
});

function doAction(actionType) {
    switch (actionType) {
        case "copy":
            document.execCommand('copy');
            break;
        case "close":
            window.close();
            break;
        case "fontIncrease":
            currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + "px";
            break;
        case "fontDecrease":
            currentFontSize -= 2;
            if (currentFontSize < 10) currentFontSize = 10;
            document.body.style.fontSize = currentFontSize + "px";
            break;
        case "changeBkg":
            const hue = Math.floor(Math.random() * 360);
            document.body.style.backgroundColor = `hsl(${hue}, 70%, 90%)`;
            break;
    }
    document.getElementById("custommenu").style.visibility = 'hidden';
}


function checkSelectState() {
    var selectObj = document.getElementById("itemSelect");
    var btnObj = document.getElementById("submitBtn");

    if (selectObj.selectedIndex !== 0) {
        btnObj.disabled = false;
    } else {
        btnObj.disabled = true;
    }
}

var streetsGal = ['Галицька', 'Ставропігійська', 'Краківська', 'Театральна', 'Вірменська'];
var streetsFran = ['Сахарова', 'Наукова', 'Княгині Ольги', 'В.Великого'];
var streetsLych = ['Личаківська', 'Пекарська', 'Нечуя-Левицького', 'Зелена'];
var streetsSykh = ['Хоткевича', 'Червоної Калини'];
var streetsShev = ['Чорновола', 'Остряниці', 'Замарстинівська', 'Топольна', 'Варшавська'];

var streetsAllCombined = streetsGal.concat(streetsFran, streetsLych, streetsSykh, streetsShev).sort();

var streetsAll = [
    null,
    streetsGal.sort(),
    streetsFran.sort(),
    streetsLych.sort(),
    streetsSykh.sort(),
    streetsShev.sort(),
    streetsAllCombined
];

function showStreets(regionIndex, selectId) {
    var streetsSelect = document.getElementById(selectId);

    if (regionIndex <= 0) {
        streetsSelect.style.visibility = 'hidden';
        return;
    }

    streetsSelect.options.length = 0;
    streetsSelect.style.visibility = 'visible';

    var selectedStreets = streetsAll[regionIndex];
    for (var i = 0; i < selectedStreets.length; i++) {
        streetsSelect.add(new Option(selectedStreets[i], selectedStreets[i]));
    }
}

function validateCheckboxes() {
    var container = document.getElementById("checkboxContainer");
    var checkboxes = container.querySelectorAll("input[type='checkbox']");
    var checkedCount = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }

    var warningElem = document.getElementById("checkboxWarning");
    if (checkedCount < 5) {
        warningElem.innerText = "Увага: вибрано замало прапорців! Потрібно щонайменше 5.";
    } else {
        warningElem.innerText = "";
    }
}

function getTotalPrice() {
    var sum = 0;
    var boxes = document.getElementsByName('goods');
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            sum += Number(boxes[i].value);
        }
    }
    document.getElementById('price').innerText = sum;
}

function assignFunctionToCheckboxes() {
    var boxes = document.getElementsByName('goods');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].onclick = getTotalPrice;
    }
}

window.addEventListener('load', assignFunctionToCheckboxes);