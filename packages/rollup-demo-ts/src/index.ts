import type { IPlugin, IToolsOptions } from './types'

export default class Tools {
  private plugins: IPlugin[] = []

  constructor(options?: IToolsOptions) {
    if (options && options.plugins) {
      this.plugins = options.plugins
    }
  }

  use(plugin: IPlugin) {
    this.plugins.push(plugin)
  }

  applyPlugins(...args: any[]) {
    // this.plugins.forEach((plugin) => {
    //   plugin.apply(args)
    // })
    // 找到对应的插件, 然后进行调用
    const [name, ...rest] = args
    const findPlugin = this.plugins.find(plugin => plugin.name === name)
    
    return findPlugin?.apply(...rest)
  }

  add(...args: number[]) {
    return args.reduce((pre, cur) => pre += cur)
  }

  substract(...args: number[]) {
    return args.reduce((pre, cur) => pre -= cur)
  }

  public debounce(fn: (...args: any[]) => void, delay: number) {
    let timer: number;

    return (...args: any[]) => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  public throttle(fn: (...args: any[]) => void, delay: number) {
    let prevTime = 0;

    return (...args: any[]) => {
      const nowTime = Date.now();

      if (nowTime - prevTime >= delay) {
        fn(...args);
        prevTime = nowTime;
      }
    };
  }

  public deepClone(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    let result: any;

    if (Array.isArray(obj)) {
      result = [];
    } else {
      result = {};
    }

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = this.deepClone(obj[key]);
      }
    }

    return result;
  }
}
