import functions from './functions';

let nome: string;
let arr: number[] = [];

//inferencia 
let y = 0;

//annotation
let z: number = 0;

//union type
let id: string | number = "0";

//type alias
type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = "10";

enum Size {
    p = "pequeno",
    m = "média",
    g = "grande"
};

const camisa = {
    name: "Camisa gola V",
    size: Size.g,
};

//literal types
let teste: "" | null;

//interface
interface MathFuctionParams {
    n1: number,
    n2: number
};

function sumNumbers(nums: MathFuctionParams) {
    return nums.n1 + nums.n2;
}

function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`item:${item}`);
    })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

//class
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
};

const zeca = new User("Aléxia", "Admin", true);

//interface em class
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro ${this.brand}`);

    }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

//herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
};

const a4 = new SuperCar("Audi", 4, 2.0);

//decorators
class Person {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");

//constructor decorators
function BaseParamters() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

// @BaseParamters()
// class Personn {
//     name;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

console.log(sam);
console.log(a4);
console.log(zeca);
console.log(sumNumbers({ n1: 1, n2: 2 }));
console.log(functions.somar(1, 2));
