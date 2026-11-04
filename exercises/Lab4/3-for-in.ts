// Ітерування об'єктів

export function ages(people: { [key: string]: { born: number; died: number } }) {
  let res: { [key: string]: number } = {};

  for (let item in people) {
    res[item] = people[item]!.died - people[item]!.born;
  }
  return res;
}

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));
/* {
  lenin: 54,
  mao: 83,
  gandhi: 79,
  hirohito: 88,
} */