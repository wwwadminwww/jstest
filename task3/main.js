'use strict';

//получаем сначала массивы элементов
var firstCol = document.querySelectorAll('.first');
var secondCol = document.querySelectorAll('.second');
var thirdCol = document.querySelectorAll('.third');


var firstColArr = [];
var secondColArr = [];
var thirdColArr = [];


for(var i = 0; i < firstCol.length; i++) {
    var elCol = firstCol[i].textContent;
    firstColArr.push(elCol);
}

for(var i = 0; i < secondCol.length; i++) {
    var elCol = secondCol[i].textContent;
    secondColArr.push(elCol);

}



for(var i = 0; i < thirdCol.length; i++) {
    var elCol = thirdCol[i].textContent;
    thirdColArr.push(elCol);
}


//делаем копию массива который будет изменяться
var copyArray1 = firstColArr.slice();
var copyArray2 = secondColArr.slice();
var copyArray3 = thirdColArr.slice();


//получаем ячейки заголовков
var sortName = document.getElementById('name');
var sortExperience = document.getElementById('experience');
var sortBirthday = document.getElementById('birthday');

sortName.addEventListener("click", function(e) {
    if(e.target.classList.contains('sorted')) {
        copyArray1.reverse();
        e.target.classList.remove("sorted");
        e.target.classList.add("reverse");

        sortColumn1(copyArray1);
    } else if (e.target.classList.contains('reverse')){
        //3 клик
        //возвращаем исходное состояние
        copyArray1= firstColArr.slice();
        sortColumn1(copyArray1);
        e.target.classList.remove("reverse");
    } else {
        e.target.classList.add("sorted");
        copyArray1.sort();
        sortColumn1(copyArray1);
    }
})


sortExperience.addEventListener("click", function(e) {
    if(e.target.classList.contains('sorted')) {
        copyArray2.reverse();
        e.target.classList.remove("sorted");
        e.target.classList.add("reverse");
        sortColumn2(copyArray2);
    } else if (e.target.classList.contains('reverse')){
        //3 клик
        //возвращаем исходное состояние
        copyArray2 = secondColArr.slice();
        sortColumn2(copyArray2);
        e.target.classList.remove("reverse");
    } else {
        e.target.classList.add("sorted");
        copyArray2.sort();
        sortColumn2(copyArray2);
    }
});


sortBirthday.addEventListener("click", function(e) {
    if(e.target.classList.contains('sorted')) {
        copyArray3.reverse();
        e.target.classList.remove("sorted");
        e.target.classList.add("reverse");

        sortColumn3(copyArray3);
    } else if (e.target.classList.contains('reverse')){
        //3 клик
        //возвращаем исходное состояние
        copyArray3 = thirdColArr.slice();
        sortColumn3(copyArray3);
        e.target.classList.remove("reverse");
    } else {
        e.target.classList.add("sorted");
        copyArray3.sort();
        sortColumn3(copyArray3);
    }
});

function sortColumn1(copyArray) {
    for(var i = 0; i < firstCol.length; i++) {
        firstCol[i].innerHTML  = copyArray[i];
    }
}

function sortColumn2(copyArray) {
    for(var i = 0; i < secondCol.length; i++) {
        secondCol[i].innerHTML  = copyArray[i];
    }
}

function sortColumn3(copyArray) {
    for(var i = 0; i < thirdCol.length; i++) {
        thirdCol[i].innerHTML  = copyArray[i];
    }
}
