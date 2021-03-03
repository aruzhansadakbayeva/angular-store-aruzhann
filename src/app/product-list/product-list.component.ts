import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  categoryPressed(category_id) {
    products[category_id].display_flag = !products[category_id].display_flag
  }

 share(product) {
    window.alert(`The product ${product.name} has been shared!`);
    window.open( `https://t.me/share/url?url=${product.link}&text=Hi! Look what I\'ve found on the Amazon.`
    );
  }
  likeItem(category_id, id) {
    products[category_id].items[id-1].likes+=1
  }

  removeItem(category_id, id) {
    products[category_id].items.splice(id-1, 1)
    for (var i=id; i<products[category_id].items.length; i++) {
      products[category_id].items[i].id = i
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/