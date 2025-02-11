function totalAmountPurchaseByValuableClients(customer) {
  let totalAmount = 0;
  customer.forEach((customerAmount) => {
    totalAmount += customerAmount;
  });
  return totalAmount;
}

let topCustomerPurchases = [10000, 20000, 30000];
console.log(totalAmountPurchaseByValuableClients(topCustomerPurchases));
