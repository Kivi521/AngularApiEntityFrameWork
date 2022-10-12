export class OrderItem {
    name: string;
    price: number;
    quantity: number;
    productId: number;


    constructor(){
        this.name = 'chair';
        this.price = 19;
        this.quantity = 1;
        this.productId =1;
    }
}

export class Order {
    orderId : number;
    orderDate: Date = new Date();
    orderNumber: string = Math.random().toString(36).substr(2, 5);
    items: OrderItem[] = [];
    get subtotal(): number {

        const result = this.items.reduce(
          (tot, val) => {
            return tot + (val.price * val.quantity);
        }, 0);
    
        return result;
      }

    constructor(){
        this.orderId = 1;
        
    }
}