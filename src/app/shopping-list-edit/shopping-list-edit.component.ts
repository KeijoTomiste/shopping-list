import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Product } from '../interfaces/product';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  displayedColumns: string[] = ['name', 'store', 'purchasedAt', 'remove'];
  dataSource = new MatTableDataSource<Product>([]);
  productToAdd = new FormGroup(
    {
      name: new FormControl(),
      purchasedAt: new FormControl(),
      store: new FormGroup({
        name: new FormControl(),
        url: new FormControl(),
      })
    },
  );

  constructor(
    private shoppingListService: ShoppingListService,
  ) {}

  ngOnInit() {
    this.shoppingListService.getShoppingList().subscribe(
      products => this.dataSource.data = products,
    );
  }

  productSave() {
    console.log(this.productToAdd.value);
    this.shoppingListService.addProduct(this.productToAdd.value);
    this.productToAdd.reset();
  }

  removeProduct(product: Product) {
    this.shoppingListService.removeProduct(product);
  }
}
