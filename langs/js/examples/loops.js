// do while
let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

// while
let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}

// continue
let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    n += i;
    console.log(n);
}
//1,3,7,12

// for in and for of
const arr = [3, 5, 7];
arr.foo = 'hello';

for (const i in arr) {
    console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
    console.log(i);
}
// Logs: 3 5 7