import { Component } from '@angular/core';
import { Grocery } from './Grocerie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  groceries: Grocery[] = [];
  newGrocery: string;

  saveGrocery() {
    if (this.newGrocery) {
      let grocery = new Grocery();
      grocery.name = this.newGrocery;
      grocery.isCompleted = true;
      this.groceries.push(grocery);
      this.newGrocery = '';
    } else {
      alert('Please enter a Grocery');
    }
  }

  done(id: number) {
    this.groceries[id].isCompleted = !this.groceries[id].isCompleted;
  }

  remove(id: number) {
    this.groceries = this.groceries.filter((v, i) => i !== id)
  }
}