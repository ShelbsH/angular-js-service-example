'use strict';

/**
 * @ngdoc service
 * @name shoppingExampleApp.shopping
 * @description
 * # shopping
 * Service in the shoppingExampleApp.
 */
shop.service('ProductService', function () {
  let products = [];

  this.generate = (name, price) => {
    products.push({name: name, price: price});
  };

  this.getList = () => (products);
});
