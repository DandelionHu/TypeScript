let isDone: boolean = false
let age: Number = 10

let firstName: string = 'hudandan'
let message: string = `Hello ${firstName}`

let u: undefined = undefined
let n: null = null

let num: number = undefined
// 任意类型
let notSure: any = 4
notSure = 'meybe is string'

// 数字类型的数组
let arrOfNumbers: number[] = [1,2,3]
arrOfNumbers.push(3)
// 元祖类型
let user: [string,number] = ['huhu',20]
user.push('string')

// 接口 只读 readonly  ? 可有可无
interface IPerson {
    readonly id: number
    name: string
    age?: Number
}
let my: IPerson = {
    id: 1,
    name: 'hudandan'
}

// 函数
const add = (x: number,y: number,z?: number): number => {
    if(typeof z==='number'){
        return x + y + z
    }else{
        return x + y
    }
}
let add2: (x:number,y:number,z?:number) => number = add
// interface 声明函数类型
interface ISum {
    (x: number,y: number,z?: number): number
}
let add3: ISum = add

// 类型推论
let str = 'str'
str = 'string'

// 联合类型
let numberOrString: number | string
numberOrString = 'string'
numberOrString = 123

// 类型断言
function getLength(input:string | number):number {
    const str = input as string
    if(str.length){
        return str.length
    }else{
        const number = input as number
        return number.toString().length
    }
}
function getLength2(input:string | number):number {
    if(typeof input === 'string'){
        return input.length
    }else{
        return input.toString().length
    }
}

// 类
class Animal {
    readonly name: any;
    constructor(name){
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}
const snake = new Animal('mayun')
snake.run()
// 继承
class Dog extends Animal{
    bark() {
        return `${this.name} is barking`
    }
}
const xiaobao = new Dog('xiaobao')
xiaobao.bark()
xiaobao.run()
// 重写
class Cat extends Animal{
    static categories = ['mammal']
    constructor(name){
        super(name)
        console.log(this.name)
    }
    run() {
        return 'Meow' + super.run()
    }
}
const maomao = new Cat('maomao')
maomao.run()
