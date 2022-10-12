import { Component } from "@angular/core";
import { Store } from "../services/store.service";

@Component({
  selector: "cart",
  templateUrl: "cartView.component.html",
  styleUrls: ["cartView.component.css"]
})

export class CartView{
     public order = [];
     constructor(public store: Store) {

    }
}

