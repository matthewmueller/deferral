export default class Deferred<T> {
  private readonly promise: Promise<T>
  private res = (_value?: T | PromiseLike<T> | undefined): void => { }
  private rej = (_reason?: any): void => { }

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.res = resolve
      this.rej = reject
    })
  }

  wait(): Promise<T> {
    return this.promise
  }

  resolve(value?: T | PromiseLike<T> | undefined): void {
    return this.res(value)
  }

  reject(reason?: any): void {
    return this.rej(reason)
  }
}
