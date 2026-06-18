import Dexie, { type Table } from 'dexie';

// --- DATABASE INTERFACE LAYERS ---
export interface Product {
  id?: number;
  name: string;
  price: number;
  stock: number;
  unit: string; // kg, packet, piece, liter, etc.
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
  date: string; // ISO String timestamp or date string
}

// --- DEXIE LOCAL DATABASE ENGINE CLASS ---
class MithapurGroceryDatabase extends Dexie {
  products!: Table<Product>;
  sales!: Table<Sale>;

  constructor() {
    super('MithapurGroceryDB');
    
    // Define structural index paths for rapid querying
    this.version(1).stores({
      products: '++id, name, price, stock',
      sales: '++id, customerName, customerPhone, date, total'
    });
  }
}

// Export a single optimized database singleton reference connection
export const db = new
