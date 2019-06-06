// insertAdjacentElement

// 対象の要素.insertAdjacentElement('オプション',挿入する要素)
// オプション一覧
// beforebegin: 自身の直前に挿入
// afterbegin: 最初の子ノードとして挿入
// beforeend: 最後の子ノードとして挿入
// afterend:自身の直後に挿入

const bbElm = document.getElementById('beforebegin'),
    abElm = document.getElementById('afterbegin'),
    beElm = document.getElementById('beforeend'),
    aeElm = document.getElementById('afterend'),
    insertElm1 = document.createElement('span');
insertElm1.innerText = ' * insertElm * ';
insertElm2 = document.createElement('span');
insertElm2.innerText = ' * insertElm * ';
insertElm3 = document.createElement('span');
insertElm3.innerText = ' * insertElm * ';
insertElm4 = document.createElement('span');
insertElm4.innerText = ' * insertElm * ';
bbElm.insertAdjacentElement('beforebegin', insertElm1);
abElm.insertAdjacentElement('afterbegin', insertElm2);
beElm.insertAdjacentElement('beforeend', insertElm3);
aeElm.insertAdjacentElement('afterend', insertElm4);


// オプションがキャメルケースじゃないのが不思議だが便利