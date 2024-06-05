let raw_data = `["a","b","c"]`;
console.log(raw_data.length); //13
console.log(typeof raw_data)

let raw_data2 = `[{"name":"yareli", "age":25},{"name":"kevin", "age":56}]`;
console.log(raw_data2.length);
console.log(typeof raw_data2);

let cooked_data = JSON.parse(raw_data); //interoret the stringl cut it up in pieces

// let cooked_data = ["a","b","c"];
console.log(cooked_data.length); //3
console.log(typeof cooked_data);