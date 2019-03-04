
function displayListOfCheckedItems() {
  var output = document.querySelector("#output");
  output.innerHTML = "";

  // all inputs that have been checked
  var selectedFruitOutput = "";

  // reset style on all list elements
  document.querySelectorAll("li").forEach(function (li) {
    li.classList.remove("checked");
  });

  var selectedFruits = document.querySelectorAll("#fruits input:checked");
  selectedFruits.forEach(function (fruit) {
    selectedFruitOutput += fruit.value + ", ";

    // get the li parent of the current selected input
    var liParent = fruit.parentNode;
    // add the CSS class .checked
    liParent.classList.add("checked");
  });
  // remove trailing comma from output
  selectedFruitOutput = selectedFruitOutput.slice(0, -2);
  output.innerHTML = "You selected: " + selectedFruitOutput;
}

function removeSelected() {
  var list = document.querySelectorAll("#fruits input:checked");
  var ul = document.querySelector("#fruits");

  list.forEach(function (elm) {
    // elm is an <input type="checkbox">, its parent is a li
    // we want to remove from the <ul> list
    // when we remove the <li>, the <input> will also
    // be removed, as it's a child of the <li>
    var li = elm.parentNode;
    ul.removeChild(li);
  });
}

function reset() {
  var ul = document.querySelector("#fruits");
  // Empty the <ul>
  ul.innerHTML = "";

  var fruits = ["Apples", "Oranges", "Bananas", "Grapes", "Strawberries"];
  //console.log("fruits: " + fruits);

  fruits.forEach(addFruitToList);

  // old way below, condensed with above foreach loop iterating over list of fruits
  /*  
  // Adds each list item to the <ul> using innerHTML += ...
  ul.innerHTML += "<li><input type='checkbox' name='fruit' value='apples'>Apples</li>";

  ul.innerHTML += "<li><input type='checkbox' name='fruit' value='oranges'>Oranges</li>";

  ul.innerHTML += "<li><input type='checkbox' name='fruit' value='bananas'>Bananas</li>";

  ul.innerHTML += "<li><input type='checkbox' name='fruit' value='grapes'>Grapes</li>";
  */

  var output = document.querySelector("#output");
  output.innerHTML = "";
}

function addFruitToList(fruit) {
  console.log(fruit);
  var fruitList = document.querySelector("#fruits");

  var li = document.createElement('li')

  var input = document.createElement('input');
  input.type = 'checkbox';
  input.name = 'fruit';
  input.value = fruit;

  li.append(input);
  li.innerHTML += fruit;

  fruitList.append(li);
}