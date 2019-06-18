// Objectの読み書きを禁止する
// use strictモードでのみ機能する

"use strict";

const obj = { id: 1, name: "hoge" };
Object.freeze(obj);

obj.id = 2; // Error
obj.age = 15; // Error
