import { Phone } from './phone';

export class Mobile extends Phone {
  model: string;

  constructor(functionCount: number = 0, model: string = '') {
    super(functionCount);
    this.model = model;
  }

  override getCost(): number {
    if (this.functionCount <= 0) return 0;
    return super.getCost() * 3;
  }
}
