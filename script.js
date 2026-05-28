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

function editPassword(passwordId, messageId, minLength, maxLength) {
    var password = document.getElementById(passwordId);
    var message = document.getElementById(messageId);
    
    if (password.value.length < minLength) {
        message.innerText = 'Надійний пароль повинен містити не менше ' + minLength + ' символів';
        message.style.color = '#ff0000';
    } else if (password.value.length > maxLength) {
        message.innerText = 'Довжина паролю не повинна перевищувати ' + maxLength + ' символів';
        message.style.color = '#ff0000';
    } else {
        message.innerText = 'Ok';
        message.style.color = '#00cc00';
    }
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
    null, streetsGal.sort(), streetsFran.sort(),
    streetsLych.sort(), streetsSykh.sort(),
    streetsShev.sort(), streetsAllCombined
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
        if (checkboxes[i].checked) checkedCount++;
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
        if (boxes[i].checked) sum += Number(boxes[i].value);
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



function changePasswordStyle() {
    var pwdField = document.getElementById("stylePwd");
    pwdField.style.backgroundColor = "red";
    pwdField.style.color = "white";
    pwdField.style.fontSize = "10pt";
    pwdField.style.height = "28px";
}

function hideTableRows() {
    document.getElementById("row1").style.display = "none";
    document.getElementById("row3").style.visibility = "hidden";
}

function checkComplexForm() {
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;
    var t1 = document.getElementById("textField").value;
    var sel = document.getElementById("selectField").selectedIndex;
    var btn = document.getElementById("submitComplexBtn");

    if (p1 !== "" && p1 === p2 && t1.trim() !== "" && sel !== 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function testUkrMobilePhone(str) {
    var re = new RegExp("^(?:\\+38|38)?0[0-9]{9}$");
    if (re.test(str)) alert("Мобільний номер правильний");
    else alert("Мобільний номер некоректний!");
}

function testLvivPostalCode(str) {
    var re = new RegExp("^79[0-9]{3}$");
    if (re.test(str)) alert("Індекс правильний");
    else alert("Некоректний поштовий індекс!");
}

function testLvivCityPhone(str) {
    var re = new RegExp("^(?:\\(032\\))?[2-9][0-9]{2}-?[0-9]{2}-?[0-9]{2}$");
    if (re.test(str)) alert("Львівський номер правильний");
    else alert("Некоректний львівський номер!");
}

function removeHTMLComments(str) {
    var re = new RegExp("", "g");
    return str.replace(re, "");
}

function removeSpecificTags(str) {
    var re = new RegExp("</?(p|font|br|hr)[^>]*>", "gi");
    return str.replace(re, "");
}

function trimSpaces(str) {
    var re = new RegExp("^\\s+|\\s+$", "g");
    return str.replace(re, "");
}

function testYearRange(str) {
    var re = new RegExp("^(19[0-9]{2}|20[0-9]{2})$");
    if (re.test(str)) alert("Рік входить у допустимий діапазон");
    else alert("Рік поза межами діапазону (1900-2099)!");
}