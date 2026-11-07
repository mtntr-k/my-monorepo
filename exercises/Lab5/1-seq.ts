// Ітерування функцій

type SeqFunc = (x: number) => number;

export function seq(...args: (SeqFunc | number)[]): any {
    // Вказуємо, що масив містить лише функції типу SeqFn
    const funcs: SeqFunc[] = [];

    function chain(...args: (SeqFunc | number)[]): any {
        for (let arg of args) {
            if (typeof arg === 'function') {
                funcs.push(arg);
            }
            if (typeof arg === 'number') {
                return funcs.reduceRight((res: number, fn: SeqFunc) => fn(res), arg);
            }
        }
        return chain;
    }

    return chain(...args);
}

console.log(
    seq((x: number) => x + 7)
       ((x: number) => x * 2)(5)
); // 17

console.log(
    seq((x: number) => x * 2)
       ((x: number) => x + 7)(5)
); // 24

console.log(
    seq((x: number) => x + 1)
       ((x: number) => x * 2)
       ((x: number) => x / 3)
       ((x: number) => x - 4)(7)
); // 3