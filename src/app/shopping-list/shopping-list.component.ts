import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Product } from '../interfaces/product';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'store', 'purchasedAt'];
  dataSource = new MatTableDataSource<Product>([]);
  filters = new FormGroup({
    name: new FormControl(),
    storeName: new FormControl(),
    purchasedBefore: new FormControl(),
    purchasedAfter: new FormControl(),
  });

  constructor(
    private shoppingListService: ShoppingListService,
  ) {}

  ngOnInit() {
    this.shoppingListService.getShoppingList().subscribe(
      products => this.dataSource.data = products,
    );

    this.dataSource.filterPredicate = (data, filter: any) => {
      if (filter.name && !data.name.includes(filter.name)) {
        return false;
      }

      if (filter.storeName && !data.store.name.includes(filter.storeName)) {
        return false;
      }

      if (filter.purchasedBefore && data.purchasedAt > filter.purchasedBefore) {
        return false;
      }

      if (filter.purchasedAfter && data.purchasedAt < filter.purchasedAfter) {
        return false;
      }

      return true;
    };

    this.filters.valueChanges.subscribe((changes) => {
      this.dataSource.filter = changes;
    });
  }
}
