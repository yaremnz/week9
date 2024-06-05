let binary_data = [
    {"name":"yareli", "age":25},
    {"name":"kevin", "age":56}
];
console.log(typeof binary_data);
console.log(binary_data.length);

freeze_dried = JSON.stringify(binary_data,undefined, 4);
console.log(typeof freeze_dried)
console.log(freeze_dried.length)
console.log(freeze_dried);0