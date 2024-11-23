export class Phone {
  functionCount: number;

  constructor(functionCount: number = 0) {
    this.functionCount = functionCount;
  }

  getCost(): number {
    if (this.functionCount <= 0) return 0;
    return 40 * Math.log(this.functionCount);
  }
}
