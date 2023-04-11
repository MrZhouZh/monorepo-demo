export interface IPlugin {
  name: string
  apply(...args: any[]): void
}

export interface IToolsOptions {
  plugins?: IPlugin[]
}
