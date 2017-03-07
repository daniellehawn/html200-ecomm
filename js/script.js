var cart = [ ];

var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

for(var i = 0; i < products.length; i++){
  var obj = products[i];
  
  console.log("Product: "+obj.name + " Description: " + obj.description + " Price: " + obj.price);
}

//function filterProducts(){
//  console.log("Filter by: "+document.sortBy.filter.value);
//  event.preventDefault();
//}

function filterProducts() {
  var sortMethod = document.sortBy.filter.value;
  console.log("Filter by: "+document.sortBy.filter.value);
  event.preventDefault();
}

//Compare Name and Sort Array
function sortByName(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase())
    return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase())
    return 1;
  return 0;
  console.log(sortByName);
}

//Compare Price and Sort Array
function sortByPrice(a,b) {
  return a.price - b.price;
}


//TO DO: trigger on change of cart contents
function sumPrices(cartArray) {
  // for loop through array, sum value of price attributes for each object
  var total = 0;
  
  for(var i= 0; i < cartArray.length; i++) {

    if(cartArray[i].price){
          total = total + cartArray[i].price;
    }
  }
  //TO DO: print total as HTML to page, next to cart icon
  console.log(total);
}

function addItem(item) {
  /*checks to see if an item is in the cart array. If not, it will add it */
  var ProductIndex = cart.indexOf(item);
  if (ProductIndex <= 0) {
    cart.push(item);
  }
  console.log(cart);
}

function removeItem(item) {
  var ProductIndex = cart.indexOf(item);
  if (ProductIndex != -1) {
    cart.splice(ProductIndex, 1);
  }
  console.log(cart);
}

