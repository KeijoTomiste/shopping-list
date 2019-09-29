import { Store } from './store';

export interface Product {
  name: string,
  store: Store,
  purchasedAt: number,
}
