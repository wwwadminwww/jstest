'use strict';

var text = document.getElementById('text');
var res = document.getElementById('res');

text.addEventListener('keyup',  function() {
    res.innerHTML = replaceWords(this.value);
})

function replaceWords(data){
    // але привет або але, але або, привіт або пока але
    let patterns = ['але або','або але','але','або'];
    for(let i=0; i<patterns.length; i++){
        data = data.replace(new RegExp('('+patterns[i]+')', 'gm'), '{['+i+']}');
    }

    for(let j=0; j<patterns.length; j++){
        let pat = "{["+j+"]}";
        do {
            data = data.replace(pat, getColorWord(patterns[j]));
        }while (data.indexOf(pat) >= 0);
    }

    return data;
}

function getColorWord(word) {
    let color = '';
    switch(word){
        case "але": color = 'red'; break;
        case "або": color = 'blue'; break;
        case 'але або': color = 'green'; break;
        case 'або але': color = 'brown'; break;
        default: color = 'black'; break;
    }
    return '<span style="color:' + color + ';">' + word + '</span>';
}
