/**
 * const let等の変数宣言
 */
// var vall = "var変数";
// console.log(vall);

// // varは上書き加納
// vall = "var変数うわがき";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "じゃけえ",
  age: "28"
};
val4.name = "jak";
console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */

const name = "じゃけ";
const age = 28;
// [わたしの名前はじゃけえです。年齢は28サイです]

// 従来の方法
const message1 = "わたしの名前は" + name + "です。年齢は" + age + "です";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `わたしの名前は${name}です。年齢は${age}です`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
function func1(aaa) {
  return aaa;
}
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("アロー関数です"));

const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));
