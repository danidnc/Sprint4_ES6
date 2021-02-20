

//EJERCICIO 1.1
let multiply = (num1, num2) => console.log(num1 * num2);
multiply(4, 3);


//1.2
let toCelsius = (fahrenheit) => { console.log((5 / 9) * (fahrenheit - 32)) };
toCelsius(20);


//1.3
let padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (i = 0; i < numZeros; i++) {
        numStr = "0" + numStr;
    }
    return console.log(numStr);
}
padZeros(1, 5);


//1.4
let power = (base, exp) => {
    let result = 1;
    for (i = 0; i < exp; i++) {
        result *= base;
    }
    return console.log(result);
}
power(2, 3);


//1.5
let greet = (who) => console.log(`Hello ${who}`);
greet('Dani');


//EJERCICIO 2 . Falta el return dentro de la función anónima
var users =
    [{ firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }];



users.map(function (user) {
    return console.log(user.firstName);
});


//EJERCICIO 3
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let frase = epic.reduce(function (frase, palabra) {
    palabra.toString();
    frase += " " + palabra;
    return frase;
});
console.log(frase);


//EJERCICIO 4
let f1 = "gigolo";
let f2 = [...f1];
let reverse = (frase) => {
    frase.reverse();
    return console.log(frase);
}

reverse(f2);


//EJERCICIO 5
b = (segundos, miliseg) => {
    setTimeout(() => { console.log(`Imprime ${segundos} después`) }, miliseg);
}
async function a() {
    await b(1, 1000);
    doMoreWork();
}
function doMoreWork() {
    console.log("Imprime sincrono")
}
a();

//EJERCICIO6
var tasks = [
    {
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];

let arrTasks = [];
tasks.forEach(extraerNombre = (valor) => {
    arrTasks.push(valor.name);
});
console.log(arrTasks);

let arrTasks2 = [];
tasks.map(extraerNombre = (valor) => {
    arrTasks2.push(valor.name);
});
console.log(arrTasks2);
