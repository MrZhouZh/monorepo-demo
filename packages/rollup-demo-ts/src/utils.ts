import type { IUtils } from './types'

export const Utils: IUtils = {
  add(...args) {
    return args.reduce((pre, cur) => pre += cur)
  }
}
