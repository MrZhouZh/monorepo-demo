import type { IPlugin, IToolsOptions } from './types';
export default class Tools {
    private plugins;
    constructor(options?: IToolsOptions);
    use(plugin: IPlugin): void;
    applyPlugins(...args: any[]): void | undefined;
    add(...args: number[]): number;
    substract(...args: number[]): number;
    debounce(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void;
    throttle(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void;
    deepClone(obj: any): any;
}
