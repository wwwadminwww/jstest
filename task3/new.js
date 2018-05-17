'use strict';

var tbody = document.getElementById('mytable').tBodies[0];
var tName = document.getElementById('name');
var tExp = document.getElementById('experience');
var tDate = document.getElementById('birthday');
var counter = {count:0, run:function () {
        if(this.count >= 2){
            this.count = 0;
        } else {
            this.count++;
        }
    }};
var iName = Object.assign({}, counter),
    iExp = Object.assign({}, counter),
    iDate = Object.assign({}, counter);

function getData(cellsData) {
    var data = [[],[],[]];
    for (var i = 0; i < cellsData.rows.length; i++) {
        for (var j = 0; j < cellsData.rows[i].cells.length; j++) {
            data[j].push(cellsData.rows[i].cells[j].innerHTML);
        }
    }
    return data;
}

function sortColumn(arr, type, count) {
    if (type === 'name'){
        switch (count){
            case 0: return arr.sort();
            case 1: return arr.sort().reverse();
            case 2: return arr;
        }
    }else if(type === 'exp'){
        switch (count){
            case 0: return arr.sort(function (a, b) {  return a - b;  });
            case 1: return arr.sort(function (a, b) {  return a - b;  }).reverse();
            case 2: return arr;
        }
    }else if(type === 'date'){
        switch (count){
            case 0: return arr.sort(function(a,b) {
                return new Date(a) - new Date(b);
            });
            case 1: return arr.sort(function(a,b) {
                return new Date(a) - new Date(b);
            }).reverse();
            case 2: return arr;
        }
    }
}

function changeColumnsDataOrder(cellsData, arr, colIndex){
    for (var i = 0; i < cellsData.rows.length; i++) {
        for (var j = 0; j < cellsData.rows[i].cells.length; j++) {
            cellsData.rows[i].cells[colIndex].innerHTML = arr[i];
        }
    }
}

var existData = getData(tbody).slice();

tName.addEventListener('click', function () {
    changeColumnsDataOrder(tbody, existData[1].slice(), 1);
    changeColumnsDataOrder(tbody, existData[2].slice(), 2);
    var type = 'name';
    var array = existData[0].slice();
    var data = sortColumn(array, type, iName.count);
    changeColumnsDataOrder(tbody, data, 0);
    iName.run();
});

tExp.addEventListener('click', function () {
    changeColumnsDataOrder(tbody, existData[0].slice(), 0);
    changeColumnsDataOrder(tbody, existData[2].slice(), 2);
    var type = 'exp';
    var array = existData[1].slice();
    array = array.map(function (e) {
        return parseInt(e);
    });
    var data = sortColumn(array, type, iExp.count);
    changeColumnsDataOrder(tbody, data, 1);
    iExp.run();
});

tDate.addEventListener('click', function () {
    changeColumnsDataOrder(tbody, existData[0].slice(), 0);
    changeColumnsDataOrder(tbody, existData[1].slice(), 1);
    var type = 'date';
    var array = existData[2].slice();
    var data = sortColumn(array, type, iDate.count)
    changeColumnsDataOrder(tbody, data, 2);
    iDate.run();
});
