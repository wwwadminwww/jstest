'use strict';

var result = document.getElementById('result');
var run = document.getElementById('run');
var request = new XMLHttpRequest();
var data = null;

request.open('GET', 'https://api.myjson.com/bins/10lny7', true);
request.send();

request.addEventListener('load',function () {
    if (this.status == 200){
        data = JSON.parse(this.response);
        console.log(data);
    }else{
        console.error('Something go wrong!!!');
    }
});

run.addEventListener('click', function () {
    var count = 0;
    let changeNull = findNull(data);
    let countOfNull = checkNull(data['wigdets']);
    console.log('Modified JSON:', changeNull);
    console.log('Count of elements with value null in internal arrays or objects is: ' + countOfNull);
    result.innerHTML = 'Modified JSON<br>' + JSON.stringify(changeNull, null, 2) + '<br><br>';
    result.innerHTML += 'Кількість елементів із значенням null: ' + countOfNull;
});

function findNull(arr){
    if (arr['wigdets']){
        arr['wigdets'].map(function (e) {
            for(let key in e){
                if (e[key] === null){
                    e[key] = "null";
                }
            }
            return e;
        })
    }
    return arr;
}

function checkNull(data){
    var counter = 0;
    // console.log(data);
    if (data !== null && (Array.isArray(data) || typeof data === 'object')){
        for(let key in data){
            counter += checkNull(data[key]);
        }
    }else if(data == null) {
        counter++;
    }
    return counter;
}


