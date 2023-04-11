import type { IPersonOptions } from './types'

export class Person {
  name: string;
  age: number;

  constructor(options: IPersonOptions) {
    this.name = options.name
    this.age = options.age
  }

  sayHello() {
    console.log(`Hello, My name is ${this.name} and I'm ${this.age} years old.`)
  }
}
