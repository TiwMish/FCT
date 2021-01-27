import { Component, OnInit } from '@angular/core';
import { FCTServiceService } from '../shared/fctservice.service';
import { FCTModel } from '../shared/fctmodel.model';
import { FormBuilder, FormGroup, FormArray, FormControl, NgForm } from '@angular/forms';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {
  
  isChecked: boolean;
  form: FormGroup;
  resultText: string[] = [];
  values:string;  
 count:number=0;  
 errorMsg:string;
 products: string;


  constructor(public service: FCTServiceService) { }
  
  onChange(prodName:string, event) {  
    this.errorMsg=""; 
    this.products="" ;
     const checked = event.target.checked;  
    
      if (checked) {  
        this.resultText.push(prodName);  
       
         } else {  
           const index = this.resultText.indexOf(prodName);  
           this.resultText.splice(index, 1);  
       }  
       this.values=this.resultText.toString();  
       const count=this.resultText.length;  
       this.count=count;  
       this.products=this.resultText.toString();
    }  

    Save() {  
  
      const count=this.resultText.length;  
      
      if(count == 0)  
      {  
        this.errorMsg="Select at least one Product";  
      }  
      else  
      {  
        this.count=count;  
        
      }  
        
       
    }

  ngOnInit(): void {
     this.service.refreshList();
     
  }
  
  // onSubmit(form: NgForm) {
  //   //form.form.reset();
  //   this.service.formData = new FCTModel();
  // }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new FCTModel();
  }
  
  insertRecord(form: NgForm) {
    this.service.postProduct().subscribe(
      res => {
       this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }
}


