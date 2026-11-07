export function array() {
    const elements: string[] = [];

    const fn = function(i: number) {
        return elements[i];
    }

    return Object.assign(fn, {
        push: (value: string) => elements.push(value),
        pop: () => elements.pop()
    });
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first

console.log(arr.pop()); // undefined