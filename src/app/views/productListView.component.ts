import { Component ,OnInit} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from '../services/store.service';


@Component({
    selector:"product-list",
    templateUrl:"productListView.component.html",
    styleUrls:["productListView.component.css"]
})
export class ProductListView implements OnInit {

  constructor(public store: Store) {
  }

  ngOnInit(): void {
    this.store.loadProducts()
      .subscribe(() => {
        
      }); 
  }
}


  /*
    public products = [
        {
      name: "bed",
       price: "19"
   }, {
       name: "table",
       price: "9.9"
    }
        ];
        */

        /*
constructor(private http: HttpClient) {
        this.loadProducts();
    }
    // method

    loadProducts() {

        console.log('hello');
         this.http.get<[]>("http://localhost:5002/api/OrderItem")
            .subscribe(
                data => {
                    console.log(data);
                    this.products = data;

                }
            );

    }
    */