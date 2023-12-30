var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");
var addButtons = document.getElementsByClassName("cart-add");

var items = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function cartUpdate() {
  let cart = 0;
  for (index = 0; index < items.length; index++) {
    cart = cart + items[index].quantity;
  }
  cartValue.innerHTML = cart;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = (e) => {
    items[i].quantity++;
    cartUpdate();
  };
}

var totalDollarsFinal = 0;
var totalCentsFinal = 0;

function updatePrice() {
  let totalPriceCents = 0;

  for (index = 0; index < items.length; index++) {
    totalPriceCents =
      totalPriceCents +
      items[index].quantity * (items[index].dollars * 100 + items[index].cents);
  }
  totalDollarsFinal = Math.floor(totalPriceCents / 100);
  totalCentsFinal = totalPriceCents % 100;
}

var Whatsapp = "https://api.whatsapp.com/send?phone=42563247347&text=Order%20details"
function updateWhatsapp(){
  for (let index=0;index<items.length;index++){
    if (items[index].quantity !=0){
      Whatsapp += '%0A' + items[index].name + '%20'+ items[index].quantity;
    }
  }
  Whatsapp+= '%0A' + 'Total%20Price:%20$' + totalDollarsFinal + '%20'+ totalCentsFinal + 'c'
}

cartButton.onclick = () => {
  updatePrice();
  updateWhatsapp()
  window.open(Whatsapp, '_blank')
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      console.log(
        "Item name: " +
          items[index].name +
          " - Quantity: " +
          items[index].quantity
      );
    }
  }

  console.log(
    "The total amount is " + totalDollarsFinal + "$ and " + totalCentsFinal + " cents"
  );
};