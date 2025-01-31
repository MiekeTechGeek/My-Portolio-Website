var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;
//this function is being used for adding items used in variable x, incrementing the quantities for that specific item
function add_selection(x) {
  console.log(x);
  quantities[x] = quantities[x] + 1;
  totals[x] = prices[x] * quantities[x];
  totalOrderAmt += prices[x];

  display_all();
}
//this is the same as the add function but it is doing the opposite
function remove_selection(x) {
  console.log(x);
  quantities[x] = quantities[x] - 1; //removing 1 from the total quantities
  //in the if statement we are checking to ensure that the quantity does not go below zero
  if (quantities[x] < 0) {
    alert("You cannot remove anymore items.");
    quantities[x] = quantities[x] + 1;
  }
  totals[x] = prices[x] * quantities[x];
  totalOrderAmt += prices[x];

  display_all();
}

function checkout() {
    var message="Your total price is $" + totalOrderAmt + "<br> Your items are <br>";
    //we are displaying the quantities and items next to each other
    for(let i=0; i < items.length; i++) {
        message+= items[i] + ": " + quantities[i] + "<br>";
    }
    //we are creating the pop up container and assigning it a css class "popUp-Container" to style it later
    let popUpContainer = document.createElement("div");
    popUpContainer.classList.add("popUp-Container");
    //adding the "closeButton" with what function it must perform (which is closing the container)
    let closeButton = document.createElement("button");
    closeButton.textContent = "close";
    closeButton.addEventListener("click", function() {
        document.body.removeChild(popUpContainer);
    })
    //this tells the program what to display
    popUpContainer.innerHTML=message;
    //add the "closeButton" to the form
    popUpContainer.appendChild(closeButton);
    //this displays the "popUpContainer" crteated
    document.body.appendChild(popUpContainer);
}

function display_all() {
  var myTable =
    "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
  myTable +=
    "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
  myTable +=
    "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
  myTable +=
    "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
  myTable +=
    "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
  myTable +=
    "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
  myTable +=
    "<th style='width: 100px; color: red; text-align: right;'>Remove</th>"; //changed heading from add to remove, so that there isn't a double add button

  for (i = 0; i < items.length; i++) {
    myTable +=
      "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'><button onclick='add_selection(" +
      i +
      ")'>Add</button></td>"; //put in the missing closing tag ">"
    myTable +=
      "<td style='width: 100px; text-align: right;'><button onclick='remove_selection(" +
      i +
      ")'>Remove</button></td>"; //removed second add button
  }

  myTable += "</table>";
  // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";
  myTable +=
    "<td style='width: 100px; text-align: right;'><button onclick='checkout()'>Checkout</button></td>"; //created our checkout button for the shopping cart and added the "onclick" event

  // document.write(myTable);
  document.getElementById("demo").innerHTML = myTable;
}

window.onload = function () {
  display_all();
};
