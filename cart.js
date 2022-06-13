"use strict"

const cart = {
  items: [],
  count: 0,
  get totalPrice()  {
    return this.totalPriceCalc;
  },
  set totalPrice(val) {
    if (this.totalPriceCalc !== val) {
      this.totalPrice = this.totalPriceCalc;
      console.log("Извините, нельзя");
    } 
  },
  // totalPrice: 0,

  add(product, price, count) {
    this.items.push({
      product,
      price,
      count,
    });
    this.increaseCount();
    this.calculateItemPrice();
  },
  calculateItemPrice() {
    this.totalPriceCalc = this.items.reduce((sum, {price, count}) => sum + (price * count), 0);
  },
  increaseCount() {
    this.count = this.items.reduce((sum, {count}) => sum + count, 0);
  },
  print() {
    const basket = JSON.stringify(this.items);
    console.log(basket + '\n' + 'totalPrice: ' + this.totalPrice);
  },
  clear() {
    this.items.length = 0;
    this.totalPriceCalc = 0;
    this.count = 0;
  },
};


cart.add("сапоги", 5000, 10);
cart.add("пальто", 5000, 10);
cart.print();
cart.totalPrice = 4;
console.log(cart.totalPrice);
cart.add("шапка", 5000, 10);
console.log(cart);
cart.print();
cart.clear();
cart.print();
console.log(cart);
cart.add("пальто", 5000, 10);
console.log(cart.totalPrice);
cart.clear();
console.log(cart);