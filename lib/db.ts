import Dexie, { Table } from "dexie";

export interface Product {
    id?: number;
    name: string;
    stock: number;
    unit: "piece" | "kg";
    purchasePrice: number;
    sellingPrice: number;
}

export interface Customer {
    id?: number;
    name: string;
    totalSpent: number;
}

export interface Sale {
    id: string;
    total: number;
    customerId?: string;
    customerName?: string;
    customerPhone?: string;
}

class GroceryDB extends Dexie {
    products!: Table<Product, number>;
    customers!: Table<Customer, number>;
    sales!: Table<Sale, number>;

    constructor() {
        super("groceryDB");

        this.version(1).stores({
            products: "++id, name, stock",
            customers: "++id, name",
            sales: "++id, date",
        });
    }
}

export const db = new GroceryDB();
