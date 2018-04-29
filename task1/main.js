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
})

run.addEventListener('click', function () {
    var count = 0;
    let changeNull = findNull(data);
    // findCountOfNull(data);
    checkNull(data['wigdets'], count);
    console.log(count);
})

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

function findCountOfNull(arr) {
    let count = 0;
    arr = arr['wigdets'];
    if (arr){
        for (let i=0; i < arr.length; i++){
            for (let key in arr[i]){
                console.log(arr[i][key]);
                if (arr[i][key] === null) count++;
            }
            // for (let j=0; j < arr[i].length; j++){
            //     console.log(arr[i][j]);
            //     if (Array.isArray(arr[i][j]) || typeof arr[i][j] === 'object'){
            //         if (arr[i][j] === null) count++;
            //     }
            // }
        }
    }
    console.log(count);

    // return count;
}

function checkNull(data, counter){
    console.log(data);
    if (Array.isArray(data) || typeof data === 'object'){
        for(let key in data){
            checkNull(data[key], counter);
        }
    }else if(data == null) {
        counter++;
    }
}


