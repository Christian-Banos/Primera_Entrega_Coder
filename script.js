alert("add the desired product, if you want to exit add 0");
let products = Number(prompt("1 - Iphone Pro Max ... 1000€ \n 2 - Samsung Galaxy ... 700€ \n 3  - Ipad 10 ... 500€"));

let Quantity;
let total = 0;

const quantityTwo = (amount, price) => {
    return amount * price;
  };

while (products != 0) {
  switch (products) {
    case 1:
      Quantity = Number(prompt("The selected product was Iphone Pro Max,  Select the quantity"));
      total += quantityTwo(Quantity, 1000);
      break;

    case 2:
      Quantity = Number(prompt("The selected product was Samsung Galaxy,  Select the quantity"));
      total += quantityTwo(Quantity, 700);
      break;

    case 3:
      Quantity = Number(prompt("The selected product was Ipad 10,  Select the quantity"));
      total += quantityTwo(Quantity, 500);
      break;

    default:
      alert("Wrong Code");
      break;
  }

  products = Number(prompt("1 - Iphone Pro Max ... 1000€ \n 2 - Samsung Galaxy ... 700€ \n 3  - Ipad 10 ... 500€"));
}

alert(`the total purchase is...${total}`);

function shipping() {
    if (total >= 1500) {
        alert('Shipping free')
    } else {
        alert(`The shipping cost is 10€, the total is ${total + 10} €` )
    }
}

shipping()