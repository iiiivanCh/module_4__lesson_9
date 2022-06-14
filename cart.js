'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(product, price, count) {
    this.items.push({ product, price, count, });
    this.increaseCount();
  },
  calculateItemPrice() {
    return this.items.reduce((sum, { price, count, }) =>
      sum + (price * count), 0);
  },
  increaseCount() {
    this.count = this.items.reduce((sum, { count, }) => sum + count, 0);
  },
  print() {
    const basket = JSON.stringify(this.items);
    console.log(`${basket}\ntotalPrice: ${this.totalPrice}`);
  },
  clear() {
    this.items.length = 0;
    this.count = 0;
  },
};


cart.add('сапоги', 5000, 10);
cart.add('пальто', 5000, 10);
cart.print();
// cart.totalPrice = 4;
console.log(cart.totalPrice);
cart.add('шапка', 5000, 10);
console.log(cart);
cart.print();
cart.clear();
cart.print();
console.log(cart);
cart.add('пальто', 5000, 10);
console.log(cart.totalPrice);
cart.clear();
console.log(cart);
