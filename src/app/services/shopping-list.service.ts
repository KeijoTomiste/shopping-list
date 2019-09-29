import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Product } from '../interfaces/product';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private initiated = false;
  private shoppingList = new ReplaySubject<Product[]>(1);
  private products: Product[] = [
    {
      name: 'Product 1',
      purchasedAt: 1569760019000,
      store: {
        name: 'Store 1',
        url: 'https://placekitten.com/200/300',
      },
    },
    {
      name: 'Product 2',
      purchasedAt: 1517760019000,
      store: {
        name: 'Store 2',
        url: 'https://placekitten.com/200/300',
      },
    },
    {
      name: 'Product 3',
      purchasedAt: 1559760019000,
      store: {
        name: 'Store 3',
        url: 'https://placekitten.com/200/300',
      },
    },
  ];

  constructor(
    private mockService: MockService,
  ) {}

  addProduct(product: Product) {
    this.initiateProducts();

    this.products.push(product);

    this.pushProducts();
  }

  getShoppingList(): Observable<Product[]> {
    this.initiateProducts();

    return this.shoppingList;
  }

  removeProduct(product: Product) {
    this.initiateProducts();

    this.products.splice(this.products.indexOf(product, 1));

    this.pushProducts();
  }

  private initiateProducts() {
    if (!this.initiated) {
      this.mockService.mockRequest(this.products).subscribe(data => this.shoppingList.next(data));
      this.initiated = true;
    }
  }

  private pushProducts() {
    this.shoppingList.next(this.products);
  }
}
