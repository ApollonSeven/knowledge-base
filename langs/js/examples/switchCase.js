// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

const fruittype = "Bananas"
switch (fruittype) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
    case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
    case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
    case "Mangoes":
        console.log("Mangoes are $0.56 a pound.");
        break;
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    default:
        console.log("Sorry, we are out of " + fruittype + ".");
}
// Bananas are $0.48 a pound.

switch (fruittype) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
    case "Apples":
        console.log("Apples are $0.32 a pound.");
    case "Bananas":
        console.log("Bananas are $0.48 a pound.");
    case "Cherries":
        console.log("Cherries are $3.00 a pound.");
    case "Mangoes":
        console.log("Mangoes are $0.56 a pound.");
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
    default:
        console.log("Sorry, we are out of " + fruittype + ".");
}
// Bananas are $0.48 a pound.
// Cherries are $3.00 a pound.
// Mangoes are $0.56 a pound.
// Mangoes and papayas are $2.79 a pound.
// Sorry, we are out of Bananas.

switch ("Nothing") {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
    case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
    case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
    case "Mangoes":
        console.log("Mangoes are $0.56 a pound.");
        break;
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    default:
        console.log("Sorry, we are out of " + fruittype + ".");
}
// Sorry, we are out of Nothing.

const expr = 'Mangoes';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}
// if expr = "Mangoes" or "Papayas" -> "Mangoes and papayas are $2.79 a pound."


const foo = 5;
switch (foo) {
    case 2:
        console.log(2);
        break; // it encounters this break so will not continue into 'default:'
    default:
        console.log('default')
    // fall-through
    case 1:
        console.log('1');
}
// default
// 1


// AN ALTERNATIVE TO IF ELSE CHAINS
// IF ELSE
if ('fetch' in globalThis) {
    // Fetch a resource with fetch
} else if ('XMLHttpRequest' in globalThis) {
    // Fetch a resource with XMLHttpRequest
} else {
    // Fetch a resource with some custom AJAX logic
}

// SWITCH CASE
switch (true) {
    case 'fetch' in globalThis:
        // Fetch a resource with fetch
        break;
    case 'XMLHttpRequest' in globalThis:
        // Fetch a resource with XMLHttpRequest
        break;
    default:
        // Fetch a resource with some custom AJAX logic
        break;
}