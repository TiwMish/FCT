import { Injectable } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { FCTModel } from './fctmodel.model';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs'; 
import { PurchaseModel } from './purchaseModel.model';


@Injectable({
  providedIn: 'root'
})
export class FCTServiceService {
  list : FCTModel[];

  constructor(private http: HttpClient) { }
    FCTData(): Observable<FCTModel[]> {  
            return this.http.get<FCTModel[]>(this.baseURL) 
    }

  
  readonly baseURL = 'http://localhost:50594/api/Products';
  formData: PurchaseModel= new PurchaseModel();

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as FCTModel[]);
}

postPurchase() {
  return this.http.post(this.baseURL, this.formData);
}
putPurchase() {
  return this.http.put(`${this.baseURL}/${this.formData.Id}`, this.formData);
}
deletePurchase(id: number) {
  return this.http.delete(`${this.baseURL}/${id}`);
}


}
