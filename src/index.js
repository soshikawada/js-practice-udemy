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
// const val4 = {
//   name: "じゃけえ",
//   age: "28"
// };
// val4.name = "jak";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */

// const name = "じゃけ";
// const age = 28;
// // [わたしの名前はじゃけえです。年齢は28サイです]

// // 従来の方法
// const message1 = "わたしの名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `わたしの名前は${name}です。年齢は${age}です`;
// console.log(message2);

// /**
//  * アロー関数
//  */
// // 従来の関数
// function func1(aaa) {
//   return aaa;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("アロー関数です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };

// const m1 = `名前は${myProfile.name}です`;
// console.log(m1);

// const { name, age } = myProfile;
// const m2 = `名前は${name}です`;
// console.log(m2)

// const myProfile = ["じゃけえ", 28];

// const message3 = `名前は${myProfile[0]}です`;
// console.log(message3);

// const [name, age] = myProfile;

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("じゃけえ");

/**
 * スプレッド構文　...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunction = (num1, num2) => console.log(num1 + num2);
// sumFunction(arr1[0], arr1[1]);
// sumFunction(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1)
// console.log(arr3)
// console.log(...arr3)

// 配列のコピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // コピーしたいならイコールでいいのでは？
// //　参照が引き継がれてしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**+
 * mapやfilterをつかった配列の処理
 */
// const nameArr = ["田中", "山田", "じゃけえ"]
// for (let index = 0;index < nameArr.length; index++) {
//   console.log(nameArr[index])
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// nameArr.map((name) => console.log(name))

// const numArr = [1, 2, 3, 4, 5]
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1
// })
// console.log(newNumArr)

/**
 * 三項演算子
 */

// ある条件？条件がtrueの時：条件がfalseの時
const vall = 1 > 0 ? "trueです" : "falseです";
console.log(vall);

const num = "1300";
console.log(num.toLocaleString());
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);
