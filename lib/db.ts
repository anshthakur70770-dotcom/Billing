import Dexie, { type Table } from 'dexie';

// --- DATABASE INTERFACE LAYERS ---
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

// 1. ADD CUSTOMER TYPES MODEL DATA SCHEMA STRUCTURE
export interface CustomerRecord {
  id?: number;
  name: string;
  phone: string;
  addedAt: string;
}

// --- DEXIE LOCAL DATABASE ENGINE CLASS ---
class MithapurGroceryDatabase extends Dexie {
  products!: Table<Product>;
  sales!: Table<Sale>;
  customers!: Table<CustomerRecord>; // 2. Map structural type property

  constructor() {
    super('MithapurGroceryDB');
    
    // 3. Register the 'customers' table configuration mapping indexes
    this.version(1).stores({
      products: '++id, name, price, stock',
      sales: '++id, customerName, customerPhone, date, total',
      customers: '++id, name, phone, addedAt' 
    });
  }
}

export const db = new MithapurGroceryDatabase();
