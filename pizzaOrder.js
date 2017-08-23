var orderCount = 0;
var pizzaCost = 7.50;

function takeOrder(toppingOne, toppingTwo, toppingThree, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + toppingOne +', ' + toppingTwo + ' and ' + toppingThree);
  return orderCount = orderCount + 1;
}

function getSubTotal(orderCount){
  return (orderCount * pizzaCost);
}

function getTax(){
  return (getSubTotal(orderCount) * 0.06);
}

function getTotal(){
  return (getSubTotal(orderCount) + getTax());
}

takeOrder('bacon', 'cheese', 'tomato', 'thin');
takeOrder('pepperoni', 'cheese', 'ham', 'regular');
takeOrder('chicken', 'chili', 'pineapple', 'thin');
takeOrder('kittens', 'puppies', 'baby seals', 'thick');
console.log(orderCount+ ' pizzas');
console.log('sub total: $'+getSubTotal(orderCount).toFixed(2));
console.log('tax (6%): $' +getTax().toFixed(2));
console.log('total: $'+getTotal().toFixed(2));