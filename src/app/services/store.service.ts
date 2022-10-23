import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Order, OrderItem } from "../shared/Order";
import { Product } from "../shared/Product";

@Injectable()
export class Store {

    constructor(private http: HttpClient) {

    }

    public products: Product[] = [];
    public order: Order = new Order();
    public token = "";
    public expiration = new Date();


    loadProducts(): Observable<void> {

        console.log('hello');
        return this.http.get<[]>("http://localhost:5002/api/StockItem")
                .pipe(map(data => {
                    this.products = data;
                    return;
                }));
            
    }

    /*
    loadProducts(): Observable<void> {
        return this.http.get<[]>("/api/products")
            .pipe(map(data => {
                this.products = data;
                return;
            }));
    }*/

    get loginRequired(): boolean {
        return this.token.length === 0 || this.expiration > new Date();
    }


    checkout() {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);

        return this.http.post("/api/orders", this.order, {
            headers: headers
        })
            .pipe(map(() => {
                this.order = new Order();
            }));
    }

    addToOrder(product: Product) {

        // let item: OrderItem;
        console.log(product);
        console.log(this.order);
        let item = this.order.items.find(o => o.productId === product.id);
        

        if (item) {
            item.quantity++;
        } else {
            item = new OrderItem();
            item.name = product.name;
            item.price = product.price;
            item.productId = product.id;
            item.quantity = 1;

            this.order.items.push(item);
        }

    }


}