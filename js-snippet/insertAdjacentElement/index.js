// insertAdjacentElement

// 対象の要素.insertAdjacentElement('オプション',挿入する要素)
// オプション一覧
// beforebegin: 自身の直前に挿入
// afterbegin: 最初の子ノードとして挿入
// beforeend: 最後の子ノードとして挿入
// afterend:自身の直後に挿入

const hoge = document.getElementById('hoge'),
    fuga = document.createElement('span');
hoge.insertAdjacentElement('beforebegin', fuga);

// オプションがキャメルケースじゃないのが不思議だが便利