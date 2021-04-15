// add pageTitle

const pageTitle = `My Shopping List`;

// add groceries

const groceries = [`apples`, `pineapple`, `carrots`, `lemons`, `ginger`,`shrimp`, `rice`, `beets`, `orange` ,`lime`];

/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle(){

  const title = document.getElementById('title');
  title.innerText = pageTitle;
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 * get groceries its an id, forEach  each item, will be a list so li, now add
 */
function displayGroceries() {

  const shoppingList = document.getElementById('groceries')
    groceries.forEach((items) => {
      const newItem = document.createElement('li')
      newItem.innerText= items;
     // addItem(newItem, items.item)
        shoppingList.insertAdjacentElement('beforeend', newItem)
    });
 
}
  // dont need this because no need to add p
  // function addItem(parent, item) {
  //   const addGrocery = document.createElement('p');
  //   groceries.forEach((addItem) => {
  //     addGrocery.innerText += " " + addItem;
  //   });

  //   parent.appendChild(addGrocery)
  // }

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {

  const groceries = document.querySelectorAll('li');
    groceries.forEach((items) => {
      items.setAttribute(`class`, `completed`)
    });
}

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
