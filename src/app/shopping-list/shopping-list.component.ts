import { Component, OnInit } from '@angular/core';
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

  constructor(
    private shoppingListService: ShoppingListService,
  ) {}

  ngOnInit() {
    this.shoppingListService.getShoppingList().subscribe(
      products => this.dataSource.data = products,
    );
  }
}
