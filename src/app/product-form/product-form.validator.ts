import { FormControl } from '@angular/forms';

export abstract class ProductFormValidator {

  public static numberInRange(min: number, max: number): any {
    return (control: FormControl): {[key: string]: boolean} => {
      let value: number = control.value;
      return (!Number(value) || value < min || value > max) ? {"invalidRange": true } : null;
    };
  }

}
