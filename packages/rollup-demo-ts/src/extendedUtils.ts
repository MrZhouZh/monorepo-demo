import type { IExtendedUtils } from './types'

export const ExtendedUtils: IExtendedUtils = {
  add(...args) {
    return args.reduce((pre, cur) => pre += cur)
  },
  substract(...args) {
    return args.reduce((pre, cur) => pre -= cur)
  },
}



