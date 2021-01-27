import { Injectable } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { FCTModel } from './fctmodel.model';
import {HttpClient} from "@angular/common/http";

import { PurchaseModel } from './purchaseModel.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';    



@Injectable({
  providedIn: 'root'
})
export class FCTServiceService {
  list : FCTModel[];
  readonly baseURL = 'http://localhost:50594/api';
  formData: FCTModel= new FCTModel();

  constructor(private http: HttpClient) { }
    FCTData(): Observable<FCTModel[]> {  
            return this.http.get<FCTModel[]>(this.baseURL) 
    }

  
  

  refreshList() {
    this.http.get(this.baseURL + "/Products")
      .toPromise()
      .then(res =>this.list = res as FCTModel[]);
}

postProduct() {  
  return this.http.post(this.baseURL + '/Products', this.formData);
  
} 
// putPurchase() {
//   return this.http.put(`${this.baseURL}/${this.formData.productId}`, this.formData);
// }
deletePurchase(id: number) {
  return this.http.delete(`${this.baseURL}/${id}`);
}


// errorHandler(error: Response) {  
//   console.log(error);  
//   return Observable.throw(error);  
// } 
}
