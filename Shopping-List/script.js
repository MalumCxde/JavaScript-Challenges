class ShoppingList {
    // Constructor function to initialize the ShoppingList object
    constructor(itemsSelector, additemButtonSelector, newItemSelector, storageKey = 'shoppingList') {
        // Setting instance variables based on the passed parameters and default values
        this.storageKey = storageKey;
        this.itemsElement = document.querySelector(itemsSelector);
        this.addItemButtonElement = document.querySelector(additemButtonSelector);
        this.newItemTextElement = document.querySelector(newItemSelector);

        // Retrieving items from local storage if available, otherwise initializing as an empty array
        this.items = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        
        // Call the Intialise method to set up event listeners
        this.Intialise();
    }

    // Method to initialize event listeners
    Intialise() {
        // Adding an event listener to the "Add Item" button
        this.addItemButtonElement.addEventListener('click', () => {
            // Retrieving the text entered in the input field
            const text = this.newItemTextElement.value;
            // Adding the new item to the list
            this.addItem(text);
            // Clearing the input field
            this.newItemTextElement.value = '';
            // Rendering the updated list
            this.renderItems();
            // Storing the updated list in local storage
            this.storeItems();
        });
    }

    // Method to render the items in the shopping list
    renderItems() {
        // Clearing the existing items in the HTML element
        this.itemsElement.innerHTML = '';
        // Checking if the list is empty
        if (this.items.length === 0) {
            // If empty, displaying a message indicating no items
            const itemElement = document.createElement('li');
            itemElement.textContent = 'No items';
            this.itemsElement.appendChild(itemElement);
        }

        // Iterating through each item in the list
        this.items.forEach((item, index) => {
            // Creating an element to represent each item
            const itemElement = document.createElement('li');
            // Setting the text content of the item element to the item's text
            itemElement.textContent = item;
            // Creating a remove button for each item
            const removeElement = document.createElement('span');
            removeElement.textContent = 'Remove';
            removeElement.classList.add('remove-item');
            // Adding an event listener to the remove button to handle removal of the item
            removeElement.onclick = () => {
                this.removeItemAt(index); // Remove the item at the specified index
                this.renderItems(); // Re-render the updated list
                this.storeItems(); // Store the updated list in local storage
            };
            // Appending the remove button to the item element
            itemElement.appendChild(removeElement);
            // Appending the item element to the list container
            this.itemsElement.appendChild(itemElement);
        });
    }

    // Method to add a new item to the shopping list
    addItem(newItem) {
        this.items.push(newItem);
    }

    // Method to remove an item at a specific index from the shopping list
    removeItemAt(indexToRemove) {
        this.items = this.items.filter((item, index) => indexToRemove != index);
    }

    // Method to store the items in the shopping list to local storage
    storeItems() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    }
}

// Creating an instance of the ShoppingList class
const myShoppingList = new ShoppingList('#shoppingListItems', '#addItem', '#newItemtext');

// Rendering the items initially
myShoppingList.renderItems();
