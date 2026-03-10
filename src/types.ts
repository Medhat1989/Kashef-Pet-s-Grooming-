export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'food' | 'accessory';
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
