import Dexie, { type Table } from 'dexie';

export interface Product {
    id?: number;
    name: string;
    price: number;
    stock: number;
    unit: string;
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    qty: number;
    unit: string;
}

export interface Sale {
    id?: number;
    customerName: string;
    customerPhone: string;
    items: CartItem[];
    total: number;
    date: string;
}

class MithapurGroceryDatabase extends Dexie {
    products!: Table<Product>;
    sales!: Table<Sale>;

    constructor() {
        super('MithapurGroceryDB');

        this.version(1).stores({
            products: '++id, name, price, stock',
            sales: '++id, customerName, customerPhone, date, total'
        });
    }
}

// Global compilation window shield check
export const db = new MithapurGroceryDatabase();