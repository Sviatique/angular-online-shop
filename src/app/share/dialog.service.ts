/**
 * Created by s.kharchevnyi on 14/11/2016.
 */
import { Injectable }     from '@angular/core';
import {Product} from "../product/product";
@Injectable()
export class DialogService {
  confirm(text: string) : boolean {
    return confirm(text);
  }
}
