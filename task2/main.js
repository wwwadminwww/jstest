'use strict';

var text = document.getElementById('text');

text.addEventListener('keyup', function () {
    this.innerHTML = replaceWords(this.innerText);
    console.log(replaceWords(this.innerText));
    console.log(replaceWords('лолвтаолваалетотолвтав'));
})



function checkText(data) {
    var patterns = ['але', 'або','але або','або але'];
    // var patterns = ['was'];

    for (var i = 0; i < patterns.length; i++){
        for (var j = 0; j < data.length; j++){
            var temp = '';
            for (var k = 0; k < patterns[i].length; k++){
                if (patterns[i][k] === data[j + k]){
                    temp += data[j+k];
                    if (patterns[i] === temp) {
                        console.log(patterns[i] + ' ' + j);
                        break;
                    }
                }
            }
        }
    }
}

function checkText2(data){
    let patterns = ['але', 'або','але або','або але'];
    let pos = 0;

    while(true){
        let foundPos = data.indexOf(data, pos);
        if(foundPos == -1) break;
        pos = foundPos + 1;
    }

}

function replaceWords(data){
    let patterns = ['але', 'або','але або','або але'];
    let res = '';
    for(let i=0; i<patterns.length; i++){
        data = data.replace(new RegExp('('+patterns[i]+')', 'g'), '<span style="color:' + getColor(patterns[i]) + ';">$1</span>');
    }
    // console.log(res);
    return data;
}

function getColor(word) {
    let color = '';
    switch(word){
        case "але": color = 'red'; break;
        case "або": color = 'blue'; break;
        case 'але або': color = 'green'; break;
        case 'або але': color = 'brown'; break;
        default: color = 'black'; break;
    }
    return color;
}