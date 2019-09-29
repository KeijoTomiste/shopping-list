import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { ShoppingListEditRoutingModule } from './shopping-list-edit-routing.module';
import { ShoppingListEditComponent } from './shopping-list-edit.component';



@NgModule({
  declarations: [ShoppingListEditComponent],
  imports: [
    CommonModule,
    ShoppingListEditRoutingModule,
    MatTableModule,
    MatButtonModule,
  ]
})
export class ShoppingListEditModule { }
