// arrays

let colors: string[] = ['red', 'green', 'blue']
colors.push('5')

let mixed: (string | number)[] = [1, 'blue', 'green']
mixed.push('5')

console.log('mixed ===', mixed);

const upperColors: string[] = colors.map((color: string): string => color.toUpperCase())

console.log('upperColors ===', upperColors);

const numsArr: number[] = [1, 5,-10, -5, 50, 10]

const largerThan3: number[] = numsArr
.sort((a: number, b: number): number => a - b)
.filter((num: number): boolean => num > 3)

console.log('largerThan3 ===', largerThan3);


const largerThan: string[] = numsArr
.sort((a: number, b: number): number => a - b)
.filter((num: number): boolean => num > 3)
.map((sk) => sk.toString())

console.log('largerThan ===', largerThan);