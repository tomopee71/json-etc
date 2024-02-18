// jsonは””で囲われている　テキスト
// {
//     "id":"001",
// }
const json = `{"id":"001", "name":"AAA", "age":20}`;
// jsonはそのままだとプロパティーにアクセスできない undefinedになる
console.log(json.id);
// JSON.parse{jsonデータ}でキーの文字列を解析する
const parsed = JSON.parse(json);
console.log(parsed);
console.log(parsed.id);

// 普通のオブジェクトは以下
// {
//     id:"001",
// }
const data = {
  id: "002",
  name: "BBB",
  age: "30",
};
console.log(data.id);
// JSON.stringifyでオブジェクトをjsonに変換することもできる
const jsonData = JSON.stringify(data);
console.log(jsonData);
