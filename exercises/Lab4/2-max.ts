// Ітерування по двувимірному масиву

export function max([...args]: number[][]) {
    const arr = [...args];
    let arrOfMax: number[] = [];
    let maxNum: number;
    let res: number;

    for(let item of arr) {
        maxNum = item[0] ?? 0;

        for (let i of item) {
            if (i > maxNum) {
                maxNum = i;
            }
        }
        arrOfMax.push(maxNum);
    }

    res = arrOfMax[0] ?? 0;
    for (let j of arrOfMax) {
        if (j > res) {
            res = j;
        }
    }
    return res;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

console.log(m); // 9