'use strict';

var text = document.getElementById('text');
var res = document.getElementById('res');
var text2 = document.getElementById('text2');

text2.addEventListener('keyup',  function() {
    res.innerHTML = `<pre>${replaceWords(this.value)}</pre>`;
    res.appendChild(text2);
    requestAnimationFrame(function () {
        text2.focus();
    })
    // setTimeout(function () {
    //     text.innerHTML = replaceWords(text.innerText);
    //     setCaret(text);
    // }, 50);
});

function replaceWords(data){
    let patterns = ['але або','або але','але','або'];
    while (data.indexOf('&nbsp;') >= 0) {
        data = data.replace('&nbsp;', ' ');
    }
    for(let i=0; i<patterns.length; i++){
        data = data.replace(new RegExp('('+patterns[i]+')', 'gm'), '{['+i+']}');
    }

    for(let j=0; j<patterns.length; j++){
        let pat = "{["+j+"]}";
        while (data.indexOf(pat) >= 0) {
            data = data.replace(pat, getColorWord(patterns[j]));
        }
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

function setCaret(el) {
    var range = document.createRange();
    var endNode = el.lastChild;
    range.selectNodeContents(endNode);
    range.setStart(endNode, range.endOffset);
    range.setEnd(endNode, range.endOffset);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}