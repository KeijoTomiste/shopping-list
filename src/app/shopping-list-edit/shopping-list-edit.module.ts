import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatTableModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';
import { ShoppingListEditRoutingModule } from './shopping-list-edit-routing.module';
import { ShoppingListEditComponent } from './shopping-list-edit.component';



@NgModule({
  declarations: [ShoppingListEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShoppingListEditRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MomentModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class ShoppingListEditModule { }
