import { Person } from './person'
import type { IEmployeeOptions } from './types'

export class Employee extends Person {
  salary: number;

  constructor(options: IEmployeeOptions) {
    super(options)
    this.salary = options.salary;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old, and my salary is ${this.salary}.`);
  }
}

