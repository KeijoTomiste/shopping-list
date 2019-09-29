import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';



@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    MatTableModule,
  ]
})
export class ShoppingListModule { }
