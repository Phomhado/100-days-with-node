/*In the code below I asked AI to simulate some code with some erros where I could try different console
approaches to debug it*/

const products = [
  { name: "T-Shirt", price: 49.9 },
  { name: "Pants", price: 89.5 },
  { name: "Socks", price: 10 },
  { name: "Cap", price: null },
];

function calculateTotal(products) {
  let total = 0;

  console.time("Calculation time");

  for (let i = 0; i <= products.length; i++) {
    const product = products[i];

    if (!product) {
      console.warn(`Product at position ${i} is undefined!`);
      continue;
    }

    console.log(`Checking product:`, product);

    if (product.price == null) {
      console.error(`Error: Product "${product.name}" has no price!`);
      continue;
    }

    total += product.price;
  }

  console.timeEnd("Calculation time");

  return total;
}

function checkout() {
  console.trace("checkout() was called");

  const cartTotal = calculateTotal(products);
  console.log(`Cart total: $${cartTotal.toFixed(2)}`);
}

console.log("Starting shopping system...");
checkout();
