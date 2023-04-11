export interface IPersonOptions {
  name: string
  age: number
}

export interface IUtils {
  add(...args: number[]): number
}

export interface IEmployeeOptions extends IPersonOptions {
  salary: number
}

export interface IExtendedUtils extends IUtils {
  substract(...args: number[]): number;
}
