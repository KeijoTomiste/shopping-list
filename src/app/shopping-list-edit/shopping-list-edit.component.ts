import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
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
      name: new FormControl(null, [Validators.required]),
      purchasedAt: new FormControl(null, [Validators.required]),
      store: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        url: new FormControl(null, [Validators.required]),
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

  productSave(form: FormGroupDirective) {
    this.shoppingListService.addProduct(this.productToAdd.value);
    form.resetForm();
  }

  removeProduct(product: Product) {
    this.shoppingListService.removeProduct(product);
  }
}
