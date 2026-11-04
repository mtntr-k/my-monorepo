// Ітерування циклами

// 1. Цикл for
export function sum1(...args: number[]): number {
    const arr = [...args];
    let res1 = 0;

    for (let i = 0; i < arr.length; i++) {
        res1 += arr[i] ?? 0;
    }
    return res1;
}

// 2. Цикл for of
export function sum2(...args: number[]): number {
    let res2 = 0;

    for (let item of args) {
        res2 += item;
    }
    return res2;
}

// 3. Цикл while
export function sum3(...args: number[]): number {
    const arr = [...args];
    let res3 = 0;
    let i = 0;

    while (i < arr.length) {
        res3 += arr[i] ?? 0;
        i++;
    }
    return res3;
}

// 4. Цикл do while
export function sum4(...args: number[]): number {
    const arr = [...args];
    let res4 = 0;
    let i = 0;

    if (arr.length === 0) return res4;

    do {
        res4 += arr[i] ?? 0;
        i++;
    } while (i < arr.length);
    return res4;
}

// 5. Метод reduce()
export function sum5(...args: number[]): number {
    const arr = [...args];
    let res5 = 0;

    res5 = arr.reduce((acc, value) => acc + value, 0);
    return res5;
}

const a = sum1(1, 2, 3); // a === 6
const b = sum2(0); // b === 0
const c = sum3(); // c === 0
const d = sum4(1, -1, 1); // d === 1
const e = sum5(10, -1, -1, -1); // e === 7

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);