import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule, MatTableModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';


@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    MatTableModule,
    MomentModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ]
})
export class ShoppingListModule { }
