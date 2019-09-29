import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private shoppingListService: ShoppingListService,
  ) {}

  ngOnInit() {
    this.products = this.shoppingListService.getShoppingList();
  }
}
